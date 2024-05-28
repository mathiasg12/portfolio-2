import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../../pages/notFound';
import { LandingPage } from '../../pages/landingPage';

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/contact"></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}
