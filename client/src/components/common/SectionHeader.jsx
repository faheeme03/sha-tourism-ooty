import React from 'react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'}`}>
      {badge && (
        <span className={`inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${
          light 
            ? 'bg-white/10 text-emerald-200 border border-white/15' 
            : 'bg-stone-100 text-stone-700 border border-stone-200/80'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-black tracking-tight ${
        light ? 'text-white' : 'text-stone-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2.5 text-xs sm:text-sm leading-relaxed ${
          light ? 'text-white/80' : 'text-stone-500'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
