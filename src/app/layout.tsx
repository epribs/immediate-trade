import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { mainMenu, contentMenu } from "@/config/menu.config";
import { Section, Container } from "@/components/craft";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/config/site.config";

import Balancer from "react-wrap-balancer";
import Logo from "@/public/assets/logo/immediate-trade-logo-640.png";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const font = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "WordPress & Next.js Starter by 9d8",
  description:
    "A starter template for Next.js with WordPress as a headless CMS.",
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen font-sans antialiased", font.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn("sticky z-50 top-0 bg-background", "border-b", className)}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-4 items-center"
          href="/"
        >
          <Image
            src={Logo}
            alt="Logo"
            loading="eager"
            className="dark:invert"
            width={105}
            height={72}
          ></Image>
          {/* <h2 className="text-sm">{siteConfig.site_name}</h2> */}
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex">
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild variant="ghost" size="sm">
                <Link href={href}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </Button>
            ))}
          </div>
          <Button asChild className="hidden sm:flex">
            <Link href="/login">Login</Link>
          </Button>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer>
      <Section>
        <Container className="border-t not-prose grid md:grid-cols-[1.5fr_0.5fr] gap-12">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <span className="sr-only">{siteConfig.site_name}</span>
              <Image
                src={Logo}
                alt="Logo"
                className="dark:invert"
                width={118}
                height={80}
              ></Image>
            </Link>
            <p>
              <Balancer>{siteConfig.site_description}</Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-right">
            <span className="sr-only">{siteConfig.site_name}</span>
            {Object.entries(mainMenu).map(([key, href]) => (
              <Link
                className="font-medium text-base hover:underline underline-offset-4"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
          {/* <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base">Blog</h5>
            {Object.entries(contentMenu).map(([key, href]) => (
              <Link
                className="hover:underline underline-offset-4"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div> */}
        </Container>
        <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
          <p className="text-muted-foreground">
            &copy; <a href={siteConfig.site_domain}>{siteConfig.site_name}</a>.
            All rights reserved. {new Date().getFullYear()}-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
};
