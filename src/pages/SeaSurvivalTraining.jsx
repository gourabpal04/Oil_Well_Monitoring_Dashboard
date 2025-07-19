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
  max-width: 900px;
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

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  color: #b91c1c;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h3`
  color: #1f2937;
  font-size: 1.15rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

const Figure = styled.div`
  background: #f3f4f6;
  border-radius: 8px;
  margin: 1.5rem 0;
  padding: 1.5rem;
  text-align: center;
  color: #6b7280;
  font-size: 1rem;
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

const SeaSurvivalTraining = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return (
    <Container>
      <Hero>
        <img src="/images/Sea_Survival_Training.jpg" alt="Sea Survival Training Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>Sea Survival Training</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <Section>
          <SectionTitle>Why is Sea Survival Training critical?</SectionTitle>
          <p>ONGC has over 10,000 people working offshore. On any given day, in Mumbai alone, as many as 450 people are flown in ONGC helicopters across the sea in over 35 sorties between Mumbai and its offshore rigs.</p>
          <p>Helicopter crashes at sea are an ever present danger which is why ONGC has created the latest world-class facilities for safety training to survive such an event. Training that hopefully will never have to be really put to test.</p>
        </Section>
        <Section>
          <SectionTitle>ONGC’s Sea Survival Centre: A National, and indeed, a Global asset</SectionTitle>
          <video
            width="100%"
            height="400"
            controls
            style={{ borderRadius: '8px', margin: '1.5rem 0' }}
          >
            <source src="/documents/77751/38658701/ONGC-IPSHEM-Marketing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>ONGC’s Sea Survival Centre is India’s deepest training facility that provides a simulated training experience to help personnel exit successfully from a helicopter cabin in the event of a crash. It is located at the sprawling ONGC Goa campus of IPSHEM (Institute of Petroleum Safety, Health and Environment Management) an integrated advanced safety training institute for the Oil & Gas sector.</p>
          <img 
            src="/images/Sea_Survival_1.jpg" 
            alt="Vision and Mission" 
            style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
          />
          <p>This facility has the deepest pool in the country and is equipped to simulate realistic scenarios like mist, waves, darkness and rain. Eight different types of waves up to two metres in height can be created, with four big wave chambers built into the pool.</p>
          <img 
            src="/images/Sea_Survival_2.jpg" 
            alt="Vision and Mission" 
            style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
          />
          <p>A world-class faculty is available at the ONGC’s Sea Survival Centre. Training starts with class room sessions where the entire process is explained repeatedly. This is then followed by the practical in-water sessions with one trainer for every individual being trained.</p>
          <img 
            src="/images/Sea_Survival_3.jpg" 
            alt="Vision and Mission" 
            style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', cursor: 'pointer' }}
          />
          <p>The facility also has a full simulation of a helicopter cabin. Individuals are strapped in first. An overhead crane picks up the helicopter cabin and drops it into the pool simulating a real-life situation. The cabin capsizes, turns on its side. Water flows in immediately, giving little to time to think. Individuals are trained to overcome the shock, fight the disorientation that usually follows and maintain their composure. The training is repeated a few times till the individuals knows what to do - disengage from their harness and escape to the surface within minutes of the crash.</p>
        </Section>
      </MainContainer>
      <Footer>
        <p>© 2025 ONGC. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default SeaSurvivalTraining; 