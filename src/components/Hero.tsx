import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { profile } from "../data";
import { GithubOutlined, FacebookOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const socialIcons: Record<string, React.ReactNode> = {
  github: <GithubOutlined />,
  facebook: <FacebookOutlined />,
  linkedin: <LinkedinOutlined />,
  email: <MailOutlined />,
};

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 96,
        overflow: "hidden",
      }}
    >
      {/* vertical status rail — signature element */}
      <div
        style={{
          position: "absolute",
          right: 32,
          top: 120,
          bottom: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="hero-rail"
      >
        <div
          style={{
            writingMode: "vertical-rl",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.16em",
            color: "var(--muted)",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "red",
              display: "inline-block",
            }}
          />
          {profile.status.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--muted)", fontSize: 24 }}
            >
              {socialIcons[s.icon]}
            </a>
          ))}
        </div>
      </div>

      <div className="section-inner" style={{ paddingRight: 96, width: "100%" }}>
        <img
          src={profile.heroImage}
          alt={profile.name}
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid var(--accent)",
            marginBottom: 20,
          }}
        />
        <p className="eyebrow">HELLO, I'M</p>
        <h1
          style={{
            fontSize: "clamp(48px, 9vw, 108px)",
            fontWeight: 700,
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
            marginTop: 18,
          }}
        >
          {profile.name.split(" ")[0]}
          <br />
          {profile.name.split(" ").slice(1).join(" ")}
          <span style={{ color: "var(--accent)" }}>.</span>
        </h1>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 28, flexWrap: "wrap" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              letterSpacing: "0.05em",
              color: "var(--brass)",
              border: "1px solid var(--brass)",
              padding: "6px 14px",
            }}
          >
            {profile.role.toUpperCase()}
          </span>
          <span style={{ color: "var(--muted)", fontSize: 15 }}>{profile.phone}</span>
        </div>

        <div style={{ marginTop: 44, display: "flex", gap: 16 }}>
          <Button
            type="primary"
            size="large"
            icon={<ArrowRightOutlined />}
            iconPosition="end"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </Button>
          <Button
            size="large"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-rail { display: none; }
        }
      `}</style>
    </section>
  );
}
