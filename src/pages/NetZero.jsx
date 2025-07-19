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
    object-position: center;
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

const Subtitle = styled.h2`
  text-align: center;
  color: #b91c1c;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const ApprovalBox = styled.div`
  background: #f3f4f6;
  border-left: 5px solid #dc2626;
  padding: 1.25rem 1.5rem;
  margin-bottom: 2rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #374151;
  box-shadow: 0 2px 8px rgba(220,38,38,0.04);
`;

const PDFButton = styled.a`
  display: inline-block;
  background: #dc2626;
  color: #fff;
  font-weight: bold;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 1.5rem;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(220,38,38,0.08);
  transition: background 0.2s;
  &:hover {
    background: #b91c1c;
    color: #fff;
  }
`;

const ContentSection = styled.section`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  line-height: 1.7;
  color: #374151;
  max-width: 800px;
  margin: 0 auto;
  a.pdf-link {
    color: #dc2626;
    font-weight: bold;
    text-decoration: underline;
    transition: color 0.2s, font-weight 0.2s;
    &:hover {
      color: #b91c1c;
      font-weight: 900;
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

const NetZero = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Hero>
        <img src="/images/Net_Zero.jpg" alt="Net Zero Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>Net Zero</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <TitleSection>
          <h1>ONGC Decarbonization Roadmap</h1>
        </TitleSection>
        <Subtitle>Towards Net Zero Operational Emissions by 2038</Subtitle>
        <ContentSection>
          <ApprovalBox>
            <strong>MCoD Approval:</strong><br/>
            In its 615<sup>th</sup> meeting held on June 26, 2024, in New Delhi, the MCoD granted approval for the release of ONGC’s strategy to achieve Net Zero operational emissions (Scope-1 and Scope-2) by 2038.
          </ApprovalBox>
          <a className="pdf-link" href="/images/NetZeroemission.pdf" target="_blank" rel="noopener noreferrer">
            ONGC Decarbonization Roadmap
          </a>
        </ContentSection>
      </MainContainer>
      <Footer>
        <p>© 2025 ONGC. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default NetZero; 