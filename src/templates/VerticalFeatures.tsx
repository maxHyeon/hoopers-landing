import { useRouter } from 'next/router';
import { Section } from '@/layout/Section';

const VerticalFeatures = () => {
  const router = useRouter();
return (
  <Section>
    <div className="mt-1 flex flex-wrap items-center">
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">
          Convenient basketball club management
        </h3>
        <div className="mt-6 text-xl leading-9">
          Just enjoy besketball! We provide information management for club members, game information management and management for attendance.
        </div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <img src={`${router.basePath}/assets/images/play-basketball.png`} alt="paly-basketball" />
      </div>
    </div>
  </Section>
)};

export { VerticalFeatures };
