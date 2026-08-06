import { Col, Row } from "antd";
import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">Services</p>
          <h2 className="section-title">What I can do for you</h2>
        </div>

        <Row gutter={[1, 1]} style={{ background: "var(--line)", border: "1px solid var(--line)" }}>
          {services.map((service, i) => (
            <Col xs={24} sm={12} md={8} key={service.title}>
              <div
                style={{
                  background: "var(--surface)",
                  padding: "36px 28px",
                  height: "100%",
                  transition: "background 0.2s ease",
                }}
                className="service-card"
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--brass)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 14 }}>{service.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, marginTop: 10 }}>
                  {service.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <style>{`
        .service-card:hover { background: var(--accent-soft) !important; }
      `}</style>
    </section>
  );
}
