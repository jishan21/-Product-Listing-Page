function ProductBanner() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#38B6FF] font-sans text-white w-full mx-auto my-8 relative overflow-hidden rounded-lg">
      <div className="flex-1 text-center md:text-left p-6 sm:p-8 md:p-16 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide">
          Adidas Men Running
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide mt-1">
          Sneakers
        </h2>
        <p className="mt-4 text-base font-light text-white/90 max-w-md mx-auto md:mx-0">
          Performance and design. Taken right to the edge.
        </p>
        <a
          href="#"
          className="mt-6 inline-block font-semibold text-white tracking-wider border-b-2 border-white/80 pb-1 text-sm"
        >
          SHOP NOW
        </a>
      </div>

      <div className="flex-1 flex justify-center items-center p-6 md:p-0">
        <img
          src="/Images/ProductBannerImage.png"
          alt="Adidas Running Sneakers"
          className="w-full max-w-xs sm:max-w-sm md:max-w-lg drop-shadow-xl"
        />
      </div>
    </div>
  );
}

export default ProductBanner;