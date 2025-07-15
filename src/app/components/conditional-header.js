'use client';

import { usePathname } from 'next/navigation';
import Header from './header.js';

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  // Don't show header on the home page
  if (pathname === '/') {
    return null;
  }
  
  return <Header />;
} 