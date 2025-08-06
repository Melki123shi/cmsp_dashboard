import { CMSP_CATEGORIES, STATUS_COLORS } from '@/lib/constants';
import { useCMSPStore } from '@/stores/cmsp-store';
import { Building2, Calendar, DollarSign, ExternalLink, Globe, Mail, MapPin, MessageCircle, Phone, Shield, Users, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';

const DetailModal = () => {
  const { selectedCMSP, setSelectedCMSP } = useCMSPStore();

  if (!selectedCMSP) return null;

  const formatFullAddress = () => {
    const parts = [];
    if (selectedCMSP.address.street) parts.push(selectedCMSP.address.street);
    if (selectedCMSP.address.building) parts.push(selectedCMSP.address.building);
    if (selectedCMSP.address.floor) parts.push(selectedCMSP.address.floor);
    if (selectedCMSP.address.city) parts.push(selectedCMSP.address.city);
    if (selectedCMSP.address.country) parts.push(selectedCMSP.address.country);
    return parts.join(', ');
  };

  return (
    <Dialog open={!!selectedCMSP} onOpenChange={() => setSelectedCMSP(null)}>
      <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-lg p-6">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <DialogTitle className="text-xl text-gray-900">
                  {selectedCMSP.name}
                </DialogTitle>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex flex-wrap gap-1">
                    {selectedCMSP.type.map((type) => (
                      <span key={type} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {CMSP_CATEGORIES[type].label}
                      </span>
                    ))}
                  </div>
                  <Badge className={`text-xs ${STATUS_COLORS[selectedCMSP.status]}`}>
                    {selectedCMSP.status}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="flex gap-12 justify-between md:grid-cols-2">
          {/* Overview Section */}
          <div className="space-y-4 flex-2/3">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Overview</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {selectedCMSP.overview}
              </p>
            </div>

            {selectedCMSP.mission && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mission</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedCMSP.mission}
                </p>
              </div>
            )}

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
              <div className="flex flex-wrap gap-2">
                {selectedCMSP.services.map((service) => (
                  <Badge key={service} variant="outline">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Licensing Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-gray-400" />
                  <div>
                    <span className="text-gray-600">Regulatory Body:</span>
                    <p className="font-medium">{selectedCMSP.regulatoryBody}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <div>
                    <span className="text-gray-600">Licensed Date:</span>
                    <p className="font-medium">
                      {new Date(selectedCMSP.licensedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                {selectedCMSP.licenseNumber && (
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-gray-400" />
                    <div>
                      <span className="text-gray-600">License Number:</span>
                      <p className="font-medium">{selectedCMSP.licenseNumber}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Company Details</h3>
              <div className="space-y-3">
                {selectedCMSP.intialCapital && (
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-gray-400" />
                    <div>
                      <span className="text-gray-600">Initial Capital:</span>
                      <p className="font-medium">{selectedCMSP.intialCapital}</p>
                    </div>
                  </div>
                )}

                {selectedCMSP.branchCount && (
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-gray-400" />
                    <div>
                      <span className="text-gray-600">Branches:</span>
                      <p className="font-medium">{selectedCMSP.branchCount} locations</p>
                    </div>
                  </div>
                )}

                {formatFullAddress() && (
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <span className="text-gray-600">Address:</span>
                      <p className="font-medium">{formatFullAddress()}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
              <div className="space-y-3">
                {selectedCMSP.phone && selectedCMSP.phone.length > 0 && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Phone:</span>
                    </div>
                    {selectedCMSP.phone.map((phone, index) => (
                      <p key={index} className="text-sm font-medium ml-6">{phone}</p>
                    ))}
                  </div>
                )}

                {selectedCMSP.email && (
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <div>
                      <span className="text-gray-600">Email:</span>
                      <p className="font-medium">{selectedCMSP.email}</p>
                    </div>
                  </div>
                )}

                {selectedCMSP.website && (
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4 text-gray-400" />
                    <a 
                      href={selectedCMSP.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 flex items-center gap-1"
                    >
                      Visit Website
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}

                {selectedCMSP.socialMediaLinks && selectedCMSP.socialMediaLinks.length > 0 && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <MessageCircle className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Social Media:</span>
                    </div>
                    {selectedCMSP.socialMediaLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-teal-600 hover:text-teal-700 flex items-center gap-1 ml-6"
                      >
                        {link}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DetailModal