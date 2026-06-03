import HeroCarousels from './HeroCarousels';
import HeroStats from './HeroStats';
import HeroBody from './Herobody';
import RelatedVideos from './RelatedVideos';

const Hero = () => {

  return (

    <div className="w-full bg-gray-50 py-8">

      {/* Your Section */}

      <HeroBody />

      {/* Related Videos */}

      <RelatedVideos />

      {/* Existing Team Sections */}

      <HeroCarousels />

      <HeroStats />

    </div>

  );
};

export default Hero;