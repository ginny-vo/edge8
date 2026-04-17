"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    quote: "Working with Edge8 has been a pleasure. Dave and the team not only helped with the branding, but showed us how to leverage AI to streamline our processes. We scaled from single posts to a full content engine while keeping true to our vision and voice.",
    author: "Dan Absher",
    role: "CEO, Absher Construction Company",
    avatar: "/images/testimonials/dan-absher.jpg",
  },
  {
    id: 2,
    quote: "I invited Dave to speak at the AI Summit in Sabah, and he was a natural on stage, bringing a fresh style the audience loved. We are looking forward to collaborating with the AI Officer Institute and Edge8 to bring their AI Certification Program to Malaysia.",
    author: "Dato George Lim",
    role: "Founder and CEO, G&A GROUP",
    avatar: "/images/testimonials/dato-george-lim.png",
  },
  {
    id: 3,
    quote: "Dave was able to greatly expand our general knowledge of AI and demystify the challenges of implementation. He greatly expanded our understanding of how AI is automating tasks and exploding output across a wide range of applications. I highly recommend Edge8.ai.",
    author: "John VanNewkirk",
    role: "YPO Gold Seattle, Forum 6",
    avatar: "/images/testimonials/john-vannewkirk.png",
  },
  {
    id: 4,
    quote: "I am very grateful to Dave Hajdu, who spoke to graduate students in our international business and public policy program. He was extremely knowledgeable and engaging. Real-world experiences complemented our class discussions perfectly.",
    author: "Dr. Brooks Holtom",
    role: "Professor of Management, Georgetown",
    avatar: "/images/testimonials/brooks-holtom.jpg",
  },
  {
    id: 5,
    quote: "Love the new look and branding. The website looks so good. The brand interview really made me think about our positioning and business in ways I never expected.",
    author: "Dao Nguyen",
    role: "Founder, DN Legal",
    avatar: "/images/testimonials/dao-nguyen.jpg",
  },
  {
    id: 6,
    quote: "I can't stop looking at the new website and brand book. With Edge8's help, we're finally presenting ourselves the way we've always wanted. The speed, the quality, and the care were all top-notch.",
    author: "Tuan Anh Le",
    role: "Managing Partner, DN Legal",
    avatar: "/images/testimonials/tuan-anh-le.jpg",
  },
]

export function UniqueTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote)
  const [displayedAuthor, setDisplayedAuthor] = useState(testimonials[0].author)
  const [displayedRole, setDisplayedRole] = useState(testimonials[0].role)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const activeRef = useRef(activeIndex)

  const total = testimonials.length

  useEffect(() => {
    activeRef.current = activeIndex
  }, [activeIndex])

  const goToNext = useCallback(() => {
    const next = (activeRef.current + 1) % total
    setIsAnimating(true)
    setTimeout(() => {
      setDisplayedQuote(testimonials[next].quote)
      setDisplayedAuthor(testimonials[next].author)
      setDisplayedRole(testimonials[next].role)
      setActiveIndex(next)
      setTimeout(() => setIsAnimating(false), 400)
    }, 200)
  }, [total])

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(goToNext, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, goToNext])

  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating) return
    setIsAnimating(true)
    setIsPaused(true)

    setTimeout(() => {
      setDisplayedQuote(testimonials[index].quote)
      setDisplayedAuthor(testimonials[index].author)
      setDisplayedRole(testimonials[index].role)
      setActiveIndex(index)
      setTimeout(() => {
        setIsAnimating(false)
        setTimeout(() => setIsPaused(false), 7000)
      }, 400)
    }, 200)
  }

  return (
    <div
      className="flex flex-col items-center py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Quote Container — aligned top */}
      <div className="relative px-8 w-full max-w-2xl flex flex-col" style={{ minHeight: "160px" }}>
        <span className="absolute -left-2 -top-4 text-5xl font-serif select-none pointer-events-none text-text-tertiary/30">
          &ldquo;
        </span>

        <p
          className={cn(
            "text-base md:text-lg font-light leading-relaxed pt-4 transition-all duration-400 ease-out",
            isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
          )}
          style={{
            color: "var(--text-primary)",
            filter: isAnimating ? "blur(4px)" : "blur(0px)",
            transition: "opacity 0.4s ease-out, transform 0.4s ease-out, filter 0.4s ease-out",
          }}
        >
          {displayedQuote}
        </p>

        <span className="absolute -right-2 bottom-0 text-5xl font-serif select-none pointer-events-none text-text-tertiary/30">
          &rdquo;
        </span>
      </div>

      {/* Author + Role */}
      <div className="flex flex-col items-center gap-2 mt-6">
        <p
          className={cn(
            "text-sm font-semibold transition-all duration-500 ease-out",
            isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
          )}
          style={{ color: "var(--text-primary)" }}
        >
          {displayedAuthor}
        </p>
        <p
          className={cn(
            "text-xs tracking-[0.15em] uppercase transition-all duration-500 ease-out",
            isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
          )}
          style={{ color: "var(--text-tertiary)" }}
        >
          {displayedRole}
        </p>
      </div>

      {/* Avatar steppers with name on right for active */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
        {testimonials.map((testimonial, index) => {
          const isActive = activeIndex === index
          const isHovered = hoveredIndex === index && !isActive
          const showName = isActive || isHovered

          return (
            <button
              key={testimonial.id}
              onClick={() => handleSelect(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "relative flex items-center rounded-full cursor-pointer border transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                showName ? "pr-3 pl-0.5 py-0.5" : "p-0.5",
                isActive
                  ? "border-neutral bg-neutral"
                  : isHovered
                    ? "border-neutral/60 bg-neutral/10"
                    : "border-neutral/30",
              )}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className={cn(
                    "w-8 h-8 rounded-full object-cover transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    !isActive && "hover:scale-105",
                  )}
                />
              </div>

              <div
                className={cn(
                  "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  showName ? "grid-cols-[1fr] opacity-100 ml-2" : "grid-cols-[0fr] opacity-0 ml-0",
                )}
              >
                <div className="overflow-hidden">
                  <span
                    className="text-xs font-medium whitespace-nowrap block transition-colors duration-300"
                    style={{ color: isActive ? "var(--neutral-contrast)" : "var(--text-primary)" }}
                  >
                    {testimonial.author}
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
