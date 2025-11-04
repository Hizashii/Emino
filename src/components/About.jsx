import React from 'react'

const TOOLKIT = [
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Framer Motion', src: 'https://api.iconify.dev/simple-icons/framermotion.svg' },
  { name: 'Vercel', src: 'https://api.iconify.dev/logos/vercel.svg' },
  { name: 'OpenAI', src: 'https://api.iconify.dev/simple-icons/openai.svg' },
  { name: 'Stripe', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 bg-blue-500 block" />
          <h2 className="text-base font-semibold text-gray-900 tracking-[0.05em] uppercase m-0">
            About Us
          </h2>
        </div>

<div className="flex items-start justify-between gap-12 mb-12">
  <div className="flex-1 max-w-3xl">
    <h3 className="text-2xl font-bold text-gray-900 mb-4">
      Our Mission
    </h3>

    <p className="text-gray-700 mb-6">
      At <span className="font-semibold text-gray-900">Emino</span>, our mission is to bridge creativity and intelligence -
      crafting websites that don’t just look good, but think smart. 
      We believe the future of the web is human-centered design powered by AI-driven efficiency.
    </p>

    <p className="text-gray-700 mb-6">
      Every project we take on blends clarity, performance, and purpose. 
      We aim to make technology feel natural, interfaces feel alive, 
      and businesses feel empowered to grow through design and intelligent automation.
    </p>

    <ul className="space-y-3 mb-7">
      <li className="flex gap-3">
        <span className="text-blue-500 font-bold mt-1">•</span>
        <p className="text-gray-700 m-0">
          <span className="font-medium text-gray-900">Innovation with purpose</span> - creating digital experiences that 
          serve both people and progress.
        </p>
      </li>
      <li className="flex gap-3">
        <span className="text-blue-500 font-bold mt-1">•</span>
        <p className="text-gray-700 m-0">
          <span className="font-medium text-gray-900">Ethical AI</span> - using automation responsibly to enhance, 
          not replace, human creativity.
        </p>
      </li>
      <li className="flex gap-3">
        <span className="text-blue-500 font-bold mt-1">•</span>
        <p className="text-gray-700 m-0">
          <span className="font-medium text-gray-900">Long-term impact</span> - building scalable, maintainable systems 
          that evolve with your business.
        </p>
      </li>
    </ul>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium cursor-pointer transition-all hover:bg-blue-700"
              >
                Get a quote
              </a>
              <a
                href="#our-process"
                className="text-blue-600 no-underline text-sm font-medium hover:underline"
              >
                See our process →
              </a>
            </div>
          </div>
        </div>

        {/* Slim metrics (keep it honest & compact) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">95+</div>
            <div className="text-sm text-gray-600">Lighthouse performance</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">&lt;2.5s</div>
            <div className="text-sm text-gray-600">typical load time (LCP)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">24h</div>
            <div className="text-sm text-gray-600">average response time</div>
          </div>
        </div>
      </div>
    </section>
  )
}
