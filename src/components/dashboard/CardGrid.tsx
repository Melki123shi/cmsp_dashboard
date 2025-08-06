import { Loader2 } from 'lucide-react';
import { CMSP } from '@/types/cmsp';
import CMSPCard from './CMSPCard';
import { useCMSPStore } from '@/stores/cmsp-store';

const CardGrid = () => {
  const { filteredCMSPs, isLoading } = useCMSPStore();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-teal-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading CMSPs...</p>
        </div>
      </div>
    );
  }

  if (filteredCMSPs.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No CMSPs found</h3>
        <p className="text-gray-600">Try adjusting your filters or search query.</p>
      </div>
    );
  }
  
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredCMSPs.map((cmsp: CMSP) => (
        <CMSPCard key={cmsp.id} cmsp={cmsp} />
      ))}
    </div>
  );
}
export default CardGrid