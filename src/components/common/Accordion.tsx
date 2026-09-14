'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import MockBadge from '@/components/common/MockBadge';
import { FaqItem } from '@/types';

interface AccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
}

export default function Accordion({ items = [], defaultOpenIndex = 0 }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([defaultOpenIndex]);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="accordion-wrapper">
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={item.id || idx}
            className={`accordion-item ${isOpen ? 'open' : ''}`}
          >
            <button
              type="button"
              className="accordion-header"
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id || idx}`}
            >
              <span>
                {item.question}
                {item.isMock && <MockBadge />}
              </span>
              <span className="accordion-header-icon">
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </button>

            {isOpen && (
              <div
                id={`accordion-content-${item.id || idx}`}
                className="accordion-content"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
