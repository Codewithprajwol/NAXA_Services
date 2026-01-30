import { useSelector } from 'react-redux';
import ServiceCard from './ServiceCard';
import type { RootState } from '../store';
import { useServices } from '../Hooks/useServices';
import { useMemo } from 'react';

const ServicesList = () => {
  const { isLoading, isError } = useServices();
  const services = useSelector((state: RootState) => state.services);

  const sortedServices = useMemo(() => {
    const order = [
      'Software Development',
      'GIS Mapping and Analysis',
      'Data Collection and Visualization',
      'ICT & Digital Development Research',
      'Frontier Technologies (Drone, VR)',
      'Training & Capacity Building (GIS and WebGIS)',
      'Creative & Graphic Design'
    ];

    return [...services].sort((a, b) => {
      const indexA = order.findIndex(title => 
        a.title.toLowerCase().includes(title.toLowerCase().split(' ')[0].toLowerCase())
      );
      const indexB = order.findIndex(title => 
        b.title.toLowerCase().includes(title.toLowerCase().split(' ')[0].toLowerCase())
      );
        return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
    });
  }, [services]); // this is done just for ordering the services according to actual naxa service page

  if (isLoading) {
    return (
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-24 py-12">
        <div className="flex justify-center items-center min-h-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-24 py-12">
        <div className="text-center text-red-600">
          <p className="text-xl">Failed to load services. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-24 py-12 bg-[#F4F4F4] relative">
        <div className='hidden sm:block right-0 top-0 absolute z-0'>
            <img src="/top.svg" alt="top right corner decoration" />
        </div>
       
        <div className='hidden sm:block left-0 top-[18%] absolute z-0'>
            <img src="/middledeco.svg" alt="middle left corner decoration" />
        </div>
        <div className='hidden sm:block left-0 bottom-[10vh] absolute z-0'>
            <img src="/bottomdeco.svg" alt="bottom left corner decoration" />
        </div>
      <div className="space-y-3">
        {sortedServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;