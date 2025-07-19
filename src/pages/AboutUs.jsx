import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
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
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
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
    }
  }
`;

const ContentSection = styled.section`
  img {
    width: 100%;
    max-width: 800px;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    margin: 0 auto 2rem;
    display: block;
  }
  
  .description {
    max-width: 800px;
    margin: 0 auto;
    
    p {
      color: #374151;
      line-height: 1.7;
      margin-bottom: 1.5rem;
      font-size: 1rem;
      
      strong {
        color: #1f2937;
        font-weight: 600;
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

const AboutUs = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
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
    navigate('/our-growth-story');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Hero>
        <img src="/images/About_ONGC.jpg" alt="ONGC Workers" />
      </Hero>

      <Breadcrumb>
        <a href="#" onClick={handleHomeClick}>Home</a> › <a href="#">About Us</a> › <span>ONGC at a Glance</span>
      </Breadcrumb>

      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <TitleSection>
          <h1>ONGC at a Glance</h1>
        </TitleSection>

        <GlanceSection>
          <LeftContent>
            <img src="images/1185_profile250321.jpg" alt="Workers" />
            <div className="description">
                <p><strong>ONGC Represents India's Energy Security Through its Pioneering Efforts.</strong></p>
                <p>Maharatna ONGC is the largest crude oil and natural gas Company in India, contributing around 71 per cent to Indian domestic production. Crude oil is the raw material used by downstream companies like IOC, BPCL, HPCL and MRPL (Last two are subsidiaries of ONGC) to produce petroleum products like Petrol, Diesel, Kerosene, Naphtha, and Cooking Gas LPG.</p>
            </div>
          </LeftContent>
          <Sidebar>
            <ul className="sidebar-links">
              <li><a href="#">ONGC At A Glance</a></li>
              <li><a href="#" onClick={handleGroupCompaniesClick}>ONGC Group Of Companies</a></li>
              <li><a href="#" onClick={handleVisionMissionClick}>Vision And Mission</a></li>
              <li><a href="#" onClick={handleGrowthStoryClick}>Our Growth Story</a></li>
            </ul>
          </Sidebar>
        </GlanceSection>

        <ContentSection>
          <img src="images/1540_profilemain02.jpg" alt="Offshore Facility" />
          <div className="description">
            <p><strong>ONGC</strong> has a unique distinction of being a company with in-house service capabilities in all areas of exploration and production of oil & gas and related oil-field services. The company has been ranked as the Top Energy Company in India, as per the 'ET 500' listing of The Economic Times in 2023.</p>
            <p><strong>ONGC Videsh Limited</strong>, a Miniratna CPSE and wholly owned subsidiary of ONGC, is India's largest international petroleum company with 38 oil & gas assets in 15 countries. OVL has made major investments in Vietnam, Russia, Sudan, South Sudan, Brazil, Venezuela, Kazakhstan, Colombia, Mozambique, Israel, New Zealand, Bangladesh, UAE, Guyana and Myanmar.</p>
            <p><strong>ONGC subsidiary Mangalore Refinery</strong> and Petrochemicals Limited (MRPL) is a Schedule 'A' Miniratna CPSE and is the only PSU Refinery to be rated by CRISIL as 'AAA/Stable' for its 15 Million Metric Tonnes Per Annum (MMTPA) refinery at Mangalore, Karnataka.</p>
            <p><strong>ONGC subsidiary HPCL</strong> is a Maharatna CPSE and a Fortune Global 500 company. HPCL operates two major refineries producing a wide variety of petroleum fuels & specialties, one in Mumbai (West Coast) and the other in Visakhapatnam (East Coast).</p>
          </div>
        </ContentSection>
      </MainContainer>

      <Footer>
        <p>© 2025 ONGC. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default AboutUs; 