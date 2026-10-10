// Example responses for the local playground; no network service is called.
const demoReplies = [
  {
    pattern: /price|plan|cost/i,
    reply: "Breco offers a 7-day free trial. For around 3,000 chats per month, Growth is a strong fit. Contact support@breco.io for current plan details."
  },
  {
    pattern: /shopify|wordpress|integrat|platform/i,
    reply: "Yes! Breco works with Shopify, WordPress, Wix, Squarespace, Webflow, and custom websites. You only need to add one script tag."
  },
  {
    pattern: /lead/i,
    reply: "Breco can capture names and emails mid-conversation, then organize them in your leads dashboard for CSV export."
  },
  {
    pattern: /brand|color|custom/i,
    reply: "You can customize your chatbot’s theme, shape, and tone. The Brand Bundle also includes your own colors, logo, name, and branding removal."
  }
];
const fallbackReply = "Breco learns from your website, uploaded files, and custom Q&A to answer questions around the clock. Setup typically takes under five minutes. Ask me about integrations, customization, leads, or plans!";

export function getDemoReply(question: string): string {
  return demoReplies.find(({ pattern }) => pattern.test(question))?.reply ?? fallbackReply;
}
