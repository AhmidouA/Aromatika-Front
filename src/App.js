// import React
import React,{ Fragment} from 'react';

// Router react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component
import Login from './pages/Login';
import Main from './pages/Main';
import UserProfile from './pages/UserProfile';
import CategoryPage from './pages/CategoryPage';
import OilDetailsPage from './pages/OilDetailsPage';
import ParametersPage from './pages/userParameters';
import TermsOfUse from './pages/TermsOfUse';
import LibraryPage from './pages/LibraryPage';
import FavoritePage from './pages/FavoritePage';
import AboutPage from './pages/AboutPage';
import Error from './pages/ErrorPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

function App() {
  return (
      <div className='app'>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot-password' element={<ForgotPasswordPage />} />
            <Route path='/profil' element={<UserProfile />} />
            <Route path='/category/:id' element={<CategoryPage />} />
            <Route path='/oil/:id' element={<OilDetailsPage />} />
            <Route path='/parametres' element={<ParametersPage />} />
            <Route path='/utilisation' element={<TermsOfUse />} />
            <Route path='/aromatheque' element={<LibraryPage />} />
            <Route path='/favoris' element={<FavoritePage />} />
            <Route path='/a-propos' element={<AboutPage />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
