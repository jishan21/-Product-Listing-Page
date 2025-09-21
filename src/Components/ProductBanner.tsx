function ProductBanner() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#40BFFF] font-Poppins text-white w-full mx-auto my-4 relative overflow-hidden ">
      <div className="flex-1 text-center md:text-left px-6 py-8 md:pl-16 md:pt-14 md:pb-8 z-10 max-w-lg">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide">
          Adidas Men Running
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-wide mt-1">
          Sneakers
        </h2>
        <p className="mt-2 text-sm font-light text-white/90 max-w-xs mx-auto md:mx-0">
          Performance and design. Taken right to the edge.
        </p>
        <a className="mt-4 inline-block font-semibold text-white tracking-wider border-b-2 border-white/80 pb-1 text-sm hover:cursor-pointer">
          SHOP NOW
        </a>
      </div>

      <div className="flex-1 flex justify-center items-center p-4 md:p-0">
        <img
          src="/Images/ProductBannerImage.png"
          alt="Adidas Running Sneakers"
          className="w-full max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem] drop-shadow-xl"
        />
      </div>
    </div>
  );
}

export default ProductBanner;
