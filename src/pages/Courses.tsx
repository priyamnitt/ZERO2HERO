
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Star } from "lucide-react";
import { Link } from "react-router-dom";

const coursesData = [
  {
    id: "dsa-basics",
    title: "DSA Basics",
    description: "Master the fundamentals of data structures and algorithms.",
    level: "Beginner",
    duration: "4 weeks",
    students: 1200,
    lessons: 24,
    rating: 4.8,
    price: 1000,
    popular: true,
    image: "/placeholder.svg"
  },
  {
    id: "advanced-algorithms",
    title: "Advanced Algorithms",
    description: "Deep dive into complex algorithms and problem-solving techniques.",
    level: "Intermediate",
    duration: "3 months",
    students: 850,
    lessons: 36,
    rating: 4.7,
    price: 2500,
    popular: false,
    image: "/placeholder.svg"
  },
  {
    id: "competitive-programming",
    title: "Competitive Programming",
    description: "Prepare for coding competitions and technical interviews.",
    level: "Advanced",
    duration: "6 months",
    students: 650,
    lessons: 48,
    rating: 4.9,
    price: 4500,
    popular: true,
    image: "/placeholder.svg"
  },
  {
    id: "interview-prep",
    title: "Interview Preparation",
    description: "Comprehensive preparation for technical interviews at top companies.",
    level: "All Levels",
    duration: "2 months",
    students: 980,
    lessons: 32,
    rating: 4.9,
    price: 2000,
    popular: true,
    image: "/placeholder.svg"
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Learn how to design scalable, reliable and efficient systems.",
    level: "Advanced",
    duration: "3 months",
    students: 520,
    lessons: 28,
    rating: 4.8,
    price: 3500,
    popular: false,
    image: "/placeholder.svg"
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent mb-4">
              Our Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform from Zero to Hero with our comprehensive DSA and programming courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course) => (
              <Link to={`/courses/${course.id}`} key={course.id} className="transition-transform hover:scale-105">
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  {course.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-brand-purple text-white">Popular</Badge>
                    </div>
                  )}
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-gray-600">
                        {course.level}
                      </Badge>
                      <div className="flex items-center text-yellow-500">
                        <Star className="fill-current h-4 w-4 mr-1" />
                        <span className="text-sm font-semibold">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="mt-2">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{course.students}+ students</span>
                      </div>
                      <div className="flex items-center col-span-2">
                        <BookOpen className="h-4 w-4 mr-2" />
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t flex justify-between items-center">
                    <p className="text-xl font-bold">₹{course.price}</p>
                    <Button className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
