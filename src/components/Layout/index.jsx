import { AllRoutes } from '../Routes';
import { Header } from '../Header/Header';

export function Layout() {
  return (
    <div>
      <Header></Header>
      <AllRoutes></AllRoutes>
    </div>
  );
}
