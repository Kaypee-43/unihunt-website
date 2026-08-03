import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="mesh">
      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">This page went exploring.</h1>
        <p className="mt-4 max-w-md text-body">The page you were after has moved or never existed. Let us point you back on course.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-brand">Back to home</Link>
          <Link href="/contact" className="btn-ghost">Talk to an advisor</Link>
        </div>
      </div>
    </section>
  );
}
