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
          description: "Fundamentals of programming using Python: variables, data types, expressions, control flow, functions, input/output, data storage, networking, security, selection, sorting, iteration, aggregate data structures such as lists and collections."
        },
        {
          code: "CSE 199",
          name: "Seminar",
          grade: "A-",
          credits: 3,
          description: "Exploration of how the internet works, including web infrastructure, digital communication, cybersecurity basics, social impacts, and hands-on website creation."
        },
        {
          code: "CSE 116",
          name: "Introduction to Computer Science II",
          grade: "A-",
          credits: 4,
          description: "Object-oriented programming and software design in Java, tackling inheritance, polymorphism, core data structures, algorithmic thinking, and problem-solving with code."
        },
        {
          code: "CSE 191",
          name: "Introduction to Discrete Structures",
          grade: "A-",
          credits: 4,
          description: "Introduction to discrete mathematics with topics such as logic, proof methods, sets, combinatorics, recursion, and graph theory applications."
        },
        {
          code: "STS-UY 1004",
          name: "Introduction to Science and Technology",
          grade: "A",
          credits: 4,
          description: "Explores how scientific knowledge and technological innovations emerge and interact with cultural, ethical, and political forces—drawing on real-world cases and interdisciplinary analysis."
        },
        {
          code: "STS-UY 2144",
          name: "Ethics and Technology",
          grade: "A",
          credits: 4,
          description: "Investigates the ethical dimensions of technology, analyzing how technological advances influence—and are influenced by—moral values, social responsibilities, equity, privacy, and professional conduct in engineering and beyond."
        }
      ]
    },
    {
      category: "Electrical Engineering Core",
      courses: [
        {
          code: "ECE-UY 1002",
          name: "Introduction to Electrical and Computer Engineering",
          grade: "A",
          credits: 2,
          description: "Survey course introducing major topics in electrical and computer engineering—such as power systems, electronics, networking, microprocessors, embedded systems, communications, control, and signal processing."
        },
        {
          code: "ECE-UY 2004",
          name: "Fundamentals of Electric Circuits",
          grade: "In Progress",
          credits: 4,
          description: "In-depth analysis of DC and AC electrical circuits, exploring circuit laws, transient and steady-state responses, phasors, impedance, and circuit theorems through both lecture and hands-on labs."
        },
        {
          code: "ECE-UY 2204",
          name: "Digital Logic and State Machine Design",
          grade: "In Progress",
          credits: 4,
          description: "Design and implementation of digital systems, featuring number systems, Boolean algebra, combinational and sequential logic, circuit minimization, and state machine concepts."
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
          description: "Comprehensive study of differential calculus covering limits, continuity, derivatives, optimization, and the foundations of integration."
        },
        {
          code: "MTH 142",
          name: "Calculus II",
          grade: "A",
          credits: 4,
          description: "Advanced calculus focusing on integration techniques, sequences and series, convergence tests, Taylor expansions, polar and parametric forms."
        },
        {
          code: "MTH 241",
          name: "Calculus III",
          grade: "A",
          credits: 4,
          description: "Multivariable calculus with partial derivatives, Lagrange multipliers, double and triple integrals, vector calculus, and applications to physics and engineering."
        },
        {
          code: "MTH 306",
          name: "Differential Equations",
          grade: "A-",
          credits: 4,
          description: "Study of ordinary differential equations, solvable systems, Laplace transforms, phase plane analysis, with real-world problem modeling and solution methods."
        },
        {
          code: "PHY 107",
          name: "Physics I",
          grade: "B-",
          credits: 4,
          description: "Survey of classical mechanics, covering motion, forces, work and energy, rotation, oscillations, laboratory measurements, and basic experiment design."
        },
        {
          code: "PH-UY 2023 + 2131",
          name: "Physics II + Lab",
          grade: "In Progress",
          credits: 4,
          description: "Study of electricity, magnetism, and fluid dynamics, coupled with laboratory experiments covering electric and magnetic fields, fluid behavior, waves, optics, thermodynamics, and data analysis."
        },
        {
          code: "CHE 107 + 127",
          name: "General Chemistry for Engineers + Lab",
          grade: "A-",
          credits: 4,
          description: "Foundational general chemistry paired with laboratory skills: atomic structure, thermochemistry, solution chemistry, kinetics, equilibrium, hands-on experiments, and safety practices."
        }

      ]
    }
  ];

  const getGradeColor = (grade: string) => {
    if (grade === 'A') return 'text-green-400';
    if (grade === 'A-') return 'text-green-300';
    if (grade === 'B+') return 'text-yellow-400';
    if (grade === 'B' || grade === 'B-') return 'text-yellow-400';
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
