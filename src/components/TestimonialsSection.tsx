
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  avatar: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Zero to Hero transformed my understanding of DSA. I went from not knowing what a linked list is to solving complex graph problems in just 3 months. Now I have a job at Google!",
    author: "Priya Sharma",
    role: "Software Engineer",
    company: "Google",
    avatar: ""
  },
  {
    id: 2,
    content: "The structured curriculum and regular assessments kept me disciplined. The mentors were always available for doubt resolution. Best investment I've made in my career.",
    author: "Rahul Verma",
    role: "Backend Developer",
    company: "Amazon",
    avatar: ""
  },
  {
    id: 3,
    content: "I tried many online courses but Zero to Hero was different. The focus on problem solving techniques rather than just memorizing algorithms made all the difference.",
    author: "Ananya Patel",
    role: "Full Stack Developer",
    company: "Microsoft",
    avatar: ""
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600">
            Hear from our students who transformed their careers after completing our courses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-brand-purple/10 text-brand-purple">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
