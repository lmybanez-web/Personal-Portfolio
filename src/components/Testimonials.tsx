import { Carousel } from "antd";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">Reviews</p>
          <h2 className="section-title">What clients say</h2>
        </div>

        <Carousel autoplay dots={{ className: "testimonial-dots" }}>
          {testimonials.map((t) => (
            <div key={t.name}>
              <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", padding: "0 16px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  “{t.quote}”
                </p>
                <div style={{ marginTop: 28 }}>
                  <div style={{ fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)" }}>
                    {t.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <style>{`
        .testimonial-dots li button { background: var(--muted) !important; }
        .testimonial-dots li.slick-active button { background: var(--accent) !important; }
      `}</style>
    </section>
  );
}
