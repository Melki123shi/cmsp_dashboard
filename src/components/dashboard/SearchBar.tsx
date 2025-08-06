'use client';

import { useCMSPStore } from '@/stores/cmsp-store';
import { Search } from 'lucide-react';
import { Input} from '../ui/input';

const SearchBar = () => {
   const { searchQuery, setSearchQuery } = useCMSPStore();

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <Input
        placeholder="Search CMSPs by name, description, or services..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 h-12"
      />
    </div>
  );
}

export default SearchBar