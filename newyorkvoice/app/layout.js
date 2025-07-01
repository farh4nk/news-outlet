import './globals.css'
import TopBar from './components/TopBar';

export const metadata = {
  title: "New York Voice",
  description: "A web app for a modern Bangladeshi news outlet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <TopBar /> {/* This is now a client component */}
        <main className="px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  )
}
