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

const GroupOfCompanies = () => {
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
    // Already on this page
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
        <img src="/images/group_of_companies_header.avif" alt="ONGC Group of Companies Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleHomeClick}>Home</a> › <a href="#" onClick={handleAboutUsClick}>About Us</a> › <span>ONGC Group Of Companies</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <TitleSection>
          <h1>ONGC Group Of Companies</h1>
        </TitleSection>
        <GlanceSection>
          <LeftContent>
            <img src="/images/group_of_companies.jpg" alt="ONGC Group of Companies" />
          </LeftContent>
          <Sidebar>
            <ul className="sidebar-links">
              <li><a href="#" onClick={handleAboutUsClick}>ONGC At A Glance</a></li>
              <li><a href="#" className="active" onClick={handleGroupCompaniesClick}>ONGC Group Of Companies</a></li>
              <li><a href="#" onClick={handleVisionMissionClick}>Vision And Mission</a></li>
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

export default GroupOfCompanies; 