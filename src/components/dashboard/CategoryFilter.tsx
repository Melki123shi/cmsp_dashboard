import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { useCMSPStore } from '@/stores/cmsp-store';
import { CMSPCategory } from '@/types/cmsp';
import { CMSP_CATEGORIES } from '@/lib/constants';
import { Badge } from '../ui/badge';

const CategoryFilter = () => {
  const { filters, filteredCMSPs, setFilters, resetFilters } = useCMSPStore();

  const handleCategoryFilter = (category: CMSPCategory) => {
    if (filters.category === category) {
      setFilters({ category: undefined });
    } else {
      setFilters({ category });
    }
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Filter by Category</h2>
        {activeFiltersCount > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={resetFilters}
            className="gap-1"
          >
            <X className="h-3 w-3" />
            Clear All
          </Button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {(Object.entries(CMSP_CATEGORIES) as [CMSPCategory, typeof CMSP_CATEGORIES[CMSPCategory]][]).map(([key, category]) => (
          <Button
            key={key}
            variant={filters.category === key ? "default" : "outline"}
            className="h-auto flex-col gap-2 p-4 text-center"
            onClick={() => handleCategoryFilter(key)}
          >
            <span className="text-2xl">{category.icon}</span>
            <span className="text-xs font-medium">{category.label}</span>
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Showing {filteredCMSPs.length} providers</span>
        {filters.category && (
          <Badge variant="secondary" className="gap-1">
            {CMSP_CATEGORIES[filters.category].label}
            <button
              onClick={() => setFilters({ category: undefined })}
              className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        )}
      </div>
    </div>
  );
}

export default CategoryFilter