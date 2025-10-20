"use client"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function noWidow(text) {
  if (!text) return text
  // replace the last space (if any) with a nbsp
  return text.replace(/\s+([^\s]+)\s*$/, "\u00A0$1")
}

function applyNoWidow(root) {
  if (!root || root.dataset.nowidowApplied === "1") return
  // walk all descendant text nodes
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      // ignore empty/whitespace-only
      return /\S/.test(node.nodeValue || "") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    },
  })
  // we only want to apply on the *last* text node we encounter
  // so collect nodes, then mutate the last one.
  const textNodes = []
  let current = walker.nextNode()
  while (current) {
    textNodes.push(current)
    current = walker.nextNode()
  }
  const last = textNodes.at(-1)
  if (last) last.nodeValue = noWidow(last.nodeValue)
  root.dataset.nowidowApplied = "1"
}

export default function NoWidowProvider({
  // default selectors + an opt-in class you can add where needed
  selector = "h1, h2, h3, .no-widow",
} = {}) {
  const location = useLocation()

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll(selector).forEach(applyNoWidow)
    })
    return () => cancelAnimationFrame(raf)
  }, [location.pathname, selector])

  return null
}
