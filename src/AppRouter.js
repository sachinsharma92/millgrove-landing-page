import ScrollToTop from 'components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/homepage';
import { LoginProcess } from './pages/loginProcess';

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<LoginProcess />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default AppRouter;
