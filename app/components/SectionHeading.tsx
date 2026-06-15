type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  light = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className={`text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-3 ${light ? 'text-gold' : 'text-gold-dark'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-5xl font-serif font-bold leading-tight ${light ? 'text-white' : 'text-charcoal'}`}>
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-gold-gradient">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
