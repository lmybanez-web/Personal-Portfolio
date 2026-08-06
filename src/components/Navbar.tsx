import { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { nav, profile } from "../data";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useThemeMode } from "../ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { mode, toggle } = useThemeMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (key: string) => {
    setActive(key);
    setOpen(false);
    document.getElementById(key)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "var(--paper)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            goTo("home");
          }}
          style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.01em" }}
        >
          {profile.name.split(" ")[0] ?? profile.name}
          <span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <nav style={{ display: "flex", gap: 32 }} className="desktop-nav">
          {nav.map((item) => (
            <a
              key={item.key}
              onClick={(e) => {
                e.preventDefault();
                goTo(item.key);
              }}
              href={`#${item.key}`}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: active === item.key ? "var(--accent)" : "var(--muted)",
                cursor: "pointer",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="desktop-nav">
          <Button type="primary" onClick={() => goTo("contact")}>
            Contact Me
          </Button>
        </div>
        <Button
          type="text"
          icon={mode === "dark" ? <SunOutlined /> : <MoonOutlined />}
          onClick={toggle}
          aria-label="Toggle theme"
        />

        <Button
          className="mobile-nav-btn"
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
        />
      </div>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="right"
        closeIcon={<CloseOutlined />}
        width={280}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {nav.map((item) => (
            <a
              key={item.key}
              onClick={(e) => {
                e.preventDefault();
                goTo(item.key);
              }}
              href={`#${item.key}`}
              style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500 }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </Drawer>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
