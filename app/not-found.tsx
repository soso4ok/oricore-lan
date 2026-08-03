import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 text-center pt-32 pb-20">
        <h1 className="text-[clamp(4rem,10vw,8rem)] font-bold text-[var(--color-ink)] leading-none mb-4 font-mono tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink-soft)] mb-6 font-display">
          Page Not Found
        </h2>
        <p className="text-lg text-[var(--color-ink-muted)] max-w-md mb-10">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[var(--color-ink)] text-[var(--color-bg)] hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] font-medium text-lg py-4 px-8 transition-colors duration-200"
        >
          Return to Home
        </Link>
      </div>

      <Footer />
    </main>
  );
}
