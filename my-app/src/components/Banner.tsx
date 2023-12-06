export default function Banner() {
  return (
    <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
      <div className="lg:flex items-center justify-between">
        <div className="lg:w-1/3">
          <img src="/images/ban1.jpg" className="w-full" alt="kitchen" />
          {/* <h1 className="text-4xl font-semibold leading-9 text-gray-800 dark:text-white">
            Indoor Interiors
          </h1>
          <p className="text-base leading-6 mt-4 text-gray-600 dark:text-gray-100">
            Get inspired by our curated selection of luxiwood interiors. We hope
            get inspired to have luxiwood interior yourself. You’ll find tips
            here where you can buy a lot of cool furniture.
          </p> */}
        </div>
        <div className="lg:w-7/12 lg:mt-0 mt-8">
          <h1 className="text-4xl font-semibold leading-9 text-gray-800 dark:text-white">
            Kado Akhir Tahun Kawah Media
          </h1>
          <p className="text-base leading-6 mt-4 text-gray-600 dark:text-gray-100">
            Periode 03 Desember 2023 - 31 Desember 2023
          </p>
          <div className="w-full h-full bg-red-200 mt-8">
            <img
              src="/images/ban2.jpg"
              alt="apartment design"
              className="w-full sm:block hidden"
            />
            <img
              src="/images/ban2.jpg"
              alt="apartment design"
              className="sm:hidden block w-full"
            />
          </div>
          {/* <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
            <img src="/images/ban1.jpg" className="w-full" alt="kitchen" />
            <img
              src="https://i.ibb.co/0Jv3FSy/pexels-max-vakhtbovych-6436799-1-1.png"
              className="w-full"
              alt="sitting room"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
