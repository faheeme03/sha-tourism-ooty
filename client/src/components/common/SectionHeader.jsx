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
    <div className={`mb-12 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${
          light 
            ? 'bg-emerald-900/60 text-emerald-200 border border-emerald-700/50' 
            : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          light ? 'text-emerald-100/80' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex items-center gap-1.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="h-0.5 w-12 bg-[#C5A059] rounded-full"></span>
        <span className="h-1.5 w-1.5 bg-[#C5A059] rounded-full"></span>
        <span className="h-0.5 w-6 bg-[#C5A059]/60 rounded-full"></span>
      </div>
    </div>
  );
}
