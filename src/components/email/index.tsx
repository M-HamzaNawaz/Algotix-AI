import * as React from "react";

export interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  techStack: string;
  message: string;
  agreeToTerms: boolean;
  newsletter: boolean;
  service: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  phone,
  email,
  techStack,
  message,
  agreeToTerms,
  newsletter,
  service,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      padding: "30px",
      borderRadius: "8px",
      maxWidth: "600px",
      margin: "0 auto",
      color: "#333",
    }}
  >
    <h2
      style={{
        color: "#2c3e50",
        borderBottom: "2px solid #e0e0e0",
        paddingBottom: "10px",
      }}
    >
      📩 New Form Submission Received
    </h2>

    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      <tbody>
        <tr>
          <td style={labelStyle}>Full Name:</td>
          <td style={valueStyle}>
            {firstName} {lastName}
          </td>
        </tr>
        <tr>
          <td style={labelStyle}>Email:</td>
          <td style={valueStyle}>{email}</td>
        </tr>
        <tr>
          <td style={labelStyle}>Phone:</td>
          <td style={valueStyle}>{phone}</td>
        </tr>
        <tr>
          <td style={labelStyle}>Tech Stack:</td>
          <td style={valueStyle}>{techStack}</td>
        </tr>
        <tr>
          <td style={labelStyle}>Service Requested:</td>
          <td style={valueStyle}>{service}</td>
        </tr>
        <tr>
          <td style={labelStyle}>Agreed to Terms:</td>
          <td style={valueStyle}>{agreeToTerms ? "✅ Yes" : "❌ No"}</td>
        </tr>
        <tr>
          <td style={labelStyle}>Subscribed to Newsletter:</td>
          <td style={valueStyle}>{newsletter ? "✅ Yes" : "❌ No"}</td>
        </tr>
        <tr>
          <td style={labelStyle}>Message:</td>
          <td style={{ ...valueStyle, whiteSpace: "pre-line" }}>{message}</td>
        </tr>
      </tbody>
    </table>

    <p style={{ marginTop: "30px", fontSize: "12px", color: "#888" }}>
      This email was automatically generated from a user form submission.
    </p>
  </div>
);

const labelStyle: React.CSSProperties = {
  fontWeight: "bold",
  padding: "10px 10px 10px 0",
  verticalAlign: "top",
  width: "40%",
  color: "#444",
};

const valueStyle: React.CSSProperties = {
  padding: "10px 0",
  color: "#555",
};
