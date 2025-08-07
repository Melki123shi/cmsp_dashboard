import { Building2, Shield, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { useCMSPStore } from '@/stores/cmsp-store';
import { CMSP_CATEGORIES } from '@/lib/constants';

const Statistics = () => {
  const { cmsps } = useCMSPStore();

  const stats = [
    {
      label: 'Total CMSPs',
      value: cmsps.length,
      icon: Building2,
      color: 'text-teal-600'
    },
    {
      label: 'Active Providers',
      value: cmsps.filter(c => c.status === 'active').length,
      icon: Shield,
      color: 'text-green-600'
    },
    {
      label: 'Categories',
      value: Object.keys(CMSP_CATEGORIES).length,
      icon: TrendingUp,
      color: 'text-blue-600'
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-gray-100 ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Statistics