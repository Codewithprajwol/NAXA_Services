import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Mail, Globe, Phone } from 'lucide-react';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Map = () => {
  const naxaPosition: [number, number] = [27.694198, 85.347794];

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-24 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Location
        </h2>
        <p className="text-lg text-gray-600">
          Visit us at our office in Lalitpur, Nepal
        </p>
      </div>
      
      <div className="h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
        <MapContainer
          center={naxaPosition}
          zoom={15}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={naxaPosition} icon={customIcon}>
            <Popup>
              <div className="p-3 min-w-[250px]">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src="https://naxa.com.np/792f5bf2487bd27628a54fe64a712630.png" 
                    alt="NAXA Logo" 
                    className="h-8 w-auto"
                  />
                  {/* <h3 className="font-bold text-lg text-gray-900">NAXA</h3> */}
                </div>
                
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Address:</span> Jwagal, Lalitpur, Nepal</span>
                  </p>
                  
                  <p className="flex items-start gap-2">
                    <Mail className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Email:</span>{' '}
                      <a 
                        href="mailto:info@naxa.com.np" 
                        className="text-blue-600 hover:underline"
                      >
                        info@naxa.com.np
                      </a>
                    </span>
                  </p>
                  
                  <p className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Website:</span>{' '}
                      <a 
                        href="https://naxa.com.np" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        naxa.com.np
                      </a>
                    </span>
                  </p>
                  
                  <p className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Phone:</span>{' '}
                      <a 
                        href="tel:+97715970007" 
                        className="text-blue-600 hover:underline"
                      >
                        +977-1-5970007
                      </a>
                    </span>
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=27.6915,85.3157" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;