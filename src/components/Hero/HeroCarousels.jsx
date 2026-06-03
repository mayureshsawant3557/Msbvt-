import React, { useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SectionData } from './HeroData';

export const CarouselSection = ({ title, children, titleColor = "text-[#005ea2]", showSeeMore = false }) => {
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

export const SuccessStoryCard = ({ item }) => (
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

export const EducationCard = ({ item }) => (
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

export const OpportunityCard = ({ item }) => (
  <div className="flex-none snap-start bg-white border border-gray-200 rounded-md p-4 flex items-center gap-4 hover:shadow-md transition-shadow" style={{ width: 'calc(33.333% - 10.66px)' }}>
    <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center p-1">
      <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain" />
    </div>
    <div className="flex-1 min-w-0 text-center">
      <h3 className="text-sm font-semibold text-gray-800 leading-snug">{item.title}</h3>
    </div>
  </div>
);

const HeroCarousels = () => {
  return (
    <>
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
    </>
  );
};

export default HeroCarousels;
