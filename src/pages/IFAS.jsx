import React from 'react';
import { Search, Menu, Play, CheckCircle, Star, ChevronRight, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from "../assets/images/logo.png";

export default function IFASLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
     
<header className="bg-white shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">

      {/* Logo */}
      <div className="flex items-center space-x-2 mb-4">
  <img 
    src={logo} 
    alt="IFAS Logo" 
    className="w-[210px] h-[40px] object-contain"
  />
</div>


      {/* Navigation */}
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Courses</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Blog</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Contact Us</a>
      </nav>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900">
          <Search className="w-5 h-5" />
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Login
        </button>
      </div>

    </div>
  </div>
</header>


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Achieve Success with <span className="text-yellow-300">India's No.1</span> Online Exam Institute
              </h1>
              <p className="text-lg mb-8 text-purple-100">
                Join thousands of successful students who have cracked their entrance exams with our expert-led online courses.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                  Explore Courses
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition">
                  Start Learning For Free
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-500 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white text-gray-900 rounded-2xl p-6 mb-4">
                  <h3 className="font-bold text-lg mb-2">Individual Course</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get a custom learning plan based on your skill level and goals
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Latest Test Series
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Daily Updates
                    </li>
                  </ul>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" 
                  alt="Student" 
                  className="rounded-2xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose IFAS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why Choose <span className="text-blue-600">IFAS </span> Online?
          </h2>
          <p className="text-center text-gray-600 mb-12">
            12,000+ unique online course list designs
          </p>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: '📚', title: 'Expert Instructor', desc: 'Learn from top educators with years of experience in entrance exam coaching.' },
              { icon: '📖', title: 'Study Material', desc: 'Access meticulously curated content that covers all aspects of your syllabus.' },
              { icon: '👥', title: 'Live Classes', desc: 'Participate in real-time classes where you can ask doubts and engage with peers' },
              { icon: '📄', title: 'Flexible Learning', desc: 'Study at your own pace with our recorded sessions and mobile-friendly platform.'},
              { icon: '🎯', title: 'Afforable pricing', desc: 'Get quality education at competitive prices with various subscription plans' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why <span className="text-yellow-300">learn</span> with our courses?
          </h2>
          <p className="text-center text-blue-100 mb-16">
            Join millions of learners and experience top-notch education with expert instructors and real-time learning.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-white/10 rounded-2xl mx-auto flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">100+</h3>
              <p className="text-xl font-semibold mb-2">Updated Courses</p>
              <p className="text-blue-100">Explore diverse subjects and enhance your knowledge</p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-white/10 rounded-2xl mx-auto flex items-center justify-center">
                  <span className="text-4xl">😊</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">10 M+</h3>
              <p className="text-xl font-semibold mb-2">Happy Learners</p>
              <p className="text-blue-100">Join millions learning with us</p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-white/10 rounded-2xl mx-auto flex items-center justify-center">
                  <span className="text-4xl">📺</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">807K+ Hrs</h3>
              <p className="text-xl font-semibold mb-2">Live & Learning</p>
              <p className="text-blue-100">Hours of quality content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Featured <span className="text-blue-600">Courses</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Explore Our Range of Courses Vital for Quality Learning and Exam Success
          </p>
          
          <div className="grid md:grid-cols-6 gap-4 mb-8">
            {[
              { name: 'CSIR NET', icon: '🔬' },
              { name: 'UGC NET', icon: '📖' },
              { name: 'CUET PG', icon: '✓' },
              { name: 'GAT B', icon: '📝' },
              { name: 'SET', icon: '📊' },
              { name: 'IIT JAM', icon: '🎯' }
            ].map((course, idx) => (
              <div key={idx} className="bg-blue-600 text-white rounded-2xl p-6 text-center hover:bg-blue-700 transition cursor-pointer">
                <div className="text-4xl mb-3">{course.icon}</div>
                <h3 className="font-bold text-lg mb-1">{course.name}</h3>
                <p className="text-sm text-blue-100">Programs</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              View All Courses
            </button>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" alt="Student 1" className="rounded-2xl" />
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop" alt="Student 2" className="rounded-2xl mt-8" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" alt="Student 3" className="rounded-2xl -mt-8" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" alt="Student 4" className="rounded-2xl" />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                <span className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg">Success</span>
                <span className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg flex items-center">
                  <Play className="w-4 h-4 mr-2" /> LIVE
                </span>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Platform <span className="text-blue-600">Features</span> That Empower Your Learning
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Live learning with Top IFAS Faculty</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Webinar Masterclasses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Personalized content</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">On-demand doubt solving</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-blue-600">Testimonials</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">What our student's say about us</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Ananya S.', role: 'CSIR NET Student', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
              { name: 'Ravi K.', role: 'UGC NET Student', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
              { name: 'Priya M.', role: 'CUET PG Student', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  IFAS has been instrumental in my exam preparation. The quality of content and teaching methodology is exceptional. I highly recommend it to anyone preparing for competitive exams.
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Latest <span className="text-blue-600">Blogs</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Lorem ve efficitur sit amet, consectetur elit
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'UGC NET Exam Pattern 2025: Exam Scheme and Marking Scheme and...',
                date: 'October 20, 2024',
                image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop',
                color: 'from-blue-500 to-cyan-400'
              },
              { 
                title: 'ICAR Application Form 2025: Application Fee, Apply Online (Out)',
                date: 'October 20, 2024',
                image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=250&fit=crop',
                color: 'from-green-400 to-blue-400'
              },
              { 
                title: 'UPSC Civil Service Notification: Application Form, Exam Dates, Eligibility, Pattern &...',
                date: 'October 20, 2024',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
                color: 'from-purple-600 to-blue-500'
              }
            ].map((blog, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer">
                <div className={`bg-gradient-to-br ${blog.color} h-48 relative`}>
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <h3 className="font-bold text-lg mb-4 line-clamp-2">{blog.title}</h3>
                  <button className="text-blue-600 font-semibold flex items-center hover:gap-2 transition-all">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to our newsletter</h2>
          <p className="text-gray-300 mb-8">
            Lorem Ve Efficitur Varius. Dapibus Vestibulum Sed Quis Turpis Aliquet, Dapibus Est
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-700 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
  <img 
    src={logo} 
    alt="IFAS Logo" 
    className="w-[210px] h-[40px] object-contain"
  />
</div>
              <p className="text-sm text-purple-200 mb-4">
                Let's grow up your education level up, We are here to help you keep focus when studying.

              </p>
              <div>
              <h3 className="font-bold text-lg mb-4">Download Our App</h3>
              <div className="space-y-3">
                <button className="w-full bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-800 transition">
                  <span className="text-2xl mr-3">📱</span>
                  <div className="text-left text-xs">
                    <div className="text-gray-400">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>
                <button className="w-full bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-800 transition">
                  <span className="text-2xl mr-3">▶️</span>
                  <div className="text-left text-xs">
                    <div className="text-gray-400">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-purple-200">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Courses</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contact us</h3>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li>Call: +91-9172266888</li>
                <li>Email: info@yopmail.com</li>
                <li>Address: ISH Infotech, Phase 1, Hinjewadi, Pune,
Maharashtra - 411057</li>
              </ul>
            </div>
            
            
          </div>
          
          <div className="border-t border-purple-700 pt-8 text-center text-sm text-purple-200">
            <p>Copyright 2025 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}