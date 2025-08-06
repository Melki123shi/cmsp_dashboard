import { CMSPCategory } from "@/types/cmsp";

export const CMSP_CATEGORIES: Record<CMSPCategory, { label: string; description: string; icon: string }> = {
  broker: {
    label: 'Brokers',
    description: 'Licensed to execute buy and sell orders for securities',
    icon: '📊'
  },
  dealer: {
    label: 'Dealers',
    description: 'Trade securities for their own account',
    icon: '💰'
  },
  advisor: {
    label: 'Investment advisors',
    description: 'Provide investment advice and portfolio management',
    icon: '🎯'
  },
  custodian: {
    label: 'Custodians',
    description: 'Safekeep and administer securities for clients',
    icon: '🔒'
  },
  'market-maker': {
    label: 'Market Makers',
    description: 'Provide liquidity by quoting buy and sell prices',
    icon: '⚡'
  },
  underwriter: {
    label: 'Underwriters',
    description: 'Help companies issue and distribute securities',
    icon: '🏛️'
  }
};

export const STATUS_COLORS = {
  active: 'bg-green-100 text-green-800 border-green-200',
  inactive: 'bg-red-100 text-red-800 border-red-200',
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200'
};