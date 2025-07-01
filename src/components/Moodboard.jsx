// components/Moodboard.tsx
export default function Moodboard() {
    const images = [
      { src: "/ph1.jpg", col: "col-span-2", row: "row-span-2" },
      { src: "/acss2.jpg", col: "col-span-1", row: "row-span-1" },
      { src: "/ph2.jpg", col: "col-span-3", row: "row-span-1" },
      { src: "/acss4.jpg", col: "col-span-1", row: "row-span-2" },
      { src: "/acss5.jpg", col: "col-span-2", row: "row-span-1" },
      { src: "/acss6.jpg", col: "col-span-1", row: "row-span-1" },
   
    ];
  
    return (
      <section className="bg-[#f4f0ed] py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">vintage</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
        A website with calm, neutral colors that convey the brand's sentiments: elegance, reassurance, warmth, sophistication, and uniqueness.        </p>
  
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
  