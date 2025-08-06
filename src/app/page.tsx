'use client';

import { useCMSPStore } from '@/stores/cmsp-store';
import { useEffect } from 'react';
import Header from '@/components/dashboard/Header';
import SearchBar from '@/components/dashboard/SearchBar';
import CardGrid from '@/components/dashboard/CardGrid';
import CategoryFilter from '@/components/dashboard/CategoryFilter';
import Statistics from '@/components/dashboard/Statistics';
import DetailModal from '@/components/dashboard/DetailModal';

export default function Dashboard() {
  const { initializeCMSPs } = useCMSPStore();

  useEffect(() => {
    initializeCMSPs();
  }, [initializeCMSPs]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <Statistics />
        
        <div className="space-y-6">
          <SearchBar />
          <CategoryFilter />
        </div>

        <CardGrid />
      </main>

      <DetailModal />
      
      <footer className="border-t bg-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>
            Data sourced from Ethiopian Capital Markets Authority (ECMA) and public company filings.
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mt-2">
            This dashboard is for informational purposes only. Please verify current licensing status with ECMA.
          </p>
        </div>
      </footer>
    </div>
  );
}