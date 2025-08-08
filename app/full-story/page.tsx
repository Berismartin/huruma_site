'use client';

import { useEffect } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FullStoryPage() {
  const { elementRef: titleRef, fadeInUp } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: contentRef, staggerChildren } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    fadeInUp(0, 0.8);
    staggerChildren(0.1, 0.3);
  }, [fadeInUp, staggerChildren]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-[#4e8046] to-[#4f9aa9] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full"></div>
            <div className="absolute bottom-4 left-8 w-14 h-14 bg-white rounded-full"></div>
            <div className="absolute bottom-8 right-4 w-10 h-10 bg-white rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div ref={titleRef} className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Two Journeys, One Heartbreak
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Reflections from Murambo Catholic Nursery and Primary School
              </p>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div ref={contentRef} className="max-w-4xl mx-auto">
              
              {/* Eric's Reflection */}
              <div className="mb-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#4e8046] mb-6">
                  Eric's Reflection: A World Unveiled
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I'm Eric, 26, from Ngora district, but Kampala raised me. My childhood was in the city, with schools that, while not perfect, had walls, roofs, and proper desks. I thought I understood "poverty" and "marginalized communities" from reports, from news. But nothing, absolutely nothing, prepared me for Murambo Catholic Nursery and Primary School.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  When we arrived, the children's smiles as they received their books, their little faces lighting up with the promise of a future, it was pure, unadulterated joy. I felt a swell of pride, thinking, "Yes, this is why we do what we do."
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Then came the tour. And with every step, my heart felt like it was being squeezed tighter and tighter. The P1 classroom… I just stood there, staring. It wasn't just a classroom; it was their whole world – a classroom, a staff room for eleven teachers, the Headmistress's tiny office, and even a food store. A dirt floor. Log benches that looked like they'd splinter your spine. And the Headmistress, with papers spilling from a makeshift shelf, two soccer balls on top, trying to run a school from behind a door. My mind just couldn't reconcile it. "Is this… is this really a school?" I remember whispering to James, my voice barely audible. It felt like a scene from a forgotten era, not something happening today.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Moving to the P3 classroom, seeing the pile of firewood, the soot-stained walls, the few plastic plates on a tarpaulin on the ground – it was a kitchen. Their learning space was a kitchen. The children's woven basket bags, holding their few precious books, were so small, so humble. My own school bag was always bursting with textbooks, notebooks, a lunchbox. Here, it was a struggle for even the basics.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  And the P4 classroom… oh, the P4 classroom. No windows, no doors, no ceiling, just a partial roof. Broken blackboards. Five rickety log desks that looked like they belonged in a local bar, not a place where children were meant to learn, to dream. I felt tears welling up, hot and stinging. "How can they even sit here, let alone learn? How can they write an exam on this?" The injustice of it was a physical ache in my chest. I thought of my comfortable university lecture halls, the quiet libraries, the endless resources. These children, just as bright, just as deserving, had none of it.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The lack of latrines, the 1km trek for water, the barefoot children with tattered uniforms – it was a relentless assault on my senses, each detail chipping away at my composure. When I saw the misspelled "Magnet" on the blackboard, a simple word, it wasn't funny; it was heartbreaking. It was a cry for a dictionary, for basic tools, for the dignity of knowing. And the teachers, five months without pay, still showing up, still trying to teach… I just wanted to hug them, to tell them they were heroes. "They come here every day? Without pay? That's… that's incredible," I remember saying, my voice thick with emotion.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Being involved in this campaign, I thought it was about giving. But it was about receiving a brutal, beautiful lesson. It's a privilege I never truly understood, to have had a proper education, to have had a choice. This activity, this raw encounter, means everything to me now. It's not just a project; it's a moral imperative. It showed me that my comfortable upbringing, my city life, shielded me from a reality that is still very much alive for so many. The value it brought was a shattering of my ignorance, a deepening of my empathy that feels like a wound, but a necessary one.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I learned that problems are rarely simple. You deliver books, but the children are dropping out because they can't afford fees, because there's no toilet, because their teachers are starving. It's a tangled web of interconnected struggles. And the resilience… the sheer, unwavering resilience of those children and teachers. It's a power I've never seen. From this, I will carry a new lens. I will question more, look deeper, and never take for granted the basic dignities that enable learning and growth. My journey from a comfortable Kampala childhood to a university student now feels like a responsibility, a call to be a voice for those children, to fight for the foundations they deserve.
                </p>
              </div>

              {/* James's Reflection */}
              <div className="mb-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#4f9aa9] mb-6">
                  James's Reflection: Echoes of a Distant Past
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I'm James, 27, from Bushenyi. When I heard about Murambo, a part of me braced myself. Bushenyi has its pockets of deep poverty, and though I didn't grow up in those exact circumstances, I've glimpsed them in my much earlier childhood. I've seen the worn uniforms, the children walking miles barefoot. So, when we arrived, and the 15 PLE candidates greeted us with those eager smiles, I felt a familiar pang – a mix of hope for them and a quiet dread for what we might find.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Handing out the paper banks and scholastic materials, I saw their eyes, shining with that desperate hope for a chance. It was beautiful, truly. But as we walked through the school, it wasn't a shock in the same way it was for Eric. For me, it was a painful recognition, a chilling echo. "This is exactly what I remember from some of the village schools when I was a kid," I found myself saying, my voice low, almost to myself. "It's like nothing has changed."
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The P1 classroom, serving as everything from a learning space to a staff room and food store, with its dirt floor and crude log benches… it was a scene I'd seen before, in fleeting glimpses. The makeshift Headmistress's office behind the door, the overflowing papers – it spoke of ingenuity born of desperation. It hurt to see it, knowing that decades later, children are still enduring this.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The P3 classroom, a kitchen with its pile of firewood and inadequate plastic plates, was a familiar sight from my early memories of rural life. The soot marks, the jerricans, the children's woven basket bags – it was all too real. It's a constant battle for these communities, where every space must serve multiple purposes just to keep things going.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  And the P4 classroom, with no windows, no doors, a partial roof, and those broken, log-like desks… that's where the tears came. Not a sudden gush, but a slow, steady stream, a deep ache. I remembered the stories, the struggles. To think these children are still trying to learn, to write their exams, on those surfaces, exposed to the elements. "This is not how a child should learn," I murmured, shaking my head, a profound sadness washing over me. It felt like a wound from my own past, reopened.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The lack of latrines, the distant borehole, the barefoot children, the threadbare uniforms – these weren't just details; they were the fabric of a life I narrowly escaped. The science teacher's misspelled "Magnet" on the board, the absence of basic dictionaries and atlases – it's a symptom of a system that has forgotten its most vulnerable. And the teachers, five months without pay, still showing up… "How do they do it? How do they keep coming?" I asked, my voice cracking, knowing the immense sacrifice that entails. It's a dedication that breaks your heart and fills it with awe all at once.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Being involved in this campaign felt like a homecoming, in a way. It was a chance to give back to the kind of communities that shaped my broader understanding of Uganda, even if I didn't live their exact struggles. The activity itself, delivering those books, was a small act of kindness, but the revelation of the deeper needs was immense. It showed me that the fight is far from over.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  This experience means a profound connection to my roots, a recognition of the systemic issues that persist. It means that HGSI's work is not just charity; it's justice. The value it brought was a renewed sense of urgency, a confirmation that the "1K Project" and broader infrastructural support aren't just good ideas; they are absolutely essential, a direct response to the very real pain we witnessed. It's about building the foundations that were missing for me, and are still missing for them.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I learned that while progress is made, the deepest wounds of poverty and inequality heal slowly, if at all, without sustained, comprehensive intervention. The resilience of those children and teachers, enduring unimaginable conditions, is a testament to the human spirit's capacity to hope, even in despair. From this, I will carry a more grounded understanding of the challenges, a deeper commitment to long-term solutions, and a fierce determination to ensure that no child has to learn on a log, or walk a kilometer for water, or suffer the indignity of no latrine. My journey, from glimpsing these struggles as a child to now, as an adult, is a call to action, a lifelong commitment to being part of the change.
                </p>
              </div>

              {/* Photo Gallery */}
              <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                  A Visual Journey Through Murambo
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <Image
                      src="/images/image 5.webp"
                      alt="Eric having a chat with the pupils of Murambo Catholic Nursery and Primary School"
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover object-top rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600 italic">
                      Eric having a chat with the pupils of Murambo Catholic Nursery and Primary School
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <Image
                      src="/images/IMG_0335.webp"
                      alt="The P4 classroom with rickety log desks that looked like they belonged in a local bar"
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600 italic">
                      The P4 classroom with rickety log desks that looked like they belonged in a local bar
                    </p>
                  </div>
                  {/* <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <Image
                      src="/images/IMG_0319.webp"
                      alt="The P1 classroom that doubles as the headteacher's office, staffroom and a storage"
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600 italic">
                      The P1 classroom that doubles as the headteacher's office, staffroom and a storage
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <Image
                      src="/images/IMG_0319.webp"
                      alt="The P3 classrooms that is also a store for firewood"
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600 italic">
                      The P3 classrooms that is also a store for firewood
                    </p>
                  </div> */}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-[#4e8046] to-[#4f9aa9] rounded-2xl p-8 md:p-12 text-white text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Join Us in Making a Difference
                </h3>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  These stories show the urgent need for educational support in marginalized communities. 
                  Your contribution can help us provide more resources and build better learning environments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/donate" 
                    className="bg-white text-[#4e8046] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Donate Now
                  </Link>
                  <Link 
                    href="/our-work" 
                    className="border-2 border-white text-white hover:bg-white hover:text-[#4e8046] px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Learn More About Our Work
                  </Link>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Huruma Global Support Initiative
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                    <p className="text-gray-600">Address: P.O. Box 180486, Kampala - Uganda</p>
                    <p className="text-gray-600">Phone: +256748020214</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Donation Options</h4>
                    <p className="text-gray-600">Airtel pay code: 4392361</p>
                    <p className="text-gray-600">DFCU Bank: 01490016746558</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 