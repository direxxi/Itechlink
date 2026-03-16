'use client'

import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi2'
import { testimonials } from '@/data/testimonials'
import SectionHeading from '@/components/ui/SectionHeading'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <HiStar key={i} className="w-4 h-4 text-amber-400" />
      ))}
    </div>
  )
}

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

const avatarColors = [
  'from-blue-500 to-cyan-500',
  'from-emerald-500 to-teal-500',
  'from-purple-500 to-pink-500',
  'from-orange-500 to-amber-500',
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it — here's what businesses across Nigeria say about working with iTechLink."
            centered
            label="Client Stories"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-neutral-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col relative overflow-hidden group"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Quote mark */}
              <div className="font-sora text-6xl text-primary/10 font-black leading-none mb-2 select-none">
                "
              </div>

              {/* Stars */}
              <StarRating rating={testimonial.rating} />

              {/* Service tag */}
              <div className="inline-block mt-3 mb-4">
                <span className="text-xs font-semibold bg-primary/8 text-primary px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>

              {/* Quote */}
              <p className="text-neutral-600 text-sm leading-relaxed flex-1 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-neutral-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-sora font-bold text-sm shrink-0`}>
                  {getInitials(testimonial.author)}
                </div>
                <div>
                  <div className="font-semibold text-sm text-neutral-900">{testimonial.author}</div>
                  <div className="text-xs text-neutral-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
