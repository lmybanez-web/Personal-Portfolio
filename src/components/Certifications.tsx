import { useState } from "react";
import { Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { certifications } from "../data";

export default function Certifications() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="certifications" className="section" style={{ background: "var(--surface)" }}>
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">Certifications</p>
          <h2 className="section-title">Credentials I'm building</h2>
        </div>

        <Row gutter={[24, 24]}>
          {certifications.map((item, i) => (
            <Col xs={24} sm={12} md={8} key={item.title}>
              <a
                href={item.href}
                target={item.href !== "#" ? "_blank" : undefined}
                rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ display: "block", cursor: item.href === "#" ? "default" : "pointer" }}
              >
                <div
                  style={{
                    aspectRatio: "1 / 1",
                    background: `linear-gradient(160deg, var(--paper), var(--line))`,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(16,20,28,0.72)",
                      opacity: hovered === i ? 1 : 0,
                      transition: "opacity 0.25s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: 24,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "#fff",
                        opacity: 0.7,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {item.category}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 6,
                      }}
                    >
                      <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>{item.title}</h3>
                      <ArrowRightOutlined style={{ color: "#fff" }} />
                    </div>
                  </div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}