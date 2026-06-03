
import Minister from './Minister';
import Sidebar from './Sidebar';
import Notices from './Notices';
import Signin from './Signin';

const HeroBody = () => {

  return (

    <div className="w-full max-w-[1536px] mx-auto px-4">

      {/* Ministers Row */}
      <Minister />

      {/* Main Content Grid: Sidebar | Notices | Sign In */}
      <div className="grid grid-cols-1 md:grid-cols-[0.8fr_2fr_1fr] gap-4 mt-4">

        <Sidebar />

        <Notices />

        <Signin />

      </div>

    </div>

  );
};

export default HeroBody;