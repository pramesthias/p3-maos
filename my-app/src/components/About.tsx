export default function About() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
            At Maos, we curate a carefully selected range of titles spanning
            various genres, from timeless classics to contemporary bestsellers.
            Our mission is to create a haven where bookworms of all ages can
            explore, discover, and indulge in the magic of storytelling.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img
            className="w-80 lg:w-full h-auto"
            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3M0LWRzYzk0ODYtY2hpbS1ybTUzMF8xLnBuZw.png"
            alt="A group of People"
          />
        </div>
      </div>
    </div>
  );
}
