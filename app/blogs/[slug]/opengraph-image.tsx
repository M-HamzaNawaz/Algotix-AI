import { ImageResponse } from "next/og";
import { capitalCase } from "change-case";

export const alt = "Blog Article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const titleCase = capitalCase(slug);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDirection: "column",
          backgroundColor: "#2a2a2a",
          padding: "60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 400,
            color: "white",
            letterSpacing: -1,
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "#ff6b35",
            }}
          />
          <span style={{ marginLeft: "8px" }}>Algotix</span>
          <span
            style={{ marginLeft: "8px", color: "#ff6b35", fontWeight: 600 }}
          >
            AI
          </span>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flex: 1,
            justifyContent: "center",
            marginTop: "-60px",
            maxWidth: "70%",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: -2,
              marginBottom: "20px",
            }}
          >
            {titleCase}
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: "#cccccc",
              letterSpacing: -0.5,
            }}
          >
            Algotix Team
          </div>
        </div>

        {/* Geometric Elements */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "60px",
            width: "120px",
            height: "120px",
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
          }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "26px",
                height: "26px",
                border:
                  i === 5 || i === 6 || i === 9 || i === 10
                    ? "2px solid #ff6b35"
                    : "2px solid #555",
                backgroundColor: "transparent",
              }}
            />
          ))}
        </div>

        {/* Curved Lines */}
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
            width: "400px",
            height: "200px",
            background:
              "linear-gradient(45deg, transparent 0%, transparent 70%, #ff6b35 70%, #ff6b35 72%, transparent 72%)",
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            width: "350px",
            height: "150px",
            background:
              "linear-gradient(45deg, transparent 0%, transparent 70%, #ff6b35 70%, #ff6b35 72%, transparent 72%)",
            opacity: 0.2,
          }}
        />

        {/* Bottom accent lines */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "60px",
            width: "200px",
            height: "2px",
            background: "#ff6b35",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            left: "60px",
            width: "150px",
            height: "1px",
            background: "#ff6b35",
            opacity: 0.6,
          }}
        />

        {/* Type label */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "60px",
            fontSize: 14,
            fontWeight: 500,
            color: "#888",
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Tech Insights
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
