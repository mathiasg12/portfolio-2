import { AboutMeSection } from '../../components/AboutMeSection';
import { IntroMessage } from '../../components/IntroSection';
import { RecentProjects } from '../../components/RecentProjectSection';
/**
 * component that returns the jsx for the landing page
 */
export function LandingPage() {
  return (
    <main>
      <IntroMessage></IntroMessage>
      <AboutMeSection></AboutMeSection>
      <RecentProjects></RecentProjects>
    </main>
  );
}
