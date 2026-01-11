"use client";

import React from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { StrategicQuestions } from '@/components/landing/StrategicQuestions';
import { CocaColaCaseStudy } from '@/components/landing/CocaColaCaseStudy';
import { BentoGrid } from '@/components/landing/BentoGrid';
import { TargetAudience } from '@/components/landing/TargetAudience';
import { DownloadForm } from '@/components/landing/DownloadForm';
import { Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-grid-pattern text-brand-navy selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <StrategicQuestions />
      <CocaColaCaseStudy />
      <BentoGrid />
      <TargetAudience />
      <DownloadForm />
      <Footer />
    </div>
  );
}
