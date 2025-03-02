import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import ImageKitProvider from "@/providers/imagekit-provider";
import { NavbarMainDemo } from "@/components/layouts/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Put Jay to Work",
  description: "Your Friendly Ecommere Expert here to help you grow your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="72191f71-6cde-4bb3-ad73-d07f40082464"
        ></script>
      </head>
      <body className={inter.className}>
        <ImageKitProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div vaul-drawer-wrapper="" className="bg-background min-h-screen">
              <div className="w-full flex items-center justify-center max-w-5xl mx-auto">
                <div className="w-full">
                  <NavbarMainDemo />
                </div>
              </div>
              {children}
            </div>
          </ThemeProvider>
        </ImageKitProvider>
        <Toaster />
      </body>
    </html>
  );
}