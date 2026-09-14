import React from 'react';
import { ShieldCheck, Zap, Award } from 'lucide-react';

interface PageHeroBannerProps {
  title: string | React.ReactNode;
  subtitle?: string;
  category?: string;
  trustTags?: string[];
  show3DIcons?: boolean;
}

export default function PageHeroBanner({
  title,
  subtitle,
  category,
  trustTags = ['VDE-AR-N 4105 / 4110 Konform', 'Meister- & Ingenieurbetrieb', 'Zentrale Heidelberg'],
}: PageHeroBannerProps) {
  return (
    <section className="page-hero-banner">
      <div className="container page-hero-banner-inner">
        {/* Category Pill */}
        {category && (
          <div style={{ marginBottom: '18px' }}>
            <span className="category-pill">{category}</span>
          </div>
        )}

        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}

        {/* Trust Badges Bar */}
        {trustTags && trustTags.length > 0 && (
          <div className="page-hero-trust-bar">
            {trustTags.map((tag, idx) => (
              <span key={idx} className="page-hero-trust-pill">
                {idx === 0 ? (
                  <ShieldCheck size={16} color="var(--color-royal-blue)" />
                ) : idx === 1 ? (
                  <Award size={16} color="#B28900" />
                ) : (
                  <Zap size={16} color="var(--color-royal-blue)" />
                )}
                <span>{tag}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
