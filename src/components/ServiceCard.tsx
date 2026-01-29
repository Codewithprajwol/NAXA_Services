import type { Service } from "../types";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="w-full bg-transparent py-16 md:py-24 px-2 z-1 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              <img 
                src={service.icon} 
                alt={service.title}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex justify-center lg:justify-start">
                <img 
                  src={service.photo} 
                  alt={service.title}
                  className="w-10 h-10 object-contain"
                />
            </div>

            <h2 className="text-xl md:text-xl font-bold text-gray-900 text-center lg:text-left">
              {service.title}
            </h2>

            <div className="space-y-4">
              <p className="text-gray-700 text-[12.56px] leading-relaxed text-center lg:text-left">
                {service.description1}
              </p>
              
              <div className="bg-[#E9EBFF] p-6 rounded-lg">
                <p className="text-gray-700 text-[12.56px] leading-relaxed">
                  {service.description2}
                </p>
              </div>
            </div>
          </div>

        </div>
    </div>
  );
};

export default ServiceCard;