import { Building2 } from 'lucide-react';

const Header = () => {
   return (
    <div className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-600 text-white">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Ethiopia CMSP Directory Dashboard
            </h1>
            <p className="text-sm text-gray-600">
              Capital Market Service Providers regulated by ECMA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header