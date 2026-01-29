import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto mb-24 px-4 sm:px-6 lg:px-24 relative overflow-hidden  ">
      <div 
        className="relative bg-[url('/Images/formbgimage.png')] bg-cover py-12 md:py-24 rounded-r-3xl">
          <div className="text-center space-y-6 md:space-y-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Subscribe to our Newsletter!
            </h2>
            
            <p className="text-sm md:text-md  text-white/90 max-w-2xl mx-auto">
              Join our subscriber list to receive latest<br className="hidden sm:block" />
              news & updates.
            </p>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your mail address"
                required
                className="  px-3 py-3 w[80%] md:w-full placeholder:text-sm text-base bg-white focus:outline-none  text-gray-700 placeholder-gray-400"
              />
              
              <button
                type="submit"
                className="bg-yellow-400 cursor-pointer group relative hover:bg-yellow-500 text-blue-900 font-bold text-base px-6 py-2 transition-all duration-300 shadow-lg flex items-center overflow-hidden"
              >
                <span className="relative z-10">Subscribe</span>
                <ArrowRight className="w-0 h-5 opacity-0 transition-all duration-300 transform -translate-x-2 group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2" />
              </button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Newsletter;
