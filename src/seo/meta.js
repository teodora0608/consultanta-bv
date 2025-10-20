// src/seo/meta.js
export function setMetaTags({
  title,
  description,
  canonical,
  image,
  siteName = "ConsultantABV",

  // ✅ opționale (noi)
  ogType = "website",          // ex: "article" pe ghiduri
  robots = "index,follow",     // schimbă la "noindex,nofollow" pe pagini speciale
  imageAlt,                    // text alternativ pentru og:image/twitter:image
  twitterSite,                 // ex: "@consultantabv"
  twitterCreator,              // ex: "@bianca"
  locale = "ro_RO",            // og:locale
} = {}) {
  // SSR / build safe
  if (typeof document === "undefined") return

  if (title) document.title = title

  const absoluteUrl = (url) => {
    if (!url) return url
    try {
      // dacă e relativ, îl facem absolut bazat pe locația curentă (sau fallback domeniu)
      const base =
        (typeof window !== "undefined" && window.location.origin) ||
        "https://consultantabv.ro"
      return new URL(url, base).toString()
    } catch {
      return url
    }
  }

  const upsert = (sel, tag, attrs = {}) => {
    let el = document.head.querySelector(sel)
    if (!el) {
      el = document.createElement(tag)
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
      document.head.appendChild(el)
    }
    return el
  }

  const setMeta = (name, content, attr = "name") => {
    if (!content) return
    const el = upsert(`meta[${attr}="${name}"]`, "meta", { [attr]: name })
    // evităm scrierile inutile
    if (el.getAttribute("content") !== String(content)) {
      el.setAttribute("content", String(content))
    }
  }

  const setLink = (rel, href) => {
    if (!href) return
    const el = upsert(`link[rel="${rel}"]`, "link", { rel })
    const abs = absoluteUrl(href)
    if (el.getAttribute("href") !== abs) {
      el.setAttribute("href", abs)
    }
  }

  // description
  setMeta("description", description)

  // canonical (forțăm absolut)
  if (canonical) setLink("canonical", absoluteUrl(canonical))

  // robots
  setMeta("robots", robots)

  // Open Graph
  setMeta("og:type", ogType, "property")
  setMeta("og:site_name", siteName, "property")
  setMeta("og:url", absoluteUrl(canonical), "property")
  setMeta("og:title", title, "property")
  setMeta("og:description", description, "property")
  setMeta("og:image", absoluteUrl(image), "property")
  setMeta("og:image:secure_url", absoluteUrl(image), "property")
  setMeta("og:image:width", "1200", "property")
  setMeta("og:image:height", "630", "property")
  setMeta("og:locale", locale, "property")
  if (imageAlt) setMeta("og:image:alt", imageAlt, "property")

  // Twitter
  setMeta("twitter:card", "summary_large_image")
  setMeta("twitter:title", title)
  setMeta("twitter:description", description)
  setMeta("twitter:image", absoluteUrl(image))
  if (imageAlt) setMeta("twitter:image:alt", imageAlt)
  if (twitterSite) setMeta("twitter:site", twitterSite)
  if (twitterCreator) setMeta("twitter:creator", twitterCreator)
}
