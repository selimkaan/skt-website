export default function Hero() {
  return (
    <section className="pt-48 pb-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-serif italic leading-[1.1] text-[#1a1a1a] fade-in mb-16">
          &ldquo;Yatırım yolculuğuma dair notlarımı, iş hayatına dair serüvenim ve fikirlerimi bunların yanında da hayata dair kaleme almak istediğim çeşitli konuları yazıyorum.&rdquo;
        </h1>
        
        <div className="flex items-center justify-center space-x-6 opacity-40">
          <div className="h-px w-16 bg-black"></div>
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-black whitespace-nowrap">
            Selim Kaan Topaç
          </span>
          <div className="h-px w-16 bg-black"></div>
        </div>
      </div>
    </section>
  );
}


