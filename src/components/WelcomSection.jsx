const WelcomeSection = () => {
  return (
    <section className="bg-[#f4f3f1] py-16 px-4">
      <div className="text-center mb-12">
        <h2
          style={{ fontFamily: "Fleur De Leah , cursive" }}
          className="text-3xl md:text-6xl font-semibold mb-4"
        >
          Styling
        </h2>
        <hr className="border-t border-gray-300 w-1/3 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto items-center">
        <img
          data-aos="fade-left"
        data-aos-delay="200"
          src="/ph1.jpg"
          alt="earring"
          className="w-full h-72 object-cover rounded-lg"
        />
        <img
          data-aos="fade-left"
        data-aos-delay="200"
          src="/ph2.jpg"
          alt="profile"
          className="w-full h-72 object-cover rounded-lg"
        />

        <div
          data-aos="fade-up"
        data-aos-delay="200"
          style={{ fontFamily: "Dancing Script, cursive" }}
          className="text-center  text-[#762342] text-xl px-5"
        >
          <p>MAKEUP NATURAL</p>
          <p>LOOK CASUAL</p>
          <p>JOYERÍA DORADA</p>
          <p>PENDIENTES LARGOS</p>
          <p>ANILLOS</p>
          <p>ZAPATOS CON PLATAFORMA</p>
          <p>BOLSO TEJIDO</p>
          <p>ESTILO MINIMALISTA</p>
        </div>

        <img
          data-aos="fade-right"
        data-aos-delay="200"
          src="/pic11.jpg"
          alt="bag"
          className="w-full h-72 object-cover rounded-lg"
        />
        <img
          data-aos="fade-right"
        data-aos-delay="200"
          src="/hero.jpg"
          alt="rings"
          className="w-full h-72 object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
