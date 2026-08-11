import { Button, Col, Row } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { about, profile } from "../data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <Row gutter={[64, 32]}>
          <Col xs={24} md={10}>
            <p className="eyebrow">About Me</p>
            <h2 className="section-title">{about.heading}</h2>
            <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8, marginTop: 20, maxWidth: 420 }}>
              {about.bio}
            </p>
            <Button
              size="large"
              type="primary"
              icon={<DownloadOutlined />}
              style={{ marginTop: 32 }}
              href={profile.cvUrl}
              download="Lio_Mikael_Ybanez_CV.pdf"
            >
              Download CV
            </Button>
          </Col>

          <Col xs={24} md={14}>
            <Row gutter={[0, 0]} style={{ border: "1px solid var(--line)" }}>
              {about.facts.map((fact, i) => (
                <Col
                  xs={24}
                  sm={12}
                  key={fact.label}
                  style={{
                    padding: "20px 24px",
                    borderBottom: i < about.facts.length - 2 ? "1px solid var(--line)" : "none",
                    borderRight: i % 2 === 0 ? "1px solid var(--line)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {fact.label}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 17, marginTop: 6 }}>
                    {fact.value}
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
}
