import { CMSP_CATEGORIES, STATUS_COLORS } from "@/lib/constants";
import { useCMSPStore } from "@/stores/cmsp-store";
import { CMSP } from "@/types/cmsp";
import { Building2, Calendar, Globe, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

interface CMSPCardProps {
  cmsp: CMSP;
}

const CMSPCard = ({ cmsp }: CMSPCardProps) => {
  const { setSelectedCMSP } = useCMSPStore();

  // Get the primary type for display
  const primaryType = cmsp.type[0];
  const categoryInfo = CMSP_CATEGORIES[primaryType];

  // Format address for display
  const formatAddress = () => {
    const parts = [];
    if (cmsp.address.city) parts.push(cmsp.address.city);
    if (cmsp.address.country) parts.push(cmsp.address.country);
    return parts.join(", ");
  };

  // Get primary phone number
  const primaryPhone =
    cmsp.phone && cmsp.phone.length > 0 ? cmsp.phone[0] : null;

  return (
    <Card
      className="group h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:cursor-pointer bg-white/30 dark:bg-black/20 dark:border-black/20 backdrop-blur-lg border border-white/40 rounded-lg p-6"
      onClick={() => setSelectedCMSP(cmsp)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-teal-100 text-teal-600">
              <Building2 className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                {cmsp.name}
              </h3>
              <div className="flex flex-wrap gap-1 mt-1">
                {cmsp.type.map((type) => (
                  <span
                    key={type}
                    className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded"
                  >
                    {CMSP_CATEGORIES[type].label}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <Badge className={`text-xs ${STATUS_COLORS[cmsp.status]}`}>
            {cmsp.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-gray-600 line-clamp-3">{cmsp.overview}</p>

        <div className="space-y-2 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>
              Licensed: {new Date(cmsp.licensedDate).toLocaleDateString()}
            </span>
          </div>

          {formatAddress() && (
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{formatAddress()}</span>
            </div>
          )}

          {primaryPhone && (
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>{primaryPhone}</span>
            </div>
          )}

          {cmsp.website && (
            <div className="flex items-center gap-1">
              <Globe className="h-3 w-3" />
              <span className="truncate">{cmsp.website}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1">
          {cmsp.services.slice(0, 3).map((service) => (
            <Badge key={service} variant="outline" className="text-xs">
              {service}
            </Badge>
          ))}
          {cmsp.services.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{cmsp.services.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={() => setSelectedCMSP(cmsp)}
          className="w-full"
          size="sm"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CMSPCard;
