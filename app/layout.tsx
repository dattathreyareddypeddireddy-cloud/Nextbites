



import "./globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "NextBites | Discover Delicious Recipes",
  description:
    "Discover recipes, explore cuisines, save favourites and enjoy cooking with NextBites.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <footer className="footer">
          <div className="footer-brand">
            🍴 NextBites
          </div>

          <p>
            Made with ❤️ for people who love food.
          </p>

          <p className="footer-copy">
            © {new Date().getFullYear()} NextBites. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}