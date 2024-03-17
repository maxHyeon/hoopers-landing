import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    // title="Your title here"
    // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <VerticalFeatureRow
      title="Convenient basketball club management"
      description="Just enjoy basketball! We provide information management for club members, game information management, and management for attendance."
      image="/assets/images/play-basketball.png"
      imageAlt="playbasketball"
    />
  </Section>
);

export { VerticalFeatures };
