
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MyCourses = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // For demo purposes, we'll show mock enrolled courses
  const enrolledCourses = [
    {
      id: "course-1",
      title: "Introduction to Web Development",
      progress: 45,
      lastAccessed: "2 days ago"
    },
    {
      id: "course-2",
      title: "Advanced JavaScript Concepts",
      progress: 20,
      lastAccessed: "1 week ago"
    }
  ];

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">My Courses</h1>
            <p className="text-gray-600">Continue your learning journey</p>
          </div>

          {enrolledCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enrolledCourses.map(course => (
                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-brand-blue to-brand-purple h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mb-4">
                      Last accessed: {course.lastAccessed}
                    </div>
                    <Button asChild className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90">
                      <Link to={`/courses/${course.id}`}>
                        Continue Learning
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No courses yet</h2>
              <p className="text-gray-500 mb-6">You haven't enrolled in any courses yet.</p>
              <Button className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90" asChild>
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyCourses;
