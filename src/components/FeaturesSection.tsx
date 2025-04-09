
import React from "react";
import { Code, BookOpen, Users, BookCheck, Coffee, Award } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Code className="h-8 w-8 text-brand-blue" />,
    title: "Industry-Relevant Curriculum",
    description: "Curriculum designed by top engineers from FAANG companies, focused on what matters in real interviews."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-brand-purple" />,
    title: "Comprehensive Resources",
    description: "Access to video lectures, reading materials, practice problems, and detailed solutions."
  },
  {
    icon: <Users className="h-8 w-8 text-brand-teal" />,
    title: "Supportive Community",
    description: "Join a vibrant community of learners to discuss problems, share solutions, and grow together."
  },
  {
    icon: <BookCheck className="h-8 w-8 text-brand-indigo" />,
    title: "Regular Assessments",
    description: "Weekly challenges and assignments to test your understanding and track your progress."
  },
  {
    icon: <Coffee className="h-8 w-8 text-brand-blue" />,
    title: "Doubt Resolution",
    description: "Get your doubts cleared through live sessions and dedicated doubt-solving forums."
  },
  {
    icon: <Award className="h-8 w-8 text-brand-purple" />,
    title: "Placement Support",
    description: "Resume reviews, mock interviews, and job referrals to help you land your dream job."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Courses?</h2>
          <p className="text-lg text-gray-600">
            We don't just teach algorithms, we build problem solvers ready for the tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
