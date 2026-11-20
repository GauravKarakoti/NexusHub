import "./globals.css";
import Providers from "./providers";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "NexusHub",
  description: "Open-source full-stack collaboration platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
