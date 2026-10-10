# Breco landing page

A responsive landing page inspired by the provided dark, grid-based reference. Built with Next.js 16.4.0, TypeScript, Tailwind CSS 4, and Lucide React icons.

## Run

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run build` for production and `npm run typecheck` for TypeScript validation.

## Content and interactions

- Content adapted from the supplied brief; branding changed to Breco.
- Header light/dark toggle with a saved browser preference, applied before first paint. Dark mode is the default.
- Responsive navigation, three feature tabs, FAQ accordion, accessible contact dialogs, copyable installation example, and local example-response chat demo.
- Signup, billing, AI chat, and the example widget endpoint are not connected to a backend. The trial and pricing flows use `support@breco.io`, adapted from the supplied brand address; verify this address and replace contact flows with production URLs before publishing.
- Plan prices were omitted because they were not in the brief. Testimonials and marketing statistics are supplied content.
- Product illustrations are CSS and Lucide vectors. The raster social image is genuinely AVIF-encoded, not merely renamed. Regenerate with `node scripts/create-social-image.cjs`.

Set `NEXT_PUBLIC_SITE_URL` to your deployed site URL for absolute social-preview links. The production build uses Webpack to support restricted environments where Turbopack cannot open worker ports.

Primary files: `app/page.tsx`, `app/globals.css`, `app/layout.tsx`.

## Component structure

- `app/page.tsx` composes the home page and owns only shared dialog/chat visibility.
- `app/components/home/` contains the page sections, previews, demo chat, and contact dialog. Tabs, FAQ expansion, clipboard feedback, and chat messages stay inside their owning components.
- `app/components/home/demo-reply.ts` holds the pure example-response logic separately from the chat UI.
- `app/components/` holds site navigation, the footer, logo, theme toggle, and reusable tick list.

Sections request shared actions through typed callback props. Keep section-specific content and behavior together; lift state only when multiple sections need it.
