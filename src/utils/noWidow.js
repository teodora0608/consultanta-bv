/**
 * Prevents widow words (single word on last line) by replacing the last space
 * with a non-breaking space (&nbsp;)
 * @param {string} txt - The text to process
 * @returns {string} - Text with non-breaking space before last word
 */
export function noWidowText(txt) {
  if (!txt) return txt
  return txt.replace(/\s+([^\s]+)\s*$/, "\u00A0$1")
}
