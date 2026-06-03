import React, { useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaLandmark, FaChartPie, FaBook, FaUsers } from 'react-icons/fa';

const SectionData = {
  successStories: [
    {
      id: 1,
      image: 'https://msbsvet.blob.core.windows.net/msbsvet/msbsvetlive/candidate/202212c100084/photo_ec724d4420314334b3bf81b3e7504408.jpg', // Replace with actual image
      name: 'RADHIKA BAPU DIGHE',
      year: '1 2016',
      description: 'Selected as TEST at TEST 3 in',
    },
    {
      id: 2,
      image: 'https://msbsvet.blob.core.windows.net/dvettesting/dvettesting/successstories/msb120515/photo_d9b37f1a3df9481b94ba41ade7892ac4.jpg',
      name: 'DEVENDRA SURESH BHARAMBE',
      year: '0 2023',
      description: 'Selected as PROJECT LEAD at TALISMA PVT LTD in',
    },
    {
      id: 3,
      image: 'https://msbsvet.edu.in/Images/blank_profile.png',
      name: 'RADHIKA BAPU DIGHE',
      year: '1 2024',
      description: 'Selected as ENGINEER at TALISMA in',
    },
    {
      id: 4,
      image: 'https://msbsvet.blob.core.windows.net/msbsvet/msbsvetlive/candidate/202212c115412/photo_a8f851b4467a43d185cdccfd0688ca76.jpg',
      name: 'Kajal Balu Mahale',
      year: '2 2024',
      description: 'Selected as DEVELOPER at TECH CORP',
    }
  ],
  higherEducation: [
    {
      id: 1,
      image: 'https://staging.msbsvet.edu.in/Images/RatanTataMaharashtraStateSkillUniversity.jpg',
      title: 'Ratan Tata Maharashtra State Skill University',
      link: null,
    },
    {
      id: 2,
      image: 'https://staging.msbsvet.edu.in/Images/msbte.jpg',
      title: 'Engineering Diploma',
      link: null,
    },
    {
      id: 3,
      image: 'https://staging.msbsvet.edu.in/Images/TISS.jpg',
      title: 'Bachelor of Vocation (B.Voc.)',
      link: { text: 'Circular for Admission', url: '#' },
    },
    {
      id: 4,
      image: 'https://staging.msbsvet.edu.in/Images/dvet.jpg',
      title: 'Industrial Training Institute (ITI)',
      link: null,
    }
  ],
  opportunities: [
    {
      id: 1,
      image: 'https://staging.msbsvet.edu.in/Images/NAPS.png',
      title: 'National Apprenticeship Training Scheme',
    },
    {
      id: 2,
      image: 'https://staging.msbsvet.edu.in/Images/dvet.jpg',
      title: 'Maharashtra Apprenticeship Promotion Scheme (MAPS)',
    },
    {
      id: 3,
      image: 'https://staging.msbsvet.edu.in/Images/CSDEE.jpg',
      title: 'Commissionerate of Skill Development, Employment and Entrepreneurship',
    },
    {
      id: 4,
      image: 'https://staging.msbsvet.edu.in/Images/koshlya.jpg',
      title: 'CM Internship Program',
    }
  ],
  entrepreneurshipOpportunities: [
    {
      id: 1,
      image: 'https://staging.msbsvet.edu.in/Images/udyog.jpg',
      title: 'Annasaheb Patil Arthik Magas Vikas Mahamandal',
    },
    {
      id: 2,
      image: 'https://staging.msbsvet.edu.in/Images/msobcfdc.jpg',
      title: 'Maharashtra State OBC Finance and Development Corporation',
    },
    {
      id: 3,
      image: 'https://staging.msbsvet.edu.in/Images/mpbcdc.jpg',
      title: 'Mahatma Phule Backward Class Development Corporation',
    }
  ],
  stats: [
    { id: 1, count: '2,880', label: 'Institutes', icon: FaLandmark },
    { id: 2, count: '39', label: 'Sectors', icon: FaChartPie },
    { id: 3, count: '2,121', label: 'Courses', icon: FaBook },
    { id: 4, count: '46,559', label: 'Candidates', icon: FaUsers },
  ]
};

const CarouselSection = ({ title, children, titleColor = "text-[#005ea2]", showSeeMore = false }) => {
  const scrollRef = useRef(null);
  const innerRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    let animationId;
    let scrollPos = container.scrollLeft;

    const step = () => {
      if (!isHovered.current) {
        scrollPos += 1; // Adjust speed here (1px per frame for smoother scrolling)

        const innerWidth = inner.clientWidth;

        // If we scrolled past the first set of content, reset seamlessly
        if (scrollPos >= innerWidth) {
          scrollPos -= innerWidth;
        }

        container.scrollLeft = scrollPos;
      } else {
        // Keep scrollPos in sync if user manually scrolls
        scrollPos = container.scrollLeft;
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-[1536px] mx-auto my-6 px-4">
      {/* Title with styled border */}
      <div className="border border-gray-200 rounded-md overflow-hidden bg-white mb-4">
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
          <h2 className={`text-lg font-semibold ${titleColor}`}>{title}</h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative group px-12 py-4"
          onMouseEnter={() => isHovered.current = true}
          onMouseLeave={() => isHovered.current = false}
        >
          {/* Left Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition-colors shadow-sm"
            aria-label="Scroll left"
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Scrollable Area */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide px-2 py-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div ref={innerRef} className="flex gap-4 shrink-0 pr-4">
              {children}
            </div>
            {/* Duplicate children multiple times for infinite loop on large screens */}
            <div className="flex gap-4 shrink-0 pr-4">
              {children}
            </div>
            <div className="flex gap-4 shrink-0 pr-4">
              {children}
            </div>
            <div className="flex gap-4 shrink-0 pr-4">
              {children}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition-colors shadow-sm"
            aria-label="Scroll right"
          >
            <FaChevronRight size={16} />
          </button>
        </div>

        {/* See more link */}
        {showSeeMore && (
          <div className="px-4 pb-2 text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              See more...
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const SuccessStoryCard = ({ item }) => (
  <div className="flex-none snap-start bg-white border border-gray-200 rounded-md p-4 flex items-center gap-4 hover:shadow-md transition-shadow" style={{ width: 'calc(33.333% - 10.66px)' }}>
    <div className="w-24 h-24 flex-shrink-0 bg-white rounded overflow-hidden flex items-center justify-center p-1">
      <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
    </div>
    <div className="flex-1 min-w-0 text-center">
      <h3 className="text-xs font-semibold text-gray-800 uppercase">{item.name}</h3>
      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
        {item.description} {item.year}
      </p>
    </div>
  </div>
);

const EducationCard = ({ item }) => (
  <div className="flex-none snap-start bg-white border border-gray-200 rounded-md p-4 flex items-center gap-4 hover:shadow-md transition-shadow" style={{ width: 'calc(33.333% - 10.66px)' }}>
    <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center p-1">
      <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain" />
    </div>
    <div className="flex-1 min-w-0 text-center">
      <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
      {item.link && (
        <a href={item.link.url} className="text-xs text-blue-600 hover:underline block mt-1">
          {item.link.text}
        </a>
      )}
    </div>
  </div>
);

const OpportunityCard = ({ item }) => (
  <div className="flex-none snap-start bg-white border border-gray-200 rounded-md p-4 flex items-center gap-4 hover:shadow-md transition-shadow" style={{ width: 'calc(33.333% - 10.66px)' }}>
    <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center p-1">
      <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain" />
    </div>
    <div className="flex-1 min-w-0 text-center">
      <h3 className="text-sm font-semibold text-gray-800 leading-snug">{item.title}</h3>
    </div>
  </div>
);

const StatCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
      <Icon className="text-[#e87722] text-5xl mb-4" />
      <h3 className="text-4xl font-bold text-gray-800 mb-1">{item.count}</h3>
      <p className="text-gray-600 font-medium text-lg">{item.label}</p>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full bg-gray-50 py-8">
      <CarouselSection title="Success Stories of Board" showSeeMore={true}>
        {SectionData.successStories.map(story => (
          <SuccessStoryCard key={story.id} item={story} />
        ))}
      </CarouselSection>

      <CarouselSection title="Higher Education Opportunities" titleColor="text-[#007baf]">
        {SectionData.higherEducation.map(edu => (
          <EducationCard key={edu.id} item={edu} />
        ))}
      </CarouselSection>

      <CarouselSection title="Apprenticeship, Internship and Employment Opportunities" titleColor="text-[#007baf]">
        {SectionData.opportunities.map(opp => (
          <OpportunityCard key={opp.id} item={opp} />
        ))}
      </CarouselSection>

      <CarouselSection title="Entrepreneurship Opportunities" titleColor="text-[#007baf]">
        {SectionData.entrepreneurshipOpportunities.map(opp => (
          <OpportunityCard key={opp.id} item={opp} />
        ))}
      </CarouselSection>

      <div className="w-full max-w-[1536px] mx-auto my-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SectionData.stats.map(stat => (
            <StatCard key={stat.id} item={stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
