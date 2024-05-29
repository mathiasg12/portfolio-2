import { AllRoutes } from '../Routes';
import { Header } from '../Header/Header';
import { Footer } from '../Footer';
/**
 * component that returns the jsx for the Layout component, this includes a header component, a routes component and a footer component
 */
export function Layout() {
  return (
    <div>
      <Header></Header>
      <AllRoutes></AllRoutes>
      <Footer></Footer>
    </div>
  );
}
