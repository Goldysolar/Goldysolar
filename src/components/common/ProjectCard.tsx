import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import MockBadge from '@/components/common/MockBadge';
import { ProjectItem } from '@/types';

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Hintergründe für Solarprojekte in harmonischen Tönen
  const backgroundGradients: Record<string, string> = {
    'residential-power': 'linear-gradient(135deg, #1B4965 0%, #2B7EA8 50%, #4285F4 100%)',
    'commercial-solar': 'linear-gradient(135deg, #0F4761 0%, #156082 50%, #0F9ED5 100%)',
    'agri-solar': 'linear-gradient(135deg, #10435C 0%, #206E88 50%, #60CAF3 100%)',
    'utility-scale': 'linear-gradient(135deg, #0E2841 0%, #0F4761 50%, #3B82F6 100%)',
  };

  const bg = backgroundGradients[project.id] || 'linear-gradient(135deg, #0F4761 0%, #4285F4 100%)';

  return (
    <article className="project-card" style={{ background: bg }}>
      {/* Solarzellen-Gitterstruktur */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.8,
        }}
      />

      {/* Oberer Kategorie-Badge */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 2 }}>
        <span
          style={{
            background: 'rgba(15, 71, 97, 0.85)',
            color: '#FFFFFF',
            padding: '6px 14px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 700,
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          {project.category}
          {project.isMock && <MockBadge />}
        </span>
      </div>

      <div className="project-card-overlay" />

      {/* Unten schwebendes weißes Pill-Element (100% wie im Vorlagenbild) */}
      <div className="project-card-pill">
        <h3>
          {project.title}
        </h3>
        <p>{project.subtitle}</p>
        <Link href={project.link || '/projekte'} className="project-card-link">
          <span>View project / Details ansehen</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
