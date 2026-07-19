import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    company: "TechNova",
    review:
      "One of the best developers I've worked with. Clean code, excellent communication and delivered ahead of schedule.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    company: "Creative Studio",
    review:
      "Outstanding UI/UX skills. Every project exceeded our expectations and significantly improved our customer engagement.",
  },
  {
    id: 3,
    name: "David Smith",
    company: "StartUp Hub",
    review:
      "Professional, creative and highly skilled. I highly recommend him for modern web applications.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-[#111] to-black py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            What Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Building long-term relationships through quality,
            innovation and reliability.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400"
            >
              <div className="absolute right-6 top-6 text-6xl text-cyan-400/10 transition group-hover:scale-125">
                <FaQuoteLeft />
              </div>

              <div className="flex gap-1 text-yellow-400">
                {[1,2,3,4,5].map((star)=>(
                  <FaStar key={star}/>
                ))}
              </div>

              <p className="mt-8 leading-8 text-gray-300">
                "{item.review}"
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400 text-xl font-bold text-black">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-lg font-bold">
                    {item.name}
                  </h4>

                  <p className="text-sm text-cyan-400">
                    {item.company}
                  </p>
                </div>
              </div>

              <div className="mt-8 h-1 w-14 rounded-full bg-cyan-400 transition-all duration-500 group-hover:w-full"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;