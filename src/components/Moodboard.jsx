// components/Moodboard.tsx
export default function Moodboard() {
  const images = [
    { src: "/pic2.jpg", col: "col-span-2", row: "row-span-2" },
    { src: "/pic3.jpg", col: "col-span-1", row: "row-span-1" },
    { src: "/pic7.jpg", col: "col-span-3", row: "row-span-1" },
    { src: "/copy.jpg", col: "col-span-1", row: "row-span-2" },
    { src: "/pic5.jpg", col: "col-span-1", row: "row-span-1" },
    // { src: "/acss6.jpg", col: "col-span-1", row: "row-span-1" },
    // { src: "/acss6.jpg", col: "col-span-1", row: "row-span-1" },
    { src: "/pic6.jpg", col: "col-span-2", row: "row-span-2" },

    { src: "/pic9.jpg", col: "col-span-2", row: "row-span-1" },

    { src: "/acss6.jpg", col: "col-span-1", row: "row-span-1" },
  ];

  return (
    <section className="bg-[#f4f0ed] py-16 px-4 text-center">
      <h2
        style={{ fontFamily: "Fleur De Leah , cursive" }}
        className=" text-8xl font-fleur mb-4"
      >
        Because elegance is timeless
        <hr className="border-t border-gray-300 w-1/3 mx-auto" />

      </h2>
      <p
        style={{ fontFamily: "Dancing Script, cursive" }}
       className=" text-[#762342] max-w-xl text-3xl mx-auto mb-10">
        Embark on an exceptional journey with our pieces inspired by the charm
        of the past
      </p>

      <div className="grid grid-cols-6 auto-rows-[120px] md:auto-rows-[180px] gap-4 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div key={index} className={`${img.col} ${img.row}`}>
            <img
              src={img.src}
              alt={`mood-${index}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
