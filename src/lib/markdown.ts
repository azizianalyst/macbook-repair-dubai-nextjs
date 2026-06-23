import MarkdownIt from "markdown-it";

// Shared markdown renderer for admin-authored blog posts.
// IMPORTANT: keep these options identical to scripts/gen-blog.cjs (the build-time renderer) so the
// /admin/blog live preview matches exactly what gets baked into posts.generated.ts at build.
// html:false — the owner writes markdown, not raw HTML (safe-by-default, no injection surface).
const md = new MarkdownIt({ html: false, linkify: true, typographer: true, breaks: false });

// Demote any body <h1> to <h2>: the post title is already the page's single <h1> (set by
// BlogPostTemplate), so a stray "# heading" in the body must not create a second H1.
function demoteH1(html: string): string {
  return html.replace(/<h1(\s[^>]*)?>/gi, "<h2>").replace(/<\/h1>/gi, "</h2>");
}

export function renderMarkdown(src: string): string {
  return demoteH1(md.render(src || ""));
}
