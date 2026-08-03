import Reveal from './Reveal';

export default function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="mesh border-b border-line">
      <div className="container-page py-16 lg:py-20">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-body">{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}
