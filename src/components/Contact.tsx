import type { ReactNode } from "react";
import { Button, Col, Form, Input, Row, message } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { contact } from "../data";

const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log("Contact form submitted:", values);
    message.success("Thanks for reaching out — I'll get back to you soon.");
    form.resetFields();
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--surface)" }}>
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">{contact.heading}</h2>
        </div>

        <Row gutter={[64, 40]}>
          <Col xs={24} md={14}>
            <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name" }]}>
                    <Input size="large" placeholder="Your name" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Enter a valid email" },
                    ]}
                  >
                    <Input size="large" placeholder="you@example.com" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name="subject" label="Subject" rules={[{ required: true, message: "Please enter a subject" }]}>
                <Input size="large" placeholder="What's this about?" />
              </Form.Item>
              <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please enter a message" }]}>
                <TextArea rows={5} placeholder="Tell me a bit about your project..." />
              </Form.Item>
              <Button type="primary" size="large" htmlType="submit">
                Send message
              </Button>
            </Form>
          </Col>

          <Col xs={24} md={10}>
            <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8 }}>{contact.description}</p>

            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 20 }}>
              <InfoRow icon={<MailOutlined />} label="Email" value={contact.email} />
              <InfoRow icon={<PhoneOutlined />} label="Phone" value={contact.phone} />
              <InfoRow icon={<EnvironmentOutlined />} label="Address" value={contact.address} />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
      <div
        style={{
          width: 38,
          height: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid var(--line)",
          color: "var(--accent)",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", textTransform: "uppercase" }}>
          {label}
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 16, marginTop: 2 }}>{value}</div>
      </div>
    </div>
  );
}
