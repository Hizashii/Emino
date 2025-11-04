import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CommonQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const questions = [
    {
      question: 'What is included in the subscription?',
      answer: 'The subscription includes unlimited design requests, unlimited revisions, unlimited team members, unlimited storage, and you can pause or cancel anytime.'
    },
    {
      question: 'How long does it take to complete a design?',
      answer: 'Most designs are completed within 24-48 hours, depending on complexity. We prioritize quick turnaround times while maintaining quality.'
    },
    {
      question: 'Is there a limit to revisions?',
      answer: 'No, there are no limits to revisions. We work with you until you\'re completely satisfied with the design.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.'
    },
    {
      question: 'What if I need a custom design outside the plan?',
      answer: 'We can accommodate custom design requests outside the standard plan. Contact us to discuss your specific needs and we\'ll provide a custom quote.'
    }
  ]

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="common-questions" className="py-20 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-12 ml-8 md:ml-16">
          <div className="w-2 h-2 bg-blue-500 block"></div>
          <h2 className="text-base font-semibold text-gray-900 tracking-[0.05em] uppercase m-0">COMMON QUESTIONS</h2>
        </div>
        <div className="space-y-0 max-w-3xl ml-8 md:ml-16">
          {questions.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                <motion.span
                  className="text-gray-600 text-2xl font-light flex-shrink-0"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommonQuestions
