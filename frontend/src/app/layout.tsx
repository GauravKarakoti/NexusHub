import "./globals.css";
// TODO 1: Implement Auth Provider wrapper
// TODO 2: Implement Socket Provider wrapper

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
        {/* TODO 3: Wrap children in SessionProvider and SocketProvider */}
        {/* TODO 4: Add global navigation bar / sidebar layout container */}
        <main>{children}</main>
      </body>
    </html>
  );
}