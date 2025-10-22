"use client";
import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

/** Leagă ultimele `keep` cuvinte cu NBSP (non-breaking space). */
function noWidow(text, keep = 2) {
  if (!text) return text;
  const parts = String(text).trim().split(/\s+/);
  if (parts.length <= keep) return text;
  const tail = parts.splice(-keep).join("\u00A0");
  return [...parts, tail].join(" ");
}

/** Găsește ultimul text node util (fără <code>, <pre>, <input>, etc.). */
function getLastTextNode(root) {
  const SKIP = new Set([
    "SCRIPT","STYLE","NOSCRIPT","CODE","PRE","KBD","TEXTAREA","INPUT","SELECT","SVG"
  ]);
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const p = node.parentElement;
        if (!p || SKIP.has(p.tagName)) return NodeFilter.FILTER_REJECT;
        if (p.closest("[contenteditable='true']")) return NodeFilter.FILTER_REJECT;
        return /\S/.test(node.nodeValue || "") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    }
  );
  let last = null, cur = walker.nextNode();
  while (cur) { last = cur; cur = walker.nextNode(); }
  return last;
}

function applyNoWidowTo(el, keep) {
  if (!el || el.dataset.nowidowApplied === "1") return;
  if (el.matches("[data-no-widow='off']")) return; // opt-out punctual
  const last = getLastTextNode(el);
  if (last) {
    last.nodeValue = noWidow(last.nodeValue, keep);
    el.dataset.nowidowApplied = "1";
  }
}

function run(selectors, keep) {
  document.querySelectorAll(selectors).forEach((el) => applyNoWidowTo(el, keep));
}

function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

export default function NoWidowProvider({
  selector = "h1, h2, h3, .no-widow",
  keep = 2,
  observe = true,
  reactOnResize = true,
} = {}) {
  const location = useLocation();
  const debouncedRun = useMemo(() => debounce(() => run(selector, keep), 100), [selector, keep]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => run(selector, keep));
    return () => cancelAnimationFrame(raf);
  }, [location.pathname, selector, keep]);

  useEffect(() => {
    if (!reactOnResize) return;
    window.addEventListener("resize", debouncedRun);
    return () => window.removeEventListener("resize", debouncedRun);
  }, [debouncedRun, reactOnResize]);

  useEffect(() => {
    if (!observe) return;
    const mo = new MutationObserver(() => requestAnimationFrame(debouncedRun));
    mo.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    return () => mo.disconnect();
  }, [debouncedRun, observe]);

  return null;
}
