const ServicePage = () => {
  return (
    <div className=" w-full bg-[url('/Images/landing_page.jpeg')] bg-cover   bg-center
  sm:bg-top-left pointer-events-none h-[90vh]">
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="p-4">
  <img
    className="h-8 w-auto"
    src="https://naxa.com.np/792f5bf2487bd27628a54fe64a712630.png"
    alt="naxa logo"
  />
</div>

      <div className="relative py-12 md:py-16 lg:py-20">
        <div className="relative z-10 mb-12 md:mb-16 w-full sm:max-w-2xl lg:max-w-4xl">
          <p className="text-yellow-500 font-semibold text-sm md:text-base tracking-wider mb-6 md:mb-8">
            SERVICES
          </p>
         <h1 className="text-3xl md:text-4xl font-normal text-black leading-tight mb-6 md:mb-8">
  <span className="md:block">
    At <span className="text-blue-600 ">NAXA</span>, we work on{' '}
    <span className="text-blue-600 ">ideas</span>; ideas
  </span>

  <span className="md:block">
    that can provide{' '}
    <span className="text-blue-600 font-semibold">simple solutions</span> to
  </span>

  <span className="md:block">
    <span className="text-blue-600 font-semibold">complex problems</span>.
  </span>
</h1>

         <p className="text-black text-sm md:text-sm lg:text-md max-w-4xl leading-relaxed font-semibold">
  <span className="md:block">
    We work as a team to generate, explore, build and validate ideas. We also contextualize
  </span>
  <span className="md:block">
    innovations around the world to find the best fitting solutions to local problems.
  </span>
</p>

        </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage