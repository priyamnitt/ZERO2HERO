
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Zero To Hero</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to transform students into DSA experts through structured learning and practical problem solving.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Zero To Hero was born out of a simple observation: despite the abundance of DSA resources available online, many students and professionals still struggle to master these fundamental concepts.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2020 by a team of passionate educators and industry professionals, we set out to create a structured learning path that combines theoretical knowledge with practical problem-solving.
              </p>
              <p className="text-gray-600 mb-4">
                Our approach is different - we focus on building intuition, not just memorization. We believe in learning by doing, which is why our courses include hundreds of carefully curated problems that reinforce concepts and develop problem-solving skills.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have helped over 10,000 students across India master DSA concepts and secure positions at top tech companies.
              </p>
            </div>
            <div className="lg:pl-8">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Team Image</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Learning by Doing</h3>
                <p className="text-gray-600">
                  We believe that practical experience is the key to mastering complex concepts. Our courses emphasize hands-on problem solving over passive learning.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Support</h3>
                <p className="text-gray-600">
                  Learning is better together. We foster a supportive community where students can collaborate, ask questions, and grow together.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Quality Education</h3>
                <p className="text-gray-600">
                  We don't compromise on quality. Our curriculum is designed by experts and continuously updated to reflect industry best practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Aditya Sharma", role: "Founder & Lead Instructor", image: "/placeholder.svg" },
              { name: "Priya Verma", role: "Chief Operating Officer", image: "/placeholder.svg" },
              { name: "Rajat Singh", role: "Head of Curriculum", image: "/placeholder.svg" },
              { name: "Neha Bhatia", role: "Senior Instructor", image: "/placeholder.svg" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-brand-blue to-brand-purple text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to go from Zero to Hero?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our comprehensive DSA courses.
            </p>
            <Button asChild className="bg-white text-brand-purple hover:bg-gray-100 transition text-lg px-8 py-6">
              <Link to="/courses">Explore Our Courses</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
