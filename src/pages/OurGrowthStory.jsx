import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  font-family: sans-serif;
  background: white;
`;

const Hero = styled.header`
  width: 100%;
  height: 300px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Breadcrumb = styled.nav`
  padding: 1rem 2rem;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.875rem;
  a {
    color: #dc2626;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    color: #6b7280;
  }
`;

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const TitleSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;
  h1 {
    color: #1f2937;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
  }
`;

const GlanceSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LeftContent = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  line-height: 1.7;
  color: #374151;

  p {
    margin-bottom: 1.5rem;
  }

  h4 {
    color: #1f2937;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e5e7eb;
  }

  ul {
    list-style-position: outside;
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }

  li {
    margin-bottom: 0.75rem;
  }
`;

const Sidebar = styled.aside`
  .sidebar-links {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-bottom: 0.5rem;
      a {
        display: block;
        padding: 0.75rem 1rem;
        color: #dc2626;
        text-decoration: none;
        border-left: 3px solid transparent;
        transition: all 0.2s ease;
        &:hover {
          background: #f3f4f6;
          color: #b91c1c;
          border-left-color: #dc2626;
        }
      }
      .active {
        background: #f3f4f6;
        color: #b91c1c;
        border-left-color: #dc2626;
        pointer-events: none;
        cursor: default;
      }
    }
  }
`;

const Footer = styled.footer`
  background: #1f2937;
  color: white;
  text-align: center;
  padding: 1.5rem;
  margin-top: 3rem;
  p {
    margin: 0;
    font-size: 0.875rem;
  }
`;

const GoHomeButton = styled.button`
  background: #dc2626;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #b91c1c;
  }
`;

const OurGrowthStory = () => {
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
  };
  const handleAboutUsClick = (e) => {
    e.preventDefault();
    navigate('/about');
  };
  const handleGroupCompaniesClick = (e) => {
    e.preventDefault();
    navigate('/group-of-companies');
  };
  const handleVisionMissionClick = (e) => {
    e.preventDefault();
    navigate('/vision-mission');
  };
  const handleGrowthStoryClick = (e) => {
    e.preventDefault();
    // Already on this page
  };
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Hero>
        <img src="/images/our_growth_story.jpg" alt="Our Growth Story Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleHomeClick}>Home</a> › <a href="#" onClick={handleAboutUsClick}>About Us</a> › <span>Our Growth Story</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <TitleSection>
          <h1>Our Growth Story</h1>
        </TitleSection>
        <GlanceSection>
          <LeftContent>
            <p>ONGC was set up under the visionary leadership of Pandit Jawahar Lal Nehru. Pandit Nehru reposed faith in Shri Keshav Dev Malviya who laid the foundation of ONGC in the form of Oil and Gas division, under Geological Survey of India, in 1955. A few months later, it was converted into an Oil and Natural Gas Directorate. The Directorate was converted into Commission and christened Oil & Natural Gas Commission on 14th August 1956.</p>
            <p>"Not only had India..set up her own machinery for oil exploration and exploitation... an efficient oil commission had been built where a large number of bright young men and women had been trained and they were doing good work" said Pandit JawaharLal Nehru, India's first Prime Minister to Lord Mountbatten, on ONGC in 1959.</p>
            <p>In 1994, Oil and Natural Gas Commission was converted in to a Corporation, and in 1997 it was recognized as one of the Navratnas by the Government of India. Subsequently, it has been conferred with Maharatna status in the year 2010.</p>
            <p>In its 60 years of illustrious journey, ONGC has crossed many a milestone to realize the energy aspirations of India. The journey of ONGC, over these years, has been a tale of conviction, courage and commitment. ONGCs’ superlative efforts have resulted in converting earlier frontier areas into new hydrocarbon provinces. From a modest beginning, ONGC has grown to be one of the largest E&P companies in the world in terms of reserves and production.</p>
            
            <h4>The Company’s Evolution can be summarized as under:</h4>
            <ul>
              <li>1956 – Inception</li>
              <li>1958 – First Oil in Cambay</li>
              <li>1960 – Oil gas discovery in Gujarat</li>
              <li>1963 – Oil in Assam</li>
              <li>1965 – Concept of ONGC Videsh Operations</li>
              <li>1970 – First Offshore well</li>
              <li>1974 – Mumbai High discovered</li>
              <li>1976 – Bassein Gas field of Mumbai High</li>
              <li>1984 – GAIL formed out of ONGC</li>
              <li>1993 – ONGC a limited company</li>
              <li>1993 – Govt of India divest 2% share</li>
              <li>1994 – 2% share to employees</li>
              <li>1999 – Equity swap ONGC, IOC, GAIL</li>
              <li>2003 – Acquired Mangalore Refineries Petrochemicals Ltd from Birla Group</li>
              <li>2003 – Ist equity Oil & gas from Sudan / Vietnam</li>
              <li>2004 – Govt of India divests 10%</li>
              <li>2006 – Diversification – ONGC Petro additives Ltd and ONGC Mangalore Petro Ltd</li>
              <li>2007 – ONGC Energy Center formed</li>
              <li>2010 – Coal Bed Methane Production</li>
              <li>2013 – Oil at Kazakhstan/Mozambique</li>
              <li>2014 – Top Energy Company of India; 5th in Asia, 21st globally: Platts</li>
              <li>2015 – ONGC Energy Center receives US Patent</li>
              <li>2016 – Forbes Global: ONGC 3rd largest in India</li>
              <li>2018 – 51.11% stake in Hindustan Petroleum Corporation Limited</li>
              <li>2019 – Invests Rs 83,000 crore in 25 projects; oil & gas gain over 180 MT</li>
              <li>2019 – Bengal Basin discovered</li>
              <li>2020 – ONGC bags 7 Blocks in Bid Round IV of OALP</li>
              <li>2020 – Bengal Basin dedicated to nation</li>
              <li>2022 – Vindhyan Basin discovered</li>
            </ul>

            <h4>With more than 60 years of Exploration ONGC had discovered 8 of the 9 Producing basins of India. These Oil Producing Basins are:</h4>
            <ul>
              <li>1958 – Cambay, Gujarat</li>
              <li>1963 – Assam</li>
              <li>1967 – Rajasthan</li>
              <li>1974 – Mumbai Offshore</li>
              <li>1980 – Krishna Godavari Basin</li>
              <li>1985 – Cauvery Basin</li>
              <li>2019 – Bengal Basin</li>
              <li>2022 – Vindhyan Basin</li>
            </ul>
            
            <p>ONGC as an integrated Oil & Gas Corporate has developed in-house capability in all aspects of exploration and production business i.e., Acquisition, Processing & Interpretation (API) of Seismic data, drilling, work-over and well stimulation operations, engineering & construction, production, processing, refining, transportation, marketing, applied R&D and training, etc.</p>
          </LeftContent>
          <Sidebar>
            <ul className="sidebar-links">
              <li><a href="#" onClick={handleAboutUsClick}>ONGC At A Glance</a></li>
              <li><a href="#" onClick={handleGroupCompaniesClick}>ONGC Group Of Companies</a></li>
              <li><a href="#" onClick={handleVisionMissionClick}>Vision And Mission</a></li>
              <li><a href="#" className="active" onClick={handleGrowthStoryClick}>Our Growth Story</a></li>
            </ul>
          </Sidebar>
        </GlanceSection>
      </MainContainer>
      <Footer>
        <p>© 2025 ONGC. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default OurGrowthStory; 