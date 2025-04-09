
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [showHero, setShowHero] = useState(false);
  const [transformText, setTransformText] = useState(false);

  useEffect(() => {
    setShowHero(true);
    
    const interval = setInterval(() => {
      setTransformText(prev => !prev);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 -z-10" />
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 transition-opacity duration-1000 ${
              showHero ? "opacity-100" : "opacity-0"
            }`}
          >
            Transform from{" "}
            <div className="h-[1.5em] overflow-hidden inline-block align-bottom">
              <span 
                className={`block transition-transform duration-700 ${
                  transformText ? "-translate-y-full" : ""
                }`}
              >
                <span className="text-brand-blue bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-blue">Zero</span>
              </span>
              <span 
                className={`block transition-transform duration-700 ${
                  transformText ? "-translate-y-full" : "translate-y-full"
                }`}
              >
                <span className="text-brand-purple bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-purple">Hero</span>
              </span>
            </div>
            {" "}with our DSA Mastery
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mb-10 transition-opacity duration-1000 delay-300 ${
              showHero ? "opacity-100" : "opacity-0"
            }`}
          >
            Master Data Structures and Algorithms with our comprehensive courses. 
            Start your journey today and become the programmer companies are looking for.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-opacity duration-1000 delay-500 ${
              showHero ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white px-8"
              asChild
            >
              <Link to="/courses">
                Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300"
              asChild
            >
              <Link to="/free-resources">Free Resources</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-brand-blue/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-32 right-10 w-32 h-32 bg-brand-purple/10 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default HeroSection;
