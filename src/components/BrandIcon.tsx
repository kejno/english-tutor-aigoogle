import React from 'react';

export const BrandIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <rect width="32" height="32" rx="10" fill="currentColor" />
    <path
      d="M8 14v4m4-8v12m4-15v18m4-15v12m4-8v4"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);
