import { AboutMeSection } from '../../components/AboutMeSection';
import { IntroMessage } from '../../components/IntroSection';
/**
 * component that returns the jsx for the landing page
 */
export function LandingPage() {
  return (
    <main>
      <IntroMessage></IntroMessage>
      <AboutMeSection></AboutMeSection>
    </main>
  );
}
