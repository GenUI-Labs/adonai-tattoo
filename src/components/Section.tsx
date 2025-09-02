import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'dark' | 'darker' | 'gradient';
}

export default function Section({ 
  children, 
  className = '', 
  id, 
  background = 'dark' 
}: SectionProps) {
  const backgroundStyles = {
    dark: 'bg-neutral-950',
    darker: 'bg-brand-black',
    gradient: 'bg-gradient-to-br from-brand-red via-red-800 to-brand-black'
  };

  return (
    <section 
      id={id}
      className={`py-16 px-4 ${backgroundStyles[background]} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}

