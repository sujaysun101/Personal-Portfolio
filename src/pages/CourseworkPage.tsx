import React from 'react';
import { Clock, Star } from 'lucide-react';
import PageHero from '../components/PageHero';

const CourseworkPage: React.FC = () => {
  const courseCategories = [
    {
      category: "Computer Science Core",
      courses: [
        {
          code: "CSE 115",
          name: "Introduction to Computer Science I",
          grade: "B+",
          credits: 4,
          description: "Fundamentals of programming using Python. <please fix asap>"
        },
        {
          code: "CSE 199",
          name: "Seminar",
          grade: "A-",
          credits: 3,
          description: "<please fix asap>"
        },
        {
          code: "CSE 116",
          name: "Introduction to Computer Science II",
          grade: "A-",
          credits: 4,
          description: "<please fix asap>"
        },
        {
          code: "CSE 191",
          name: "Introduction to Discrete Structures",
          grade: "A-",
          credits: 4,
          description: "<please fix asap>"
        }
      ]
    },
    {
      category: "Electrical Engineering Core",
      courses: [
        {
          code: "ECE 1002",
          name: "Introduction to Electrical and Computer Engineering",
          grade: "In Progress",
          credits: 2,
          description: "<please fix asap>"
        },
        {
          code: "ECE 2004",
          name: "Fundamentals of Electric Circuits",
          grade: "In Progress",
          credits: 3,
          description: "<please fix asap>"
        },
        {
          code: "ECE 2204",
          name: "Digital Logic and State Machine Design",
          grade: "In Progress",
          credits: 4,
          description: "<please fix asap>"
        }
      ]
    },
    {
      category: "Mathematics & Science",
      courses: [
        {
          code: "MTH 141",
          name: "Calculus I",
          grade: "A",
          credits: 4,
          description: "<please fix asap>"
        },
        {
          code: "MTH 142",
          name: "Calculus II",
          grade: "A",
          credits: 4,
          description: "<please fix asap>"
        },
        {
          code: "MTH 241",
          name: "Calculus III",
          grade: "A",
          credits: 4,
          description: "<please fix asap>"
        },
        {
          code: "MTH 306",
          name: "Differential Equations",
          grade: "A-",
          credits: 4,
          description: "<please fix asap>"
        },
        {
          code: "PHY 107",
          name: "Physics I",
          grade: "B-",
          credits: 4,
          description: "<please fix asap>"
        },
        {
          code: "PH 2023",
          name: "Physics II",
          grade: "In Progress",
          credits: 4,
          description: "<please fix asap>"
        },
        {
          code: "CHE 107 + 127",
          name: "General Chemistry for Engineers + Lab",
          grade: "A-",
          credits: 4,
          description: "<please fix asap>"
        }

      ]
    }
  ];

  const getGradeColor = (grade: string) => {
    if (grade === 'A') return 'text-green-400';
    if (grade === 'A-') return 'text-green-300';
    if (grade === 'B+') return 'text-yellow-400';
    return 'text-gray-400';
  };


  return (
    <div className="pt-20 min-h-screen">
      <PageHero title="Coursework" subtitle="Academic courses completed in Computer Science and Electrical Engineering" />
  <div className="container mx-auto px-6 pb-24">

        {/* Course Categories */}
        <div className="space-y-16">
          {courseCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="section-fade">
              <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="glass rounded-lg p-6 hover:bg-white/5 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-400/30">
                            {course.code}
                          </span>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400 text-sm">{course.credits} credits</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">{course.name}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className={`w-5 h-5 ${getGradeColor(course.grade)}`} />
                        <span className={`text-lg font-bold ${getGradeColor(course.grade)}`}>
                          {course.grade}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">{course.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CourseworkPage;
