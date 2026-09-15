const AnimatedCard = () => {
  return (
    <div className="relative w-4/5 sm:w-auto max-w-full h-[300px] md:h-[120px] overflow-hidden rounded-lg shadow-lg shadow-shadowPrimary my-10 mx-auto">
      {/* Rotating Gradient Border */}
      <div className="absolute -inset-10 z-0 animate-spin-border bg-gradient-to-r from-transparent via-primary to-transparent ease-in-out blur-[5px]"></div>

      {/* Inner Card Content */}
      <div className="absolute inset-[2px] bg-white rounded-lg flex flex-col sm:flex-row items-center justify-around p-4 z-10">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">10Y</h1>
          <p className="text-gray-600 font-semibold text-sm sm:text-base">
            Experience
          </p>
        </div>
        <div className="flex flex-col items-center mt-4 sm:mt-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">30+</h1>
          <p className="text-gray-600 font-semibold text-sm sm:text-base">
            Companies
          </p>
        </div>
        <div className="flex flex-col items-center mt-4 sm:mt-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">50+</h1>
          <p className="text-gray-600 font-semibold text-sm sm:text-base">
            Customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
