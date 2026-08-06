import { Col, Row } from "antd";
import { education, experience } from "../data";

type Entry = { role: string; period: string; place: string; description: string };

function TimelineBlock({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <div>
      <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 28 }}>{title}</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {entries.map((entry, i) => (
          <div
            key={entry.role}
            style={{
              position: "relative",
              paddingLeft: 28,
              paddingBottom: i < entries.length - 1 ? 32 : 0,
              borderLeft: i < entries.length - 1 ? "1px solid var(--line)" : "1px solid transparent",
              marginLeft: 5,
            }}
          >
            <span
              style={{
                position: "absolute",
                left: -6,
                top: 4,
                width: 11,
                height: 11,
                background: "var(--surface)",
                border: "2px solid var(--accent)",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--brass)",
                letterSpacing: "0.04em",
              }}
            >
              {entry.period}
            </span>
            <h4 style={{ fontSize: 17, fontWeight: 600, marginTop: 6 }}>{entry.role}</h4>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)", marginTop: 2 }}>
              {entry.place}
            </p>
            <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, marginTop: 8 }}>
              {entry.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">Resume</p>
          <h2 className="section-title">Where I've worked and studied</h2>
        </div>

        <Row gutter={[64, 48]}>
          <Col xs={24} md={12}>
            <TimelineBlock title="Experience" entries={experience} />
          </Col>
          <Col xs={24} md={12}>
            <TimelineBlock title="Education" entries={education} />
          </Col>
        </Row>
      </div>
    </section>
  );
}
