// app/layout.tsx
import Link from "next/link";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Documentation Site</h1>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              {/* <li> */}
              {/*   <a href="/">Home</a> */}
              {/* </li> */}
              {/* <li> */}
              {/*   <a href="/about">About</a> */}
              {/* </li> */}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 My Documentation Site</footer>
      </body>
    </html>
  );
}
