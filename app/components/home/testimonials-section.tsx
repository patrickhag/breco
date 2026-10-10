
export default function TestimonialsSection() {

  return (
    <section className="container section testimonials">
      <div className="center-heading">
        <span className="eyebrow">Good conversations. Real results.</span>
        <h2>A new favorite teammate.</h2>
        <p>Trusted by 250+ businesses to be there, even when they can’t.</p>
      </div>
      <div className="testimonials-grid">
        {[
          {
            quote:
              "We added Breco to our Shopify store and saw a 40% drop in support tickets within the first week. Customers get instant answers about shipping and returns without waiting.",
            name: "Sarah K.",
            role: "E-commerce owner",
            initials: "SK",
          },
          {
            quote:
              "Setup took literally 4 minutes. I entered my URL, it scraped everything, and the bot was already answering product questions accurately. This is what AI should feel like.",
            name: "James D.",
            role: "SaaS founder",
            initials: "JD",
          },
          {
            quote:
              "Our leads increased by 25% after adding Breco. The chatbot qualifies visitors and captures emails before they bounce. It pays for itself every month.",
            name: "Amanda M.",
            role: "Marketing director",
            initials: "AM",
          },
        ].map((x) => (
          <figure key={x.name}>
            <div className="stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <blockquote>“{x.quote}”</blockquote>
            <figcaption>
              <span className="person-avatar">{x.initials}</span>
              <div>
                {x.name}
                <small>{x.role}</small>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
