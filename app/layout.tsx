import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/common/layout/Navbar";
import { Poppins } from "next/font/google";
import Footer from "@/src/components/navigation/footer";
import { env } from "process";
import { routes } from "@/src/constants/routes";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import GlobalDrawer from "@/src/components/global-drawer";
import SelectionStyle from "@/src/components/SelectionStyle";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BackToTopButton from "@/src/components/BackToTopButton";
import MotionProvider from "@/src/components/motion/motion-provider";
import SmoothScrollProvider from "@/src/components/motion/smooth-scroll-provider";
import PageTransition from "@/src/components/motion/page-transition";
import ScrollProgress from "@/src/components/motion/scroll-progress";
import PointerGlow from "@/src/components/motion/pointer-glow";

const poppins = Poppins({
  subsets: ["latin"],
  // Regular, semibold and bold are the only weights the type scale uses.
  weight: ["400", "600", "700"],
  style: ["normal"],
  variable: "--font-poppins",
});

const DOMAIN =
  env.DOMAIN ||
  (env.RAILWAY_PUBLIC_DOMAIN
    ? `https://${env.RAILWAY_PUBLIC_DOMAIN}`
    : undefined);

export const metadata: Metadata = {
  metadataBase: DOMAIN ? new URL(DOMAIN) : undefined,
  title: {
    default: routes.HOME.metaTitle,
    template: "%s | Algotix AI",
  },
  description: routes.HOME.description,
  openGraph: {
    title: routes.HOME.metaTitle,
    description: routes.HOME.description,
    url: DOMAIN,
  },
  twitter: {
    card: routes.HOME.twitter.card,
    title: routes.HOME.twitter.title,
    description: routes.HOME.twitter.description,
    images: [`${DOMAIN}${routes.HOME.twitter.image}`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: DOMAIN,
  },
  icons: [
    /* SVG first: it swaps to a white mark on dark tab strips. The PNGs and
       favicon.ico are fallbacks for browsers without SVG icon support. */
    { rel: "icon", type: "image/svg+xml", url: "/fav-icon/favicon.svg" },
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "/fav-icon/favicon-32x32.png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
      url: "/fav-icon/favicon-16x16.png",
    },
    { rel: "shortcut icon", url: "/favicon.ico" },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/fav-icon/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Script
          src="/js/requestAnimationFramePolyfill.js"
          strategy="beforeInteractive"
        />
        <MotionProvider>
          <SelectionStyle />
          <SmoothScrollProvider />
          <PointerGlow />
          <ScrollProgress />
          <GlobalDrawer />
          <NextTopLoader
            showSpinner={false}
            color="#FE5A01"
            initialPosition={0.08}
            crawlSpeed={200}
            height={4}
            crawl={true}
            easing="ease"
            speed={100}
          />
          <Header />
          <PageTransition>{children}</PageTransition>
          <BackToTopButton />
          <Footer />

          <Analytics />
          <SpeedInsights />
        </MotionProvider>
      </body>
    </html>
  );
}
