import React from 'react';
import { BookOpen, Clock, Star, Award } from 'lucide-react';
import PageHero from '../components/PageHero';

const CourseworkPage: React.FC = () => {
  const courseCategories = [
    {
      category: "Computer Science Core",
      courses: [
        {
          code: "CS 101",
          name: "Introduction to Programming",
          grade: "A",
          credits: 3,
          description: "Fundamentals of programming using Python. Covered data structures, algorithms, and software engineering principles."
        },
        {
          code: "CS 201",
          name: "Data Structures & Algorithms",
          grade: "A-",
          credits: 4,
          description: "Advanced data structures, algorithmic analysis, and optimization techniques."
        },
        {
          code: "CS 301",
          name: "Database Systems",
          grade: "A",
          credits: 3,
          description: "Relational database design, SQL, NoSQL databases, and database optimization."
        },
        {
          code: "CS 401",
          name: "Software Engineering",
          grade: "A-",
          credits: 4,
          description: "Software development lifecycle, design patterns, testing, and project management."
        }
      ]
    },
    {
      category: "Electrical Engineering Core",
      courses: [
        {
          code: "EE 101",
          name: "Circuit Analysis",
          grade: "A",
          credits: 4,
          description: "DC and AC circuit analysis, network theorems, and circuit simulation."
        },
        {
          code: "EE 201",
          name: "Digital Logic Design",
          grade: "A",
          credits: 3,
          description: "Boolean algebra, combinational and sequential circuits, FPGA programming."
        },
        {
          code: "EE 301",
          name: "Signals and Systems",
          grade: "A-",
          credits: 4,
          description: "Continuous and discrete-time signals, Fourier transforms, and system analysis."
        },
        {
          code: "EE 401",
          name: "Embedded Systems",
          grade: "A",
          credits: 4,
          description: "Microcontroller programming, real-time systems, and hardware-software integration."
        }
      ]
    },
    {
      category: "Mathematics & Science",
      courses: [
        {
          code: "MATH 201",
          name: "Calculus III",
          grade: "A-",
          credits: 4,
          description: "Multivariable calculus, vector calculus, and differential equations."
        },
        {
          code: "MATH 301",
          name: "Linear Algebra",
          grade: "A",
          credits: 3,
          description: "Matrix operations, eigenvalues, vector spaces, and applications."
        },
        {
          code: "PHYS 201",
          name: "Physics II",
          grade: "A-",
          credits: 4,
          description: "Electricity, magnetism, and electromagnetic waves."
        },
        {
          code: "STAT 301",
          name: "Probability & Statistics",
          grade: "A",
          credits: 3,
          description: "Probability theory, statistical inference, and data analysis."
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

  const calculateGPA = () => {
    const gradePoints: { [key: string]: number } = {
      'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0
    };
    
    let totalPoints = 0;
    let totalCredits = 0;
    
    courseCategories.forEach(category => {
      category.courses.forEach(course => {
        totalPoints += (gradePoints[course.grade] || 0) * course.credits;
        totalCredits += course.credits;
      });
    });
    
    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div className="pt-20 min-h-screen">
      <PageHero title="Coursework" subtitle="Academic courses completed in Computer Science and Electrical Engineering" />
      <div className="container mx-auto px-6 pb-24">

        {/* GPA Summary */}
        <div className="section-fade mb-16">
          <div className="glass rounded-xl p-8 max-w-md mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold">Cumulative GPA</h2>
            </div>
            <div className="text-4xl font-bold text-green-400 mb-2">{calculateGPA()}</div>
            <p className="text-gray-400">Out of 4.0</p>
          </div>
        </div>

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

        {/* Academic Highlights */}
        <div className="section-fade mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Academic Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass rounded-lg p-6 text-center">
              <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Dean's List</h3>
              <p className="text-gray-400">Multiple semesters on Dean's List for academic excellence</p>
            </div>
            <div className="glass rounded-lg p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Honor Society</h3>
              <p className="text-gray-400">Member of Tau Beta Pi Engineering Honor Society</p>
            </div>
            <div className="glass rounded-lg p-6 text-center">
              <Star className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Top 10%</h3>
              <p className="text-gray-400">Ranked in top 10% of graduating class</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseworkPage;
