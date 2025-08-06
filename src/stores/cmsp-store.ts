import { CMSP, Filter } from '@/types/cmsp';
import { create } from 'zustand';
import cmspData from '@/data/cmsp-data.json';

interface CMSPStore {
  cmsps: CMSP[];
  filteredCMSPs: CMSP[];
  selectedCMSP: CMSP | null;
  filters: Filter;
  isLoading: boolean;
  searchQuery: string;
  
  // Actions
  initializeCMSPs: () => void;
  setSelectedCMSP: (cmsp: CMSP | null) => void;
  setFilters: (filters: Partial<Filter>) => void;
  applyFilters: () => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
}

const allowedTypes = ["broker", "dealer", "advisor", "custodian"];
const allowedStatuses = ["active", "inactive", "pending"];

function normalizeCMSPData(rawData: any[]): CMSP[] {
  return rawData.map((item) => ({
    ...item,
    type: Array.isArray(item.type)
      ? item.type.filter((t: string) => allowedTypes.includes(t))
      : [],
    status: allowedStatuses.includes(item.status) ? item.status : "inactive",
    address: {
      ...item.address,
      officeNumber:
        item.address.officeNumber === null ? undefined : item.address.officeNumber,
    },
    // Add other field normalizations as needed
  }));
}

export const useCMSPStore = create<CMSPStore>((set, get) => ({
  cmsps: [],
  filteredCMSPs: [],
  selectedCMSP: null,
  filters: {},
  isLoading: false,
  searchQuery: '',

  initializeCMSPs: () => {
    set({ isLoading: true });
    // Simulate API call delay
    setTimeout(() => {
      const rawCmsps = cmspData.cmsps;
      const cmsps = normalizeCMSPData(rawCmsps);
      set({ 
        cmsps, 
        filteredCMSPs: cmsps, 
        isLoading: false 
      });
    }, 500);
  },

  setSelectedCMSP: (cmsp) => {
    set({ selectedCMSP: cmsp });
  },

  setFilters: (newFilters) => {
    const currentFilters = get().filters;
    const updatedFilters = { ...currentFilters, ...newFilters };
    set({ filters: updatedFilters });
    get().applyFilters();
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().applyFilters();
  },

  applyFilters: () => {
    const { cmsps, filters, searchQuery } = get();
    let filtered = [...cmsps];

    // Apply category filter - check if CMSP has the selected category in its type array
    if (filters.category) {
      filtered = filtered.filter(cmsp => cmsp.type.includes(filters.category!));
    }

    // Apply status filter
    if (filters.status) {
      filtered = filtered.filter(cmsp => cmsp.status === filters.status);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(cmsp => 
        cmsp.name.toLowerCase().includes(query) ||
        cmsp.overview.toLowerCase().includes(query) ||
        cmsp.services.some((service: string) => service.toLowerCase().includes(query)) ||
        cmsp.type.some((type: string) => type.toLowerCase().includes(query))
      );
    }

    set({ filteredCMSPs: filtered });
  },

  resetFilters: () => {
    set({ 
      filters: {}, 
      searchQuery: '',
      filteredCMSPs: get().cmsps 
    });
  },
}));