import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import DataEntry from './pages/DataEntry';
import WellMapPage from './pages/WellMapPage';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import PrivateRoute from './components/PrivateRoute';
import GroupOfCompanies from './pages/GroupOfCompanies';
import VisionMission from './pages/VisionMission';
import OurGrowthStory from './pages/OurGrowthStory';
import NetZero from './pages/NetZero';
import CarbonManagement from './pages/CarbonManagement';
import OilSplitManagement from './pages/OilSplitManagement';
import CleanDevelopmentMechanism from './pages/CleanDevelopmentMechanism';
import Environment from './pages/Environment';
import CSRVisionMission from './pages/CSRVisionMission';
import CSRSignatureInitiatives from './pages/CSRSignatureInitiatives';
import MediaPublication from './pages/MediaPublication';
import MediaGallery from './pages/MediaGallery';
import MediaImageGallery from './pages/MediaImageGallery';
import MediaNews from './pages/MediaNews';
import SeaSurvivalTraining from './pages/SeaSurvivalTraining';
import Technology from './pages/Technology';
import AnnualReports from './pages/AnnualReports';
import SustainabilityReports from './pages/SustainabilityReports';
import HumanRightsPolicy from './pages/HumanRightsPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Disclaimer from './pages/Disclaimer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<AboutUs />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/data-entry" 
          element={
            <PrivateRoute>
              <DataEntry />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/well-map" 
          element={
            <PrivateRoute>
              <WellMapPage />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/group-of-companies" 
          element={<GroupOfCompanies />} 
        />
        <Route 
          path="/vision-mission" 
          element={<VisionMission />} 
        />
        <Route 
          path="/our-growth-story" 
          element={<OurGrowthStory />} 
        />
        <Route 
          path="/net-zero" 
          element={<NetZero />} 
        />
        <Route 
          path="/carbon-management" 
          element={<CarbonManagement />} 
        />
        <Route 
          path="/oil-split-management" 
          element={<OilSplitManagement />} 
        />
        <Route 
          path="/clean-development-mechanism" 
          element={<CleanDevelopmentMechanism />} 
        />
        <Route 
          path="/environment" 
          element={<Environment />} 
        />
        <Route 
          path="/csr-vision-mission" 
          element={<CSRVisionMission />} 
        />
        <Route 
          path="/csr-signature-initiatives" 
          element={<CSRSignatureInitiatives />} 
        />
        <Route 
          path="/media/publication" 
          element={<MediaPublication />} 
        />
        <Route 
          path="/media/gallery" 
          element={<MediaGallery />} 
        />
        <Route 
          path="/media/gallery/images" 
          element={<MediaImageGallery />} 
        />
        <Route 
          path="/media/news" 
          element={<MediaNews />} 
        />
        <Route 
          path="/sea-survival-training" 
          element={<SeaSurvivalTraining />} 
        />
        <Route 
          path="/technology" 
          element={<Technology />} 
        />
        <Route 
          path="/annual-reports" 
          element={<AnnualReports />} 
        />
        <Route 
          path="/sustainability-reports" 
          element={<SustainabilityReports />} 
        />
        <Route 
          path="/human-rights-policy" 
          element={<HumanRightsPolicy />} 
        />
        <Route 
          path="/privacy-policy" 
          element={<PrivacyPolicy />} 
        />
        <Route 
          path="/terms-of-use" 
          element={<TermsOfUse />} 
        />
        <Route 
          path="/disclaimer" 
          element={<Disclaimer />} 
        />
        {/* Add /media/gallery/images and /media/gallery/videos as placeholders if needed */}
      </Routes>
    </Router>
  );
}

export default App; 