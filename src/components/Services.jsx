import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const iconStyle = { width: 28, height: 28, stroke: "currentColor", fill: "none" };

const services = [
  {
    title: "UI/UX Design",
    icon: (
      <svg viewBox="0 0 24 24" style={iconStyle} strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
        <circle cx="8" cy="7" r="0.9" fill="currentColor" />
        <circle cx="11" cy="7" r="0.9" fill="currentColor" />
        <circle cx="14" cy="7" r="0.9" fill="currentColor" />
      </svg>
    ),
    description:
      "We craft innovative web design and UX that balance creativity with functionality to elevate your brand.",
  },
  {
    title: "Web Development",
    icon: (
      <svg viewBox="0 0 24 24" style={iconStyle} strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 15l-2-2 2-2M17 11l2 2-2 2" />
        <path d="M3 8h18" />
      </svg>
    ),
    description:
      "Robust, scalable websites with modern stacks, fast performance, and responsive design across devices.",
  },
  {
    title: "App Development",
    icon: (
      <svg viewBox="0 0 24 24" style={iconStyle} strokeWidth="1.6">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
    description:
      "Intuitive, high-performing mobile and web apps with a focus on UX, efficient code, and cross-platform compatibility.",
  },
  {
    title: "Digital Marketing",
    icon: (
      <svg viewBox="0 0 24 24" style={iconStyle} strokeWidth="1.6">
        <path d="M4 12v6a2 2 0 0 0 2 2h3" />
        <path d="M20 16V8a2 2 0 0 0-2-2h-1l-6 3H6a2 2 0 0 0-2 2v1" />
        <path d="M14 13v7" />
        <path d="M10 17h8" />
      </svg>
    ),
    description:
      "Full-funnel digital marketing: SEO, social, content, and performance campaigns that help businesses grow.",
  },
];

const testimonials = [
  {
    quote:
      "Outstanding design services! The team's creativity and attention to detail exceeded our expectations. The unlimited design plan is a game-changer.",
    author: "Munib Naveed",
    role: "CEO & Founder of Framer",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    quote:
      "From strategy to execution, Emino delivered an experience that feels premium and fast. Our conversion rate jumped immediately.",
    author: "Lina Ortega",
    role: "Head of Growth, Nova",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 22, rotateX: -8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  const [index, setIndex] = useState(0);

  return (
    <section id="services" className="bg-[#0b0d12] text-gray-200 py-16">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="mb-4.5 text-xs tracking-[0.14em] text-cyan-300">
          • OUR SERVICES
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-800 rounded-md overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="p-8 min-h-[180px] bg-[#0b0d12] border-b border-gray-800 last:border-b-0 md:border-r md:last:border-r-0 md:even:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35 }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 border border-gray-800 rounded-[10px] text-gray-300 hover:text-white hover:border-gray-700 transition-colors" aria-hidden>
                {s.icon}
              </div>
              <h3 className="mt-3.5 mb-2.5 text-xl text-gray-100">{s.title}</h3>
              <p className="m-0 leading-relaxed text-gray-400">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14">
          <div className="mb-4.5 text-xs tracking-[0.14em] text-cyan-300">
            • CLIENTS FEEDBACK
          </div>

          <div className="grid grid-cols-1 gap-4.5">
            <div className="flex items-start gap-4.5">
              <div className="text-4xl leading-none text-purple-600" aria-hidden>"</div>

              <div className="flex-1">
                <div className="relative min-h-[96px]">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="m-0 text-[22px] leading-[1.5] text-gray-100"
                    >
                      {testimonials[index].quote}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className="flex items-center gap-3 mt-4.5">
                  <img
                    src={testimonials[index].avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-200">{testimonials[index].author}</div>
                    <div className="text-gray-400 text-[13px]">{testimonials[index].role}</div>
                  </div>

                  <div className="ml-auto flex gap-2">
                    <button
                      onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                      aria-label="Previous testimonial"
                      className="w-[34px] h-[34px] rounded-full border border-gray-700 bg-transparent text-gray-200 cursor-pointer hover:border-gray-600 transition-colors"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                      aria-label="Next testimonial"
                      className="w-[34px] h-[34px] rounded-full border border-gray-700 bg-transparent text-gray-200 cursor-pointer hover:border-gray-600 transition-colors"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}
