import "./globals.css";
import Script from "next/script";

const BASE = "https://nima-ha.github.io/nimamehrani";

export const metadata = {
  metadataBase: new URL(BASE),
  title: "Nima Mehrani | Full-Stack Developer & WordPress Expert",
  description: "Nima Mehrani | Full-Stack Developer, WordPress Expert & Site Designer",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Nima Mehrani | Full-Stack Developer",
    description: "Nima Mehrani | Full-Stack Developer, WordPress Expert & Site Designer",
    url: BASE,
    siteName: "Nima Mehrani",
    images: [{ url: BASE + "/images/profile.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nima Mehrani | Full-Stack Developer",
    description: "Nima Mehrani | Full-Stack Developer, WordPress Expert & Site Designer",
    images: [BASE + "/images/profile.jpg"]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: BASE
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nima Mehrani",
  jobTitle: "Full-Stack Developer & WordPress Expert",
  url: BASE,
  email: "mailto:nima@nimamehrani.ir",
  image: BASE + "/images/profile.jpg",
  sameAs: [
    "https://github.com/nimamehrani",
    "https://www.linkedin.com/in/nimamehrani/"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script id="nima-contact-widget" strategy="lazyOnload">
          {`(function(){var n=document.createElement("link");n.rel="stylesheet",n.href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css",document.head.appendChild(n);var t=document.createElement("div");t.id="nima-contact-widget",t.innerHTML='<button id="nima-widget-btn" style="position:fixed;bottom:24px;left:24px;z-index:9999;width:56px;height:56px;border-radius:50%;border:none;background:#1fe0b5;color:#071221;font-size:24px;cursor:pointer;box-shadow:0 4px 20px rgba(31,224,181,0.4);transition:all 0.3s" aria-label="Contact me"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></button><div id="nima-widget-panel" style="display:none;position:fixed;bottom:92px;left:24px;z-index:9999;width:300px;background:#0d1b2d;border:1px solid rgba(160,197,255,0.22);border-radius:16px;padding:20px;box-shadow:0 20px 60px rgba(0,0,0,0.5);font-family:system-ui,sans-serif"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><strong style="color:#e8f0ff;font-size:16px">Contact Me</strong><button id="nima-widget-close" style="background:none;border:none;color:#a8bbd9;font-size:20px;cursor:pointer;padding:0">&times;</button></div><a href="tel:+989377798775" style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;background:rgba(31,224,181,0.1);text-decoration:none;margin-bottom:8px;transition:background 0.2s" onmouseover="this.style.background=\'rgba(31,224,181,0.2)\'" onmouseout="this.style.background=\'rgba(31,224,181,0.1)\'"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1fe0b5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span style="color:#e8f0ff;font-size:14px">09377798775</span></a><a href="mailto:nima@nimamehrani.ir" style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;background:rgba(27,165,255,0.1);text-decoration:none;margin-bottom:8px;transition:background 0.2s" onmouseover="this.style.background=\'rgba(27,165,255,0.2)\'" onmouseout="this.style.background=\'rgba(27,165,255,0.1)\'"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1ba5ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><span style="color:#e8f0ff;font-size:14px">nima@nimamehrani.ir</span></a><a href="https://t.me/Nima4mehrani" target="_blank" style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;background:rgba(255,180,73,0.1);text-decoration:none;transition:background 0.2s" onmouseover="this.style.background=\'rgba(255,180,73,0.2)\'" onmouseout="this.style.background=\'rgba(255,180,73,0.1)\'"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffb449"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg><span style="color:#e8f0ff;font-size:14px">Telegram</span></a></div>',document.body.appendChild(t);var b=document.getElementById("nima-widget-btn"),p=document.getElementById("nima-widget-panel"),c=document.getElementById("nima-widget-close");b&&b.addEventListener("click",function(){p.style.display="block",b.style.display="none"}),c&&c.addEventListener("click",function(){p.style.display="none",b.style.display="flex"})})();`}
        </Script>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
      </body>
    </html>
  );
}
