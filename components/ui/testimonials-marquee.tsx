"use client";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/marquee';

const testimonials = [
  {
    name: 'Dao Nguyen',
    title: 'Founder, DN Legal',
    body: "Love the new look and branding. The brand interview really made me think about our positioning.",
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
  {
    name: 'Dato George Lim',
    title: 'Founder and CEO, G&A GROUP',
    body: "I invited Dave to speak at the AI Summit in Sabah, and he was a natural on stage.",
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
  },
  {    name: 'Dr. Brooks Holtom',
    title: 'Professor of Management, Georgetown',
    body: "He was extremely knowledgeable and engaging. Real-world experiences complemented our class perfectly.",
    img: 'https://randomuser.me/api/portraits/men/68.jpg',
  },
  {
    name: 'John VanNewkirk',
    title: 'YPO Gold Seattle',
    body: "He was able to greatly expand our general knowledge of AI and demystify implementation challenges.",
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    name: 'Dan Absher',
    title: 'CEO, Absher Construction',
    body: "Working with Edge8 has been a pleasure. They showed us how to leverage AI to streamline processes.",
    img: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
];

function TestimonialCard({ img, name, title, body }: typeof testimonials[number]) {
  return (
    <Card className="w-80 border-[#E6EBF0] shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-semibold text-[#04102D]">
              {name}
            </figcaption>
            <p className="text-xs text-[rgba(4,16,45,0.5)]">{title}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-[rgba(4,16,45,0.7)] leading-relaxed">
          "{body}"
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsMarquee() {
  return (
    <div className="relative flex h-72 w-full flex-row items-center justify-center overflow-hidden bg-white">
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
      
      <Marquee pauseOnHover reverse className="[--duration:30s]">
        {testimonials.map((review) => (
          <TestimonialCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}