import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
import IntroLoader from "@/src/components/intro-loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-poppins",
});

const DOMAIN =
  env.DOMAIN ||
  (env.RAILWAY_PUBLIC_DOMAIN
    ? `https://${env.RAILWAY_PUBLIC_DOMAIN}`
    : undefined);

/**
 * Shows the intro splash once per browser session. Appending `?intro=1` to any
 * URL forces it to play again, which is handy for demos.
 */
const INTRO_SESSION_SCRIPT = `(function(){try{
  if (location.search.indexOf('intro=1') > -1) { sessionStorage.removeItem('algotix-intro'); return; }
  if (sessionStorage.getItem('algotix-intro') === '1') { document.documentElement.setAttribute('data-intro-seen',''); }
  else { sessionStorage.setItem('algotix-intro','1'); }
}catch(e){}})();`;

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
    /* The inline script below marks repeat visits on <html> before React
       hydrates, so React has to be told not to flag that attribute. This
       covers only <html> itself, not anything nested inside it. */
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {/* Runs before first paint: marks repeat visits so the intro splash is
            hidden by CSS instead of flashing and then being torn down. */}
        <script
          dangerouslySetInnerHTML={{
            __html: INTRO_SESSION_SCRIPT,
          }}
        />
        <Script
          src="/js/requestAnimationFramePolyfill.js"
          strategy="beforeInteractive"
        />
        <MotionProvider>
          <SelectionStyle />
          <SmoothScrollProvider />
          <IntroLoader />
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
