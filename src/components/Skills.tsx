import { Col, Progress, Row } from "antd";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "var(--surface)" }}>
      <div className="section-inner">
        <Row gutter={[64, 32]}>
          <Col xs={24} md={9}>
            <p className="eyebrow">My Skills</p>
            <h2 className="section-title">Tools &amp; disciplines I rely on</h2>
            <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8, marginTop: 20 }}>
              A working set built over a decade of shipping product and brand work — refined project
              by project rather than picked up all at once.
            </p>
          </Col>

          <Col xs={24} md={15}>
            <Row gutter={[32, 24]}>
              {skills.map((skill) => (
                <Col xs={24} sm={12} key={skill.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>{skill.label}</span>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--muted)", fontSize: 13 }}>
                      {skill.value}%
                    </span>
                  </div>
                  <Progress
                    percent={skill.value}
                    showInfo={false}
                    strokeColor="var(--accent)"
                    trailColor="var(--paper)"
                    strokeLinecap="square"
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
}
