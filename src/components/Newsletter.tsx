import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto mb-12 px-4 sm:px-6 lg:px-24 relative overflow-hidden ">
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

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your mail address"
                required
                className="  px-3 py-3 w-full placeholder:text-sm text-base bg-white focus:outline-none  text-gray-700 placeholder-gray-400"
              />
              
              <button
                type="submit"
                className="bg-yellow-400 block text-center hover:bg-yellow-500 text-blue-900 font-bold text-base  px-6 py-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Newsletter;
