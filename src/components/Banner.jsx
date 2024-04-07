import imgBanner from "../assets/banner.jpg";
const Banner = () => {
  return (
    <section
      className="min-h-56 md:min-h-[488px] lg:min-h-[512px] flex items-center justify-center overflow-hidden banner"
      style={{ backgroundImage: `url(${imgBanner})` }}
    >
      <h1 className="text-[1.3rem] xs:text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-[84px] font-bold text-stone-50">
        Aconsegueix la millor qualitat
      </h1>
    </section>
  );
};

export default Banner;
