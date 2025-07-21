'use client';

import React from 'react';
import {
  HeroSection,
  MissionVisionSection,
  HistorySection,
  StrategicPillarsSection,
  LeadershipTeamSection,
  TeamCarouselSection,
  VoicesSection,
  ContactSection,
  Button,
  Card,
  Container,
  AnimatedCounter,
  IconCard,
  TestimonialCard,
  SectionHeader,
  ImageGallery
} from '../components';
import { 
  Heart, 
  Target, 
  Users, 
  BookOpen, 
  Lightbulb, 
  Shield,
  Award,
  Globe,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const ComponentsDemoPage = () => {
  // Sample data for components
  const mission = "To create a positive and lasting impact by providing men, women and children with the resources, education, and opportunities necessary to break the cycle of poverty and build brighter futures.";
  const vision = "We envision a world where the cycle of poverty is decisively broken, and brighter futures are a reality for all. We dream of a future where every individual has the genuine opportunity to thrive, empowered by education, dignity, and unwavering hope.";

  const story = {
    title: "From Murambo Village to Global Impact",
    paragraphs: [
      "It started, as so many profound things do, with a simple, almost forgotten place: Murambo village. Our family's roots there had seemed to wither after we lost loved ones. But a casual family chat, a reunion in a WhatsApp group, sparked a question that refused to be silenced: What about the family we didn't know?",
      "That question led to action, beginning with the local primary school. There were only seven P7 students, desperate for scholastic materials and revision guides. We dipped into our own pockets, a small gesture that yielded a huge return: the undeniable sparkle of hope in those children's eyes.",
      "We knew then, with absolute clarity, this couldn't be a one-off. It had to be bigger. It had to be sustainable. So, we registered a social enterprise, establishing the foundational structure to scale our initial impact responsibly."
    ]
  };

  const pillars = [
    {
      icon: Users,
      title: "Empowering Men & Women",
      description: "Fostering economic independence and resilience through peer-to-peer mentorship, vocational training, and seed funding.",
      features: ["Financial Literacy Training", "Business Mentorship", "Seed Funding Programs"],
      color: "bg-green-500",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Ensuring every child has access to quality education and nurturing learning environments.",
      features: ["PLE Empowerment Project", "\"1K Project\" Peer Funding", "Holistic Support Programs"],
      color: "bg-blue-500",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Globe,
      title: "Community Development",
      description: "Strengthening communities through sustainable infrastructure and essential services.",
      features: ["Clean Water Systems", "Sanitation Facilities", "Renewable Energy Solutions"],
      color: "bg-purple-500",
      bgColor: "from-purple-50 to-purple-100"
    }
  ];

  const teamMembers = [
    {
      name: "Nabukalu Diana",
      role: "Chairperson, Co-Founder & CEO",
      image: "/images/IMG_0314.webp",
      bio: "The Founding Catalyst behind HGSI. Her journey began with witnessing children and families brimming with unfulfilled potential.",
      quote: "Empathy must evolve into strategy. Dignity is not given it is restored. And that is the work of HGSI.",
      socials: { email: "diana@hurumaglobalsupportinitiative.org" }
    },
    {
      name: "Nabatanzi Edna",
      role: "Head Finance and Administration, Vice Chairperson & Co-founder",
      image: "/images/IMG_0335.webp",
      bio: "The Trust Builder. Raised on sacrifice and resilience, Edna ensures that HGSI's resources are managed with utmost integrity.",
      quote: "Raised on sacrifice and resilience, I know what it means to go without — and act like all is well. One life at a time, we rise together.",
      socials: { email: "edna@hurumaglobalsupportinitiative.org" }
    }
  ];

  const voices = [
    {
      name: "Lule Muganwa Edward",
      role: "Respected Elder and Mentor",
      quote: "It may be a small contribution, but to me, it is noteworthy. I thank the HGSI directors for giving me the chance to serve, even in this way.",
      emoji: "👴",
      bgColor: "bg-green-100"
    },
    {
      name: "Charles",
      role: "The Boda Boda Rider with a Mission",
      quote: "These books, these supplies—they're heavy. But I carry them like they're gold. Because they are.",
      emoji: "🛵",
      bgColor: "bg-blue-100"
    }
  ];

  const contactInfo = [
    { icon: Phone, title: "Phone", value: "+256 748 020 214" },
    { icon: Mail, title: "Email", value: "info@hurumaglobalsupportinitiative.org" },
    { icon: MapPin, title: "Address", value: "P.O. Box 180486, Kampala - Uganda" }
  ];

  const galleryImages = [
    { src: "/images/IMG_0296.webp", alt: "Community Impact", caption: "Community Impact" },
    { src: "/images/IMG_0307 (1).webp", alt: "Education Support", caption: "Education Support" },
    { src: "/images/image 5.webp", alt: "Youth Empowerment", caption: "Youth Empowerment" },
    { src: "/images/IMG_0404.webp", alt: "Community Development", caption: "Community Development" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section Demo */}
      <HeroSection
        title="Components Demo"
        subtitle="Showcasing all the reusable components for the Huruma website"
        backgroundImage="/images/IMG_0314.webp"
      />

      {/* UI Components Demo */}
      <section className="py-20 px-4">
        <Container>
          <SectionHeader
            title="UI Components"
            subtitle="Reusable components for consistent design across the application"
            variant="large"
          />

          {/* Buttons Demo */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" icon={ArrowRight}>Primary Button</Button>
              <Button variant="secondary" icon={Heart} iconPosition="left">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </div>

          {/* Cards Demo */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Cards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card variant="default" hover>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Default Card</h4>
                  <p className="text-gray-600">This is a default card with hover effects.</p>
                </div>
              </Card>
              <Card variant="gradient" hover>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Gradient Card</h4>
                  <p className="text-gray-600">This card has a gradient background.</p>
                </div>
              </Card>
              <Card variant="outlined" hover>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Outlined Card</h4>
                  <p className="text-gray-600">This card has a border outline.</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Icon Cards Demo */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Icon Cards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <IconCard
                icon={Heart}
                title="Compassion"
                description="Deep empathy for those facing poverty and educational challenges drives us."
                variant="default"
              />
              <IconCard
                icon={Shield}
                title="Integrity"
                description="We uphold the highest ethical standards in all we do."
                variant="gradient"
                iconColor="text-blue-600"
                bgColor="bg-blue-100"
              />
              <IconCard
                icon={Star}
                title="Service"
                description="Our dedication is to actively serve those in need."
                variant="outlined"
                iconColor="text-purple-600"
                bgColor="bg-purple-100"
              />
            </div>
          </div>

          {/* Animated Counter Demo */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Animated Counters</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <AnimatedCounter end={500} suffix="+" />
                <p className="text-gray-600 mt-2">Children Helped</p>
              </div>
              <div>
                <AnimatedCounter end={50} suffix="+" />
                <p className="text-gray-600 mt-2">Communities Served</p>
              </div>
              <div>
                <AnimatedCounter end={1000} prefix="$" />
                <p className="text-gray-600 mt-2">Funds Raised</p>
              </div>
            </div>
          </div>

          {/* Testimonial Cards Demo */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Testimonial Cards</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <TestimonialCard
                quote="Huruma inspired me by helping struggling entrepreneurs and supporting school children with fees and materials across different districts."
                author="Ssebuguzi Alex"
                role="Program Officer, Sustainable Livelihoods"
                image="/images/IMG_0372.webp"
                variant="default"
              />
              <TestimonialCard
                quote="We don't just measure outcomes. We measure what matters to the people we serve."
                author="Eric Okiria"
                role="Head, Impact & Learning"
                image="/images/IMG_0343 (1).webp"
                variant="featured"
              />
            </div>
          </div>

          {/* Image Gallery Demo */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Image Gallery</h3>
            <ImageGallery
              images={galleryImages}
              columns={4}
              gap="md"
              aspectRatio="square"
              hover={true}
            />
          </div>
        </Container>
      </section>

      {/* Section Components Demo */}
      <MissionVisionSection
        mission={mission}
        vision={vision}
      />

      <HistorySection
        title="Our Story"
        subtitle="The journey that brought us here"
        story={story}
        images={[
          { src: "/images/P7_STUDENTS.png", alt: "P7 Students" },
          { src: "/images/IMG_0314.webp", alt: "Community Impact" }
        ]}
        journeyCard={{
          title: "Our Journey",
          description: "From family roots in Murambo village to a commitment to fostering hope and opportunity wherever it's needed most."
        }}
      />

      <StrategicPillarsSection
        title="Our Strategic Pillars"
        subtitle="Driving holistic development through three interconnected pillars"
        pillars={pillars}
      />

      <LeadershipTeamSection
        title="Leadership Team"
        subtitle="Meet the visionary leaders driving change and creating impact across communities"
        teamMembers={teamMembers}
      />

      <TeamCarouselSection
        title="Our Extended Team"
        subtitle="Dedicated professionals working together to create lasting impact"
        teamMembers={teamMembers}
      />

      <VoicesSection
        title="Voices of Huruma"
        subtitle="Because this movement is built by many hands, hearts, and voices"
        voices={voices}
        images={galleryImages}
      />

      <ContactSection
        title="Get In Touch"
        subtitle="Ready to join us in making a difference? We'd love to hear from you."
        contactInfo={contactInfo}
        ctaText="Join Our Mission"
      />
    </div>
  );
};

export default ComponentsDemoPage; 