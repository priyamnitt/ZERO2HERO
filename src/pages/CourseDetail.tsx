
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, BookOpen, Star, CheckCircle, ShoppingCart, CreditCard } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// This would come from API in a real app
const coursesData = [
  {
    id: "dsa-basics",
    title: "DSA Basics",
    description: "Master the fundamentals of data structures and algorithms.",
    longDescription: "Our DSA Basics course is designed to build a strong foundation in the core concepts of data structures and algorithms. Starting from the very basics, you'll learn about arrays, linked lists, stacks, queues, trees, and graphs. You'll also master sorting and searching algorithms, and understand time and space complexity analysis.",
    level: "Beginner",
    duration: "4 weeks",
    students: 1200,
    lessons: 24,
    rating: 4.8,
    price: 1000,
    popular: true,
    image: "/placeholder.svg",
    instructor: "Dr. Aditya Sharma",
    instructorTitle: "PhD in Computer Science, 10+ years of teaching experience",
    instructorImage: "/placeholder.svg",
    curriculum: [
      {
        week: "Week 1",
        title: "Introduction to Data Structures",
        topics: ["Arrays and Strings", "Time & Space Complexity", "Problem Solving Approach", "Basic Sorting Algorithms"]
      },
      {
        week: "Week 2",
        title: "Linear Data Structures",
        topics: ["Linked Lists", "Stacks & Applications", "Queues & Applications", "Recursion Basics"]
      },
      {
        week: "Week 3",
        title: "Non-Linear Data Structures",
        topics: ["Trees & Binary Trees", "Binary Search Trees", "Heaps", "Hash Tables"]
      },
      {
        week: "Week 4",
        title: "Advanced Topics",
        topics: ["Graphs & Representations", "Graph Traversals", "Dynamic Programming Intro", "Final Project"]
      }
    ],
    features: [
      "24 video lessons (35+ hours)",
      "100+ practice problems",
      "4 real-world projects",
      "Certificate of completion",
      "Lifetime access to course material",
      "1-on-1 doubt clearing sessions",
      "Dedicated discussion forum",
      "Weekly live coding sessions"
    ]
  },
  {
    id: "advanced-algorithms",
    title: "Advanced Algorithms",
    description: "Deep dive into complex algorithms and problem-solving techniques.",
    longDescription: "Take your algorithm skills to the next level with our Advanced Algorithms course. This course covers advanced data structures, algorithmic techniques, and problem-solving strategies used in competitive programming and technical interviews at top tech companies.",
    level: "Intermediate",
    duration: "3 months",
    students: 850,
    lessons: 36,
    rating: 4.7,
    price: 2500,
    popular: false,
    image: "/placeholder.svg",
    instructor: "Prof. Vikram Mehta",
    instructorTitle: "Ex-Google Engineer, Competitive Programming Coach",
    instructorImage: "/placeholder.svg",
    curriculum: [
      {
        week: "Month 1",
        title: "Advanced Data Structures",
        topics: ["Advanced Trees", "Segment Trees", "Fenwick Trees", "Disjoint Set Union"]
      },
      {
        week: "Month 2",
        title: "Graph Algorithms",
        topics: ["Shortest Path Algorithms", "Minimum Spanning Trees", "Network Flow", "Advanced Graph Problems"]
      },
      {
        week: "Month 3",
        title: "Algorithmic Paradigms",
        topics: ["Advanced Dynamic Programming", "Greedy Algorithms", "Divide & Conquer", "String Algorithms"]
      }
    ],
    features: [
      "36 in-depth video lessons (50+ hours)",
      "150+ algorithmic problems",
      "Monthly coding contests",
      "Advanced problem-solving techniques",
      "Mock interview sessions",
      "Certificate of completion",
      "Lifetime access to course material",
      "Weekly doubt clearing sessions"
    ]
  },
  {
    id: "competitive-programming",
    title: "Competitive Programming",
    description: "Prepare for coding competitions and technical interviews.",
    longDescription: "Our Competitive Programming course is designed to prepare you for top coding competitions like ICPC, Google CodeJam, and Facebook Hacker Cup. You'll learn advanced algorithms, optimization techniques, and problem-solving strategies from competitive programmers.",
    level: "Advanced",
    duration: "6 months",
    students: 650,
    lessons: 48,
    rating: 4.9,
    price: 4500,
    popular: true,
    image: "/placeholder.svg",
    instructor: "Rajat Verma",
    instructorTitle: "ICPC World Finalist, Codeforces Grandmaster",
    instructorImage: "/placeholder.svg",
    curriculum: [
      {
        week: "Month 1-2",
        title: "Algorithmic Toolbox",
        topics: ["Problem Solving Patterns", "Mathematical Algorithms", "Bitwise Operations", "Advanced Data Structures"]
      },
      {
        week: "Month 3-4",
        title: "Advanced Topics",
        topics: ["String Algorithms", "Computational Geometry", "Game Theory", "Network Flow Advanced"]
      },
      {
        week: "Month 5-6",
        title: "Contest Preparation",
        topics: ["Virtual Contests", "Problem Analysis", "Time Management", "Team Strategies"]
      }
    ],
    features: [
      "48 comprehensive video lessons (70+ hours)",
      "200+ contest-level problems",
      "Weekly virtual contests",
      "Analysis of past competition problems",
      "Mock competitions",
      "Contest strategy sessions",
      "1-on-1 mentorship",
      "Interview preparation module"
    ]
  },
  {
    id: "interview-prep",
    title: "Interview Preparation",
    description: "Comprehensive preparation for technical interviews at top companies.",
    longDescription: "Our Interview Preparation course is specifically designed to help you crack technical interviews at FAANG and other top tech companies. From data structures and algorithms to system design and behavioral questions, we cover everything you need to succeed.",
    level: "All Levels",
    duration: "2 months",
    students: 980,
    lessons: 32,
    rating: 4.9,
    price: 2000,
    popular: true,
    image: "/placeholder.svg",
    instructor: "Neha Bhatia",
    instructorTitle: "Ex-Amazon & Microsoft, 500+ Interview Mentorship Sessions",
    instructorImage: "/placeholder.svg",
    curriculum: [
      {
        week: "Week 1-2",
        title: "DSA Foundations & Problem Solving",
        topics: ["Arrays & Strings", "Linked Lists & Trees", "Searching & Sorting", "Recursion & Backtracking"]
      },
      {
        week: "Week 3-4",
        title: "Advanced DSA & Algorithms",
        topics: ["Dynamic Programming", "Graphs", "Greedy Algorithms", "Advanced Data Structures"]
      },
      {
        week: "Week 5-6",
        title: "System Design & Behavioral",
        topics: ["System Design Fundamentals", "Scalability & Performance", "Object-Oriented Design", "Behavioral Question Strategies"]
      },
      {
        week: "Week 7-8",
        title: "Mock Interviews & Feedback",
        topics: ["Technical Mock Interviews", "System Design Interviews", "Behavioral Interviews", "Negotiation Strategies"]
      }
    ],
    features: [
      "32 focused video lessons (45+ hours)",
      "120+ interview problems with solutions",
      "8 mock interview sessions",
      "System design case studies",
      "Resume and LinkedIn profile review",
      "Behavioral question preparation",
      "1-on-1 feedback sessions",
      "Offer negotiation strategies"
    ]
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Learn how to design scalable, reliable and efficient systems.",
    longDescription: "Master the art of designing large-scale distributed systems with our comprehensive System Design course. From fundamentals to advanced concepts, you'll learn how to design scalable, reliable, and efficient systems that can handle millions of users.",
    level: "Advanced",
    duration: "3 months",
    students: 520,
    lessons: 28,
    rating: 4.8,
    price: 3500,
    popular: false,
    image: "/placeholder.svg",
    instructor: "Arvind Kumar",
    instructorTitle: "Principal Architect at a Leading Tech Company, 15+ years of experience",
    instructorImage: "/placeholder.svg",
    curriculum: [
      {
        week: "Month 1",
        title: "System Design Fundamentals",
        topics: ["Scalability Basics", "CAP Theorem", "Load Balancing", "Caching Strategies"]
      },
      {
        week: "Month 2",
        title: "Distributed Systems",
        topics: ["Distributed Databases", "Message Queues", "Microservices Architecture", "API Gateway Design"]
      },
      {
        week: "Month 3",
        title: "Case Studies & Advanced Topics",
        topics: ["URL Shortener", "News Feed System", "Chat Application", "Video Streaming Platform"]
      }
    ],
    features: [
      "28 in-depth video lessons (40+ hours)",
      "10 end-to-end system design case studies",
      "Real-world architecture diagrams",
      "Performance optimization techniques",
      "Trade-off analysis frameworks",
      "Industry best practices",
      "Live system design sessions",
      "Project-based assessments"
    ]
  }
];

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const course = coursesData.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
            <p className="mb-6">The course you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/courses')}>
              Back to Courses
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    // In a real app with a backend, this would call an API to add the course to the cart
    // For now, we'll just use localStorage to simulate cart functionality
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
    // Check if the course is already in the cart
    const isInCart = cartItems.some((item: any) => item.id === course.id);
    
    if (!isInCart) {
      const newCartItem = {
        id: course.id,
        name: course.title,
        price: course.price,
        duration: course.duration,
      };
      
      cartItems.push(newCartItem);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      
      toast({
        title: "Added to cart",
        description: `${course.title} has been added to your cart.`,
      });
    } else {
      toast({
        title: "Already in cart",
        description: `${course.title} is already in your cart.`,
      });
    }
  };

  const handleBuyNow = () => {
    // Add to cart first
    handleAddToCart();
    // Then navigate to cart page
    navigate('/cart');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Badge variant="outline" className="mr-2">
                    {course.level}
                  </Badge>
                  <div className="flex items-center text-yellow-500">
                    <Star className="fill-current h-4 w-4 mr-1" />
                    <span className="text-sm font-semibold">{course.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({course.students}+ students)</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{course.longDescription}</p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <BookOpen className="h-5 w-5 mr-2" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{course.students}+ enrolled</span>
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  <img 
                    src={course.instructorImage} 
                    alt={course.instructor} 
                    className="w-12 h-12 rounded-full mr-4 bg-gray-200"
                  />
                  <div>
                    <h3 className="font-medium">{course.instructor}</h3>
                    <p className="text-sm text-gray-500">{course.instructorTitle}</p>
                  </div>
                </div>
              </div>
              <div className="lg:pl-8">
                <Card className="shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 relative">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    {course.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-brand-purple text-white">Popular</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <p className="text-3xl font-bold mb-2">₹{course.price}</p>
                    </div>
                    <div className="space-y-4">
                      <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 py-6" onClick={handleAddToCart}>
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" className="w-full py-6" onClick={handleBuyNow}>
                        <CreditCard className="mr-2 h-5 w-5" />
                        Buy Now
                      </Button>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-semibold mb-3">This course includes:</h3>
                      <ul className="space-y-2">
                        {course.features.slice(0, 5).map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="curriculum">
            <TabsList className="mb-8">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="features">What You'll Learn</TabsTrigger>
            </TabsList>
            <TabsContent value="curriculum">
              <div className="space-y-6">
                {course.curriculum.map((section, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b">
                      <h3 className="font-bold">{section.week}: {section.title}</h3>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {section.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-center">
                            <BookOpen className="h-4 w-4 text-gray-500 mr-3" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="features">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
