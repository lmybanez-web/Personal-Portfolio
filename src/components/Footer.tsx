import { profile } from "../data";
import { GithubOutlined, FacebookOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const socialIcons: Record<string, React.ReactNode> = {
  github: <GithubOutlined />,
  facebook: <FacebookOutlined />,
  linkedin: <LinkedinOutlined />,
  email: <MailOutlined />,
};

export default function Footer() {
  return (
    <footer style={{ padding: "32px 0" }}>
      <div
        className="section-inner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)" }}>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: 24 }}>
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
    </footer>
  );
}
