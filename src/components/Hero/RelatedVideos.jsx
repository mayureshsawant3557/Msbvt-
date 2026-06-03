import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, } from 'react-icons/fa';

const videos = [
  {
    id: 1,
    title: 'मंडळाच्या कार्याबाबत संक्षिप्त माहिती',
    thumbnail: 'https://img.youtube.com/vi/AfE-ORVn3PU/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=AfE-ORVn3PU&t=7s',
  },

  {
    id: 2,
    title: 'मंडळ कार्यालय',
    thumbnail: 'https://img.youtube.com/vi/XCGl8r46NhQ/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=XCGl8r46NhQ',
  },

  {
    id: 3,
    title: 'Candidate Registration',
    thumbnail: '/images/candidate.png',
    url: 'https://vimeo.com/1066872978/c186108f62?fl=pl&fe=vl',
  },

  {
    id: 4,
    title: 'Demo for Online Exam',
    thumbnail: 'https://img.youtube.com/vi/5Chk9L6ZeQE/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=5Chk9L6ZeQE&t=1s',
  },

  {
    id: 5,
    title: 'Apply for MSBSVET Courses',
    thumbnail: 'https://img.youtube.com/vi/BWkOfr9g-2M/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=BWkOfr9g-2M&t=1s',
  },
];

function RelatedVideos() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
      return () => ref.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.6 : scrollLeft + clientWidth * 0.6;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-[1536px] mx-auto my-6 px-4">
      <div className="border border-gray-200 rounded-md overflow-hidden bg-white">
        {/* Header */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
          <h2 className="text-lg font-semibold text-[#005ea2]">Related Videos</h2>
        </div>

        {/* Videos Container */}
        <div className="relative group px-12 py-6">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition-colors shadow-sm"
            aria-label="Scroll left"
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Scrollable Video List */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                className="flex-none group/card cursor-pointer"
                style={{ width: 'calc(20% - 16px)', minWidth: '180px' }}
              >
                {/* Thumbnail with play button */}
                <div className="relative rounded-lg overflow-hidden shadow-md aspect-video bg-gray-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />

                </div>
                {/* Video Title */}
                <p className="text-center text-xs text-gray-700 mt-2 leading-snug font-medium line-clamp-2">
                  {video.title}
                </p>
              </a>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition-colors shadow-sm"
            aria-label="Scroll right"
          >
            <FaChevronRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}

export default RelatedVideos;
