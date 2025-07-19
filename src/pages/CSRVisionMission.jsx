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
  h2, h3 {
    color: #dc2626;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
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

const CSRVisionMission = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return (
    <Container>
      <Hero>
        <img src="/images/CSR_VisionAndMission.jpg" alt="CSR Vision and Mission Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>CSR Vision and Mission</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <TitleSection>
          <h1>CSR Vision and Mission</h1>
        </TitleSection>
        <GlanceSection>
          <LeftContent>
            <h2 className='text-2xl'>Vision</h2>
            <p>To support responsible and sustainable initiatives, while taking care of the concern for People, Planet and Profit.</p>
            <h2 className='text-2xl'>Mission</h2>
            <ul>
              <li>Continually enhance the triple bottom line benchmarks of economic, environmental and social performance through committed involvement of the employees.</li>
              <li>To develop social wealth for the communities we engage with.</li>
              <li>Promote efficient usage of scarce resources, encourage green energy initiatives and develop innovative solutions to fulfil the vision by stepping beyond the mandatory provisions.</li>
            </ul>
            <h2 className='text-2xl'>Objective</h2>
            <ul>
              <li>To understand the stakeholder expectations through structured engagement process and communication strategy and leverage this understanding to develop and implement outcome based and impact oriented projects in the select areas.</li>
              <li>To adopt Environmentally Sustainable business practices in ONGC’s normal operations with a view to gradually reduce our carbon and water footprint, innovative management of waste, prudent energy management and biodiversity conservation.</li>
              <li>To envision, execute and manage long enduring projects with a wide geographical spread and larger social impact with focus on inclusive growth of marginalized and deprived sections of the society.</li>
              <li>To create adequately empowered organizational structure and a system of management oversight, review and control.</li>
              <li>To persuade our business partners for adopting similar practices for CSR and Sustainable development.</li>
            </ul>
          </LeftContent>
          <Sidebar>
            <ul className="sidebar-links">
              <li><a href="#" className="active">CSR Vision and Mission</a></li>
              <li><a href="#" onClick={() => navigate('/csr-signature-initiatives')}>Signature CSR Initiatives</a></li>
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

export default CSRVisionMission; 