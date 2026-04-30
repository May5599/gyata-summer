import Image from 'next/image'
import { ScrollColorShift } from './components/ScrollColorShift'
import { EmailCaptureForm } from './components/EmailCaptureForm'
import { EntranceOverlay } from './components/EntranceOverlay'

export default function Page() {
  const year = new Date().getFullYear()

  return (
    <>
      <EntranceOverlay />
      <ScrollColorShift />

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-line">
        <nav
          className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <a href="#hero" className="text-sm font-semibold tracking-wide text-ink">
            Gyata Nutrition
          </a>
          <ul className="flex items-center gap-6 md:gap-10" role="list">
            <li className="hidden sm:block">
              <a
                href="#offers"
                className="text-xs tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors duration-200"
              >
                Offers
              </a>
            </li>
            <li className="hidden sm:block">
              <a
                href="#products"
                className="text-xs tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors duration-200"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="https://gyatanutrition.com"
                className="text-xs tracking-[0.15em] uppercase border border-ink px-4 py-2 md:px-5 text-ink hover:bg-ink hover:text-cream transition-colors duration-200"
              >
                Shop
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* ── Hero ── */}
        <section
          id="hero"
          aria-label="Hero"
          className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden"
        >
          {/* Mobile + tablet: full-bleed background image with cream overlay   no stacking */}
          <div className="absolute inset-0 lg:hidden">
            <Image
              src="https://gyatanutrition.com/wp-content/uploads/2025/10/VAF03397-scaled.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
              loading="eager"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-cream/72" />
          </div>

          {/* lg+: two-column grid; below lg: single column over background */}
          <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">

            {/* Text */}
            <div className="max-w-140">
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6 md:mb-10">
                Gyata Nutrition   Summer 2026
              </p>

              <h1 className="text-[clamp(2.75rem,8vw,6rem)] font-black leading-[0.9] tracking-tight uppercase text-ink">
                Fuel Your
                <br />
                Momentum
                <span className="sr-only">
                  {' '}  Buy Protein, Creatine &amp; Supplements in Ottawa, Canada
                </span>
              </h1>

              <p className="text-lg md:text-xl font-light text-ink mt-7 md:mt-10 max-w-md leading-relaxed">
                Every age. Every stage. Every step forward.
              </p>

              <p className="text-base text-ink mt-4 max-w-sm leading-relaxed">
                A healthier lifestyle starts with what you do daily.
              </p>

              <p className="text-sm text-muted mt-3 max-w-md leading-relaxed">
                Premium supplements designed for everyday health in Ottawa, Ontario, and across Canada.
              </p>

              <div className="mt-8 md:mt-12">
                <a
                  href="#shop"
                  className="inline-block bg-ink text-cream text-xs tracking-[0.25em] uppercase px-8 md:px-10 py-4 hover:opacity-75 transition-opacity duration-200"
                >
                  Shop Supplements
                </a>
              </div>
            </div>

            {/* Desktop image: lg and above only   avoids overlap on medium screens */}
            <div className="hidden lg:block relative aspect-4/5 w-full max-w-130 ml-auto">
              <Image
                src="https://gyatanutrition.com/wp-content/uploads/2025/10/VAF03397-scaled.jpg"
                alt="Healthy lifestyle and daily wellness – Gyata Nutrition premium supplements, Ottawa, Ontario, Canada"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 50vw, 520px"
                priority
                loading="eager"
              />
            </div>

          </div>
        </section>

        {/* ── Email Capture ── */}
        {/* <section
          id="email-capture"
          aria-labelledby="capture-heading"
          className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-line"
        >
          <div className="max-w-lg mx-auto text-center">

            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6 md:mb-8">
              Summer Access
            </p>

            <h2
              id="capture-heading"
              className="text-[clamp(2rem,5vw,3.25rem)] font-black uppercase tracking-tight text-ink leading-[0.9]"
            >
              Find Your Roar
              <br />
              This Summer
            </h2>

            <p className="text-sm md:text-base font-light text-muted mt-6 max-w-sm mx-auto leading-relaxed">
              Step into strength, discipline, and daily consistency.
              Unlock 15% off your first order and get early access to
              limited summer releases.
            </p>

            <EmailCaptureForm />

            <p className="text-xs text-muted mt-5 tracking-wide">
              For those building real momentum this summer.
            </p>

          </div>
        </section> */}

        <section
  id="email-capture"
  aria-labelledby="capture-heading"
  className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-line overflow-hidden"
>
  {/* Background 15% */}
  {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
    <span
      className="
        text-[120px] md:text-[220px] lg:text-[300px]
        font-black uppercase
        text-ink/5
        select-none
        leading-none
      "
    >
      15%
    </span>
  </div> */}

  <div className="relative max-w-lg mx-auto text-center">

    <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6 md:mb-8">
      Summer Access
    </p>

    <h2
      id="capture-heading"
      className="text-[clamp(2rem,5vw,3.25rem)] font-black uppercase tracking-tight text-ink leading-[0.9]"
    >
      Find Your Roar
      <br />
      This Summer
    </h2>

    <p className="text-sm md:text-base font-light text-muted mt-6 max-w-sm mx-auto leading-relaxed">
      Join the Gyata Summer List.
      Built for those who show up daily.
      Early access. Limited drops. A welcome benefit inside.
    </p>

    <EmailCaptureForm />

    <p className="text-sm md:text-base text-ink mt-6 tracking-wide">
      Check your email after signup   including Promotions.
    </p>

    <p className="text-xs text-muted mt-4 tracking-wide">
      Stay consistent.
    </p>

  </div>
</section>

        {/* ── Offers ── */}
        {/* <section
          id="offers"
          aria-labelledby="offers-heading"
          className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-line"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="offers-heading"
              className="text-xs tracking-[0.3em] uppercase text-muted mb-10 md:mb-16"
            >
              Summer Offers
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              <div className="border border-line bg-cream p-6 md:p-8">
                <p className="text-xs tracking-[0.15em] uppercase text-muted">
                  Orders over $75
                </p>
                <h3 className="text-lg font-semibold text-ink mt-3 leading-snug">
                  Free Magnesium
                </h3>
                <p className="text-sm text-muted mt-3 md:mt-4 leading-relaxed">
                  Add any order above $75 and receive a complimentary magnesium
                  supplement   our most popular recovery mineral.
                </p>
              </div>

              <div className="border border-line bg-cream p-6 md:p-8">
                <p className="text-xs tracking-[0.15em] uppercase text-muted">
                  Orders over $100
                </p>
                <h3 className="text-lg font-semibold text-ink mt-3 leading-snug">
                  $20 Off Your Order
                </h3>
                <p className="text-sm text-muted mt-3 md:mt-4 leading-relaxed">
                  Stock up on your wellness essentials and save $20 on orders
                  above $100.
                </p>
                <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-line">
                  <span className="font-mono text-xs tracking-[0.2em] text-ink">LIFE20</span>
                </div>
              </div>

              <div className="border border-line bg-cream p-6 md:p-8">
                <p className="text-xs tracking-[0.15em] uppercase text-muted">
                  Orders over $75
                </p>
                <h3 className="text-lg font-semibold text-ink mt-3 leading-snug">
                  10% Off Your Order
                </h3>
                <p className="text-sm text-muted mt-3 md:mt-4 leading-relaxed">
                  Take 10% off when you spend $75 or more. A simple way to make
                  wellness more accessible.
                </p>
                <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-line">
                  <span className="font-mono text-xs tracking-[0.2em] text-ink">LIFE10</span>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section
  id="offers"
  aria-labelledby="offers-heading"
  className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t-amber-50 border-[#3a2e2a] bg-[#1f1614]"
>
  <div className="max-w-6xl mx-auto">
    <h2
      id="offers-heading"
      className="text-xs tracking-[0.3em] uppercase text-[#cbbfb8] mb-10 md:mb-16"
    >
      Summer Offers
    </h2>

    <div className="grid md:grid-cols-3 gap-4 md:gap-6">

      {/* Card 1 */}
      <div className="border border-[#3a2e2a] bg-transparent p-6 md:p-8">
        <p className="text-xs tracking-[0.15em] uppercase text-[#a89c95]">
          Orders over $75
        </p>
        <h3 className="text-lg font-semibold text-[#f5f1ee] mt-3 leading-snug">
          Free Magnesium
        </h3>
        <p className="text-sm text-[#cbbfb8] mt-3 md:mt-4 leading-relaxed">
          Add any order above $75 and receive a complimentary magnesium
          supplement   our most trusted recovery mineral.
        </p>
      </div>

      {/* Card 2 */}
      <div className="border border-[#3a2e2a] bg-transparent p-6 md:p-8">
        <p className="text-xs tracking-[0.15em] uppercase text-[#a89c95]">
          Orders over $100
        </p>
        <h3 className="text-lg font-semibold text-[#f5f1ee] mt-3 leading-snug">
          $20 Off Your Order
        </h3>
        <p className="text-sm text-[#cbbfb8] mt-3 md:mt-4 leading-relaxed">
          Stock up on your essentials and take $20 off orders above $100.
        </p>
        <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-[#3a2e2a]">
          <span className="font-mono text-xs tracking-[0.2em] text-[#f5f1ee]">
            LIFE20
          </span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="border border-[#3a2e2a] bg-transparent p-6 md:p-8">
        <p className="text-xs tracking-[0.15em] uppercase text-[#a89c95]">
          Orders over $75
        </p>
        <h3 className="text-lg font-semibold text-[#f5f1ee] mt-3 leading-snug">
          10% Off Your Order
        </h3>
        <p className="text-sm text-[#cbbfb8] mt-3 md:mt-4 leading-relaxed">
          Take 10% off when you spend $75 or more. A simple step toward
          consistency.
        </p>
        <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-[#3a2e2a]">
          <span className="font-mono text-xs tracking-[0.2em] text-[#f5f1ee]">
            LIFE10
          </span>
        </div>
      </div>

    </div>
  </div>
</section>

        {/* ── Products ── */}
        <section
          id="products"
          aria-labelledby="products-heading"
          className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-line"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="products-heading"
              className="text-xs tracking-[0.3em] uppercase text-muted mb-10 md:mb-16"
            >
              Our Products
            </h2>
            <div className="divide-y md:divide-y-0 divide-line md:grid md:grid-cols-3 md:divide-x">

              <article className="py-8 md:py-0 md:pr-14 flex flex-col">
                {/* Whey Protein packshot */}
                <div className="relative aspect-square w-full mb-7 md:mb-8 overflow-hidden">
                  <Image
                    src="https://gyatanutrition.com/wp-content/uploads/2025/11/VAF04025-scaled.jpg"
                    alt="Gyata Nutrition Whey Protein Isolate – clean protein powder for recovery, available across Canada"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    quality={75}
                  />
                </div>
                <span className="text-xs tracking-[0.2em] text-muted mb-5">01</span>
                <h3 className="text-3xl md:text-4xl font-black text-ink leading-tight uppercase tracking-tight">
                  Whey
                  <br />
                  Protein
                </h3>
                <p className="text-sm text-muted mt-4 leading-relaxed flex-1">
                  Clean whey protein isolate supporting recovery and strength,
                  crafted for everyday Canadians. From morning routines to
                  post-workout nutrition   buy whey protein in Canada,
                  delivered to your door.
                </p>
                <a
                  href="https://gyatanutrition.com/product/whey-protein-isolate-save/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Shop Whey Protein"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-ink border-b border-ink mt-7 md:mt-8 pb-0.5 w-fit hover:text-muted hover:border-muted transition-colors duration-200"
                >
                  Shop <span aria-hidden="true">→</span>
                </a>
              </article>

              <article className="py-8 md:py-0 md:px-14 flex flex-col">
                {/* Creatine packshot */}
                <div className="relative aspect-square w-full mb-7 md:mb-8 overflow-hidden">
                  <Image
                    src="https://gyatanutrition.com/wp-content/uploads/2025/11/VAF04062-scaled.jpg"
                    alt="Gyata Nutrition Creatine Monohydrate – daily energy and performance supplement for Canadians"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    quality={75}
                  />
                </div>
                <span className="text-xs tracking-[0.2em] text-muted mb-5">02</span>
                <h3 className="text-3xl md:text-4xl font-black text-ink leading-tight uppercase tracking-tight">
                  Creatine
                </h3>
                <p className="text-sm text-muted mt-4 leading-relaxed flex-1">
                  Improve energy and performance for daily life. Our creatine
                  monohydrate supplement supports mental clarity, endurance,
                  and healthy aging   trusted by customers across Ottawa and
                  Canada.
                </p>
                <a
                  href="https://gyatanutrition.com/product/creatine-monohydrate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Shop Creatine"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-ink border-b border-ink mt-7 md:mt-8 pb-0.5 w-fit hover:text-muted hover:border-muted transition-colors duration-200"
                  
                >
                  Shop <span aria-hidden="true">→</span>
                </a>
              </article>

              <article className="py-8 md:py-0 md:pl-14 flex flex-col">
                {/* Collagen packshot */}
                <div className="relative aspect-square w-full mb-7 md:mb-8 overflow-hidden">
                  <Image
                    src="https://gyatanutrition.com/wp-content/uploads/2025/11/VAF04079-scaled.jpg"
                    alt="Gyata Nutrition Collagen Peptides – joint and skin health supplement for Canadians"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    quality={75}
                  />
                </div>
                <span className="text-xs tracking-[0.2em] text-muted mb-5">03</span>
                <h3 className="text-3xl md:text-4xl font-black text-ink leading-tight uppercase tracking-tight">
                  Collagen
                </h3>
                <p className="text-sm text-muted mt-4 leading-relaxed flex-1">
                  Support joints, skin, and long-term health. Our collagen
                  peptide supplements promote longevity and daily vitality  
                  premium collagen for joint health, trusted across Canada.
                </p>
                <a
                  href="https://gyatanutrition.com/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Shop Collagen"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-ink border-b border-ink mt-7 md:mt-8 pb-0.5 w-fit hover:text-muted hover:border-muted transition-colors duration-200"
                >
                  Shop <span aria-hidden="true">→</span>
                </a>
              </article>

            </div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted text-center mt-10 md:mt-14">
              Trusted by 1,000+ customers across Ottawa, Ontario, and Canada
            </p>
          </div>
        </section>

        {/* ── Reviews ── */}
        <section
          id="reviews"
          aria-labelledby="reviews-heading"
          className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-line"
        >
          <div className="max-w-5xl mx-auto">

            {/* Label left, big stat right */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-16">
              <h2
                id="reviews-heading"
                className="text-xs tracking-[0.3em] uppercase text-muted"
              >
                Trusted Across Canada
              </h2>
              <div className="md:text-right">
                <p className="text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase tracking-tight text-ink leading-none">
                  12,000+
                </p>
                <p className="text-xs tracking-[0.2em] uppercase text-muted mt-2">
                  Products Sold
                </p>
              </div>
            </div>

            {/* Mobile: horizontal snap scroll   Desktop: 3-col grid */}
            <div className="-mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none [&::-webkit-scrollbar]:hidden">
              <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 pb-4 md:pb-0 w-max md:w-auto">

                <div className="snap-start min-w-[80vw] md:min-w-0 border border-line p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                  <p className="text-sm text-muted leading-relaxed">
                    "Noticed a real difference in my energy within 2 weeks.
                    It's simple, clean, and actually fits into my routine."
                  </p>
                  <footer className="mt-6 text-xs text-ink tracking-wide">
                      Sarah M., Ottawa
                  </footer>
                </div>

                <div className="snap-start min-w-[80vw] md:min-w-0 border border-ink p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                  <p className="text-sm text-muted leading-relaxed">
                    "I've tried a lot of supplements   this is the first time
                    I've been consistent. That's what made the difference."
                  </p>
                  <footer className="mt-6 text-xs text-ink tracking-wide">
                      Daniel R., Toronto
                  </footer>
                </div>

                <div className="snap-start min-w-[80vw] md:min-w-0 border border-line p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                  <p className="text-sm text-muted leading-relaxed">
                    "Clean ingredients, no confusion, and easy to follow.
                    Feels like something I can actually stick with long term."
                  </p>
                  <footer className="mt-6 text-xs text-ink tracking-wide">
                      Priya K., Vancouver
                  </footer>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ── Lifestyle ── */}
        <section
          id="lifestyle"
          aria-labelledby="lifestyle-heading"
          className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-line"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-8 md:mb-12">
              Our Philosophy
            </p>
            <h2
              id="lifestyle-heading"
              className="text-[clamp(2.25rem,7vw,6rem)] font-black leading-[0.95] tracking-tight uppercase text-ink"
            >
              Consistency
              <br />
              Over Intensity
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-10 md:mt-14">
              <p className="text-base md:text-xl font-light text-muted leading-relaxed">
                Focus on healthy habits, sustainable routines, and everyday
                wellness   especially during summer. Real results come from what
                you do every single day.
              </p>
              <p className="text-sm md:text-base text-ink leading-relaxed">
                Designed for people across Ottawa, Ontario and Canada looking to build
                better daily routines without the overwhelm. Whether you are a
                professional, student, or parent   your wellness journey starts
                with one consistent step.
              </p>
            </div>

            {/* Wide lifestyle editorial image */}
            <div className="relative aspect-4/3 md:aspect-16/7 w-full mt-12 md:mt-16 overflow-hidden">
              <Image
                src="https://gyatanutrition.com/wp-content/uploads/2025/10/VAF03512-scaled.jpg"
                alt="Summer wellness routine – daily health habits with Gyata Nutrition supplements, Ottawa, Ontario and across Canada"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                loading="lazy"
                quality={75}
              />
            </div>
          </div>
        </section>

        {/* ── Supplement Guides ── */}
        {/* Requires pages: /protein-canada, /creatine-ottawa, /collagen-canada */}
        <section
          id="supplements-ottawa"
          aria-labelledby="guides-heading"
          className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-line"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="guides-heading"
              className="text-xs tracking-[0.3em] uppercase text-muted mb-10 md:mb-16"
            >
              Supplement Guides &mdash; Ottawa &amp; Canada
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">

              <a
                href="/why-new-zealand-whey"
                className="group relative block aspect-video md:aspect-4/5 overflow-hidden"
                aria-label="Guide: Whey Protein in Canada"
              >
                <Image
                  src="https://gyatanutrition.com/wp-content/uploads/2025/11/VAF04476-scaled.jpg"
                  alt="Whey protein supplement guide – protein powder in Canada"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-white mb-3">
                    Protein Guide
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                    Whey Protein
                    <br />
                    in Canada
                  </h3>
                  <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white mt-5 border-b border-cream/30 pb-0.5 w-fit group-hover:text-cream group-hover:border-cream transition-colors duration-200">
                    Explore <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>

              <a
                href="/take-ownership-of-your-health"
                className="group relative block aspect-video md:aspect-4/5 overflow-hidden"
                aria-label="Guide: Creatine in Ottawa"
              >
                <Image
                  src="https://gyatanutrition.com/wp-content/uploads/2025/11/VAF04589-scaled-e1764093679517.jpg"
                  alt="Creatine monohydrate supplement guide – creatine in Ottawa, Canada"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-white mb-3">
                    Performance Guide
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                    Creatine
                    <br />
                    in Ottawa
                  </h3>
                  <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white mt-5 border-b border-cream/30 pb-0.5 w-fit group-hover:text-cream group-hover:border-cream transition-colors duration-200">
                    Explore <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>

              <a
                href="/the-importance-of-collagen-for-joint-health-and-skin-elasticity/"
                className="group relative block aspect-video md:aspect-4/5 overflow-hidden"
                aria-label="Guide: Collagen for Canada"
              >
                <Image
                  src="https://gyatanutrition.com/wp-content/uploads/2025/11/VAF04240-scaled.jpg"
                  alt="Collagen peptides supplement guide – joint health and longevity in Canada"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-white mb-3">
                    Recovery Guide
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                    Collagen
                    <br />
                    for Canada
                  </h3>
                  <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white mt-5 border-b border-cream/30 pb-0.5 w-fit group-hover:text-cream group-hover:border-cream transition-colors duration-200">
                    Explore <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section
          id="shop"
          aria-labelledby="shop-heading"
          className="bg-ink py-20 md:py-32 px-6 md:px-12 lg:px-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-white mb-8 md:mb-12">
              Gyata Nutrition
            </p>
            <h2
              id="shop-heading"
              className="text-[clamp(2.25rem,8vw,7rem)] font-black leading-[0.9] tracking-tight uppercase text-white"
            >
              Start Your
              <br />
              Summer Routine
            </h2>
            <p className="text-base md:text-lg font-light text-cream mt-8 md:mt-10 max-w-sm mx-auto leading-relaxed">
              Premium supplements. Real results. Delivered across Canada.
            </p>
            <div className="mt-10 md:mt-14">
              <a
                href="https://gyatanutrition.com/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-cream/40 text-white text-xs tracking-[0.25em] uppercase px-10 md:px-12 py-4 hover:border-cream hover:bg-cream hover:text-ink transition-colors duration-300"
              >
                Shop Now
              </a>
            </div>
          </div>
        </section>

        {/* ── Founder ── */}
        <section
          id="about"
          aria-labelledby="founder-heading"
          className="py-20 md:py-32 px-6 md:px-12 lg:px-20 border-t border-line"
        >
          <div className="max-w-5xl mx-auto">

            <p className="text-[0.6rem] tracking-[0.4em] uppercase text-muted mb-12 md:mb-20">
              The Founder
            </p>

            {/* Editorial quote */}
            <blockquote>
              <p
                id="founder-heading"
                className="text-[clamp(2rem,6vw,4.5rem)] font-black uppercase tracking-tight text-ink leading-[0.92]"
              >
                {'“'}Prevention
                <br />
                Over Prescription.{'”'}
              </p>
            </blockquote>

            <div className="w-10 h-px bg-ink mt-10 md:mt-14 mb-10 md:mb-14" />

            {/* Bio columns */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-20">

              <div>
                <p className="text-base font-semibold text-ink tracking-wide">
                  Dr. Kwadwo Kyeremanteng
                </p>
                <p className="text-[0.65rem] tracking-[0.25em] uppercase text-muted mt-2">
                  Head of Critical Care &middot; The Ottawa Hospital
                </p>
                <p className="text-sm text-muted mt-6 leading-relaxed">
                  An ICU physician who has spent his career on the front lines of
                  critical illness   and decided the real work begins long before
                  the hospital room.
                </p>
                <p className="text-sm text-muted mt-4 leading-relaxed">
                  His research in health equity, prevention, and personalized
                  wellness shapes every decision at Gyata. The goal was never the
                  supplement   it was the version of you that never needs the ICU.
                </p>
              </div>

              <div className="flex flex-col justify-between gap-8">
                <div className="space-y-4">
                  <div className="border-l-2 border-line pl-5">
                    <p className="text-[0.6rem] tracking-[0.3em] uppercase text-muted mb-1">Podcast</p>
                    <p className="text-sm text-ink">Solving Healthcare with Kwadwo Kyeremanteng</p>
                  </div>
                  <div className="border-l-2 border-line pl-5">
                    <p className="text-[0.6rem] tracking-[0.3em] uppercase text-muted mb-1">Book</p>
                    <p className="text-sm text-ink">Unapologetic Leadership</p>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-line">
                  <a
                    href="https://x.com/kwadcast"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dr. Kyeremanteng on X"
                    className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors duration-200"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.848L1.254 2.25H8.08l4.254 5.622L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                    </svg>
                    @KwadCast
                  </a>
                  <a
                    href="https://www.instagram.com/kwadcast/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dr. Kyeremanteng on Instagram"
                    className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors duration-200"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                    </svg>
                    @KwadCast
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {year} Gyata Nutrition. Ottawa, Ontario, Canada.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/gyatanutrition/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gyata Nutrition on Instagram"
              className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted hover:text-ink transition-colors duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
              </svg>
              @gyatanutrition
            </a>
            <a
              href="https://gyatanutrition.com/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] uppercase text-muted hover:text-ink transition-colors duration-200"
            >
              Visit Gyata Nutrition
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}


