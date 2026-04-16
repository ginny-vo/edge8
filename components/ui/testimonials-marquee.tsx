"use client";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/marquee';

const testimonials = [
  {
    name: 'Dato George Lim',
    title: 'Founder & CEO — G&A GROUP & GA SPACE',
    body: "I invited Dave to speak at the AI Summit in Sabah, and he was a natural on stage, bringing a fresh style the audience loved. We are looking forward to collaborating.",
    img: '/images/testimonials/dato-george-lim.png',
  },
  {
    name: 'John VanNewkirk',
    title: 'YPO Gold Seattle, Forum 6',
    body: "We were lucky enough to have Dave Hajdu work with our forum to help understand how AI is automating tasks. He was able to greatly expand our general knowledge of AI.",
    img: '/images/testimonials/john-vannewkirk.png',
  },
  {
    name: 'Dr. Brooks Holtom',
    title: 'Professor of Management, Georgetown',
    body: "He was extremely knowledgeable and engaging. Real-world experiences complemented our class discussions perfectly.",
    img: '/images/testimonials/brooks-holtom.jpg',
  },
  {
    name: 'Dao Nguyen',
    title: 'Founder, DN Legal',
    body: "Love the new look and branding. The brand interview really made me think about our positioning and business in ways I never expected.",
    img: '/images/testimonials/dao-nguyen.jpg',
  },
  {
    name: 'Tuan Anh Le',
    title: 'Managing Partner, DN Legal',
    body: "With Edge8's help, we're finally presenting ourselves the way we've always wanted. The speed, the quality, and the care were all top-notch.",
    img: '/images/testimonials/tuan-anh-le.jpg',
  },
  {
    name: 'Dan Absher',
    title: 'CEO, Absher Construction Company',
    body: "Working with Edge8 has been a pleasure. They showed us how to leverage AI to streamline our processes.",
    img: '/images/testimonials/dan-absher.jpg',
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
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3);
  
  return (
    <div className="relative flex h-[420px] w-full flex-col items-center justify-center overflow-hidden bg-white py-8">
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      
      {/* Row 1 - scrolls right */}
      <div className="mb-6">
        <Marquee pauseOnHover className="[--duration:50s]">
          {firstRow.map((review) => (
            <TestimonialCard key={review.name} {...review} />
          ))}
        </Marquee>
      </div>
      
      {/* Row 2 - scrolls left (reverse) */}
      <div>
        <Marquee pauseOnHover reverse className="[--duration:50s]">
          {secondRow.map((review) => (
            <TestimonialCard key={review.name} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}