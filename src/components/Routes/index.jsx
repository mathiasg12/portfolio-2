import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../../pages/notFound';
import { LandingPage } from '../../pages/landingPage';
import { ContactPage } from '../../pages/contactPage';
/**
 * function that returns the routes used to navigate the site
 */
export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}
