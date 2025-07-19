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
    object-position: bottom;
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

  h3, li > strong {
    color: #dc2626; /* Red color for headings */
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
  
  p, li {
    line-height: 1.7; /* Increased line spacing */
    color: #374151;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    list-style-position: outside;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.75rem;
  }
  
  ul ul {
    margin-top: 0.75rem;
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

const VisionMission = () => {
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
    // Already on this page
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
        <img src="/images/vision_and_mission_header.jpg" alt="Vision and Mission Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleHomeClick}>Home</a> › <a href="#" onClick={handleAboutUsClick}>About Us</a> › <span>Vision And Mission</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <TitleSection>
          <h1>Vision And Mission</h1>
        </TitleSection>
        <img 
          src="/images/vision_and_mission.jpg" 
          alt="Vision and Mission" 
          style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
        />
        <GlanceSection>
          <LeftContent>
            <h3><strong>Vision</strong></h3>
            <p>  To be a global leader in integrated energy business through sustainable growth, knowledge excellence and exemplary governance practices.</p>
            <ul style={{ marginBottom: '1.5rem' }}>
              <li><strong>Mission World Class</strong>
                <ul>
                  <li>Dedicated to excellence by leveraging competitive advantages in R&D and technology with involved people</li>
                  <li>Imbibe high standards of business ethics and organizational values</li>
                  <li>Abiding commitment to safety, health and environment to enrich quality of community life</li>
                  <li>Foster a culture of trust, openness and mutual concern to make working a stimulating and challenging experience for our people</li>
                  <li>Strive for customer delight through quality products and services</li>
                </ul>
              </li>
              <li><strong>Integrated In Energy Business</strong>
                <ul>
                  <li>Focus on domestic and international oil and gas exploration and production business opportunities</li>
                  <li>Provide value linkages in other sectors of energy business</li>
                  <li>Create growth opportunities and maximize shareholder value</li>
                </ul>
              </li>
              <li><strong>Dominant Indian Leadership</strong>
                <ul>
                  <li>Retain dominant position in Indian petroleum sector and enhance India’s energy availability.</li>
                </ul>
              </li>
              <li><strong>Carbon Neutrality</strong>
                <ul>
                  <li>Strive to reduce CO2 emissions across its activity chain with the objective of achieving carbon neutrality.</li>
                </ul>
              </li>
            </ul>
          </LeftContent>
          <Sidebar>
            <ul className="sidebar-links">
              <li><a href="#" onClick={handleAboutUsClick}>ONGC At A Glance</a></li>
              <li><a href="#" onClick={handleGroupCompaniesClick}>ONGC Group Of Companies</a></li>
              <li><a href="#" className="active" onClick={handleVisionMissionClick}>Vision And Mission</a></li>
              <li><a href="#" onClick={handleGrowthStoryClick}>Our Growth Story</a></li>
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

export default VisionMission; 