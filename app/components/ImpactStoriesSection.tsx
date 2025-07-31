'use client';

import { useEffect } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import Image from 'next/image';

export default function ImpactStoriesSection() {
  const { elementRef: titleRef, fadeInUp } = useGSAPScroll<HTMLHeadingElement>();
  const { elementRef: storyRef, staggerChildren } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    fadeInUp(0, 1);
    staggerChildren(0.2, 0.8);
  }, [fadeInUp, staggerChildren]);

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#4e8046]/3 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#4f9aa9]/3 rounded-full translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#002b4a]/3 rounded-full -translate-x-28 translate-y-28"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#4e8046]/3 rounded-full translate-x-20 translate-y-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            <span className="text-[#4e8046] font-dancing-script">Impact Stories</span>
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002b4a] mb-6">
            Beyond the Books: A Glimpse into Hope and Heartbreak
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our journey to Murambo Catholic Nursery and Primary School revealed both the urgent need and the unyielding spirit of communities we serve.
          </p>
        </div>

        {/* Main Story */}
        <div 
          ref={storyRef}
          className="max-w-6xl mx-auto space-y-12"
        >
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h4 className="text-2xl font-bold text-[#002b4a] mb-6">
              A Story of Urgent Need and Unyielding Spirit
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The air buzzed with anticipation. Our team at Huruma Global Support Initiative (HGSI) was on its way to Murambo Catholic Nursery and Primary School in Rukungiri District, carrying boxes filled with hope. Our "A Bright Future Begins with a Book" campaign was a pilot, a simple yet powerful idea: provide essential PLE question paper banks, pens, pencils, erasers, mathematical sets, and rulers to Primary Leaving Examination (PLE) candidates.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We imagined the smiles, the renewed determination. This was our first step, a small but vital lifeline for children in a community where education often remains an unreachable dream.
            </p>
          </div>

          {/* The Welcome */}
          <div className="bg-gradient-to-r from-[#4e8046] to-[#4f9aa9] rounded-2xl p-8 md:p-12 text-white">
            <h4 className="text-2xl font-bold mb-6">The Warm Welcome</h4>
            <p className="text-lg leading-relaxed mb-6">
              As we arrived, the warmth of the welcome was immediate. A well-arranged tent and a special sitting area; The Headmistress, teachers (11 in total), and pupils (175 in total) greeted us with genuine smiles, their gratitude palpable, the school choir sang, the nursery children rhyming, the LC1 chairperson, School Management Committee, the PTA and the parents to the P7 candidates all in anticipation of the hope we carried.
            </p>
            <p className="text-lg leading-relaxed">
              We gathered the 15 PLE candidates – our initial target of 21 had sadly dwindled, with 6 bright students already forced to drop out due to lack of school fees, registration costs, and basic scholastic materials. It was a sobering reminder of the very real barriers we sought to address.
            </p>
          </div>

          {/* The Reality Check */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h4 className="text-2xl font-bold text-[#002b4a] mb-6">The Reality Check</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              But then, the tour began. And our smiles turned to shock, then to a profound, aching sadness that settled deep in our hearts.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-xl font-semibold text-[#4e8046] mb-4">P1 Classroom</h5>
                <p className="text-gray-700 leading-relaxed">
                  This single, incomplete room, with its bare dirt floor and just four rough benches made from logs – benches that would surely hurt a child's back – served not only as a learning space but also as the staff room for 11 teachers. Tucked behind the door, a makeshift shelf overflowed with papers, topped incongruously with two deflated soccer balls. This was the Headmistress's "office," a low-level table and a hard wooden chair.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-[#4e8046] mb-4">P3 Classroom</h5>
                <p className="text-gray-700 leading-relaxed">
                  The P3 classroom doubled as the school kitchen. A huge pile of firewood dominated one corner. A few plastic plates and cups, clearly not enough for 175 children, lay on a tarpaulin on the dirt floor. Soot marks stained the walls around a makeshift cooking area, with discarded jerricans littering the side.
                </p>
              </div>
            </div>
          </div>

          {/* The Heartbreak */}
          <div className="bg-red-50 rounded-2xl p-8 md:p-12 border-l-4 border-red-500">
            <h4 className="text-2xl font-bold text-red-800 mb-6">The Heartbreak</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Then came the P4 classroom. Our hearts truly broke here. No windows, no doors, a dirt floor, no ceiling. The roof was only partially complete, offering a mere suggestion of shelter from sun or rain. Broken blackboards stood as silent witnesses to interrupted lessons. Five dilapidated, makeshift seats attached to desks, again made from raw logs, looked more like crude furniture from a local drinking spot than a place for children to learn.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              These were meant for 28 students but were clearly insufficient. How could a child study, how could they even write an exam, at such a desk? The indignity was crushing.
            </p>
          </div>

          {/* Systemic Failures */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h4 className="text-2xl font-bold text-[#002b4a] mb-6">Systemic Failures</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-xl font-semibold text-[#4e8046] mb-4">Basic Infrastructure</h5>
                <ul className="text-gray-700 space-y-2">
                  <li>• No latrine facilities at the school</li>
                  <li>• No running water within school grounds</li>
                  <li>• Water fetched from borehole 1km away</li>
                  <li>• Pupils walking barefoot with torn uniforms</li>
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-[#4e8046] mb-4">Learning Resources</h5>
                <ul className="text-gray-700 space-y-2">
                  <li>• No electricity, no printers, no electronic devices</li>
                  <li>• No atlas in the entire school</li>
                  <li>• No dictionary in the entire school</li>
                  <li>• Teachers unpaid for over 5 months</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Hope */}
          <div className="bg-gradient-to-r from-[#4e8046] to-[#4f9aa9] rounded-2xl p-8 md:p-12 text-white">
            <h4 className="text-2xl font-bold mb-6">The Hope That Remains</h4>
            <p className="text-lg leading-relaxed mb-6">
              Despite this overwhelming despair, a flicker of hope remained. The dedication of the PTA, the School Management Committee, and the parents, enduring immense hardships, was inspiring. The teachers' resilience, showing up daily despite being unpaid, was a testament to their profound commitment.
            </p>
            <p className="text-lg leading-relaxed">
              The "A Bright Future Begins with a Book" pilot, while a success for the 15 children who received materials, was a stark awakening. It showed us that while books are a start, the very foundation of education is crumbling for countless children in places like Murambo Catholic Nursery and Primary School.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-[#002b4a] rounded-2xl p-8 md:p-12 text-white text-center">
            <h4 className="text-2xl font-bold mb-6">Join Us in This Urgent Mission</h4>
            <p className="text-lg leading-relaxed mb-8">
              If a simple pencil and a past paper could bring such joy and a glimmer of hope, imagine the transformative power of a safe classroom, clean water, dignified sanitation, and supported teachers. We invite you to join us in this urgent and vital mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#4e8046] hover:bg-[#5bc54b] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Donate Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#002b4a] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 