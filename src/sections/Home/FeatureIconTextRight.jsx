function FeatureIconTextRight({ icon, img, title, text, links }) {
  return (
    <section className="px-8 mt-16 md:px-16 md:mt-28">
      <div className="mx-auto feature-grid2-right gap-10 xl:w-[70%]">
        <div className="feature-grid2-right-al gap-8 flex flex-col items-center justify-center md:items-start md:justify-end">
          <img src={icon} className="w-16" />
          <div className="text-center md:text-left">
            <h4 className="font-poppins mb-2 font-medium text-3xl lg:text-4xl">
              {title}
            </h4>
            <p className="font-grotesk lg:text-lg">{text}</p>
          </div>
        </div>

        <img
          src={img}
          className="feature-grid2-right-am rounded-lg w-full h-full object-cover"
        />

        <div className="feature-grid2-right-ar flex flex-col gap-5">
          {links.map((item, ind) => (
            <a
              key={ind}
              className="text-primary-text-g hover:underline lg:text-lg"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FeatureIconTextRight;
