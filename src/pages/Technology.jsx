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

const Technology = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return (
    <Container>
      <Hero>
        <img src="/images/Net_Zero.jpg" alt="Technology Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>Technology</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <img 
          src="/images/Technology.jpg" 
          alt="Technology" 
          style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
        />
        <Section>
          <SectionTitle>Technology at ONGC</SectionTitle>
          <p>ONGC is one of the largest E&P Company in India with in-house service capabilities in all the activity areas of exploration and production of oil & gas and related oil-field services. The state-of-the-art technologies inducted and absorbed over the years such as depth domain processing, stratigraphic inversion, advanced volume based interpretation tools, stochastic lithofacies modeling using neural network, spectral decomposition, geo-statistical modeling, etc.</p>
          <p><strong>“Dedicated to excellence by leveraging competitive advantages in R&D and technology with involved people”</strong> – Mission of ONGC</p>
        </Section>
        <Section>
          <SectionTitle>Committee of ONGC Institutes</SectionTitle>
          <p>As India’s premier Maharatna, ONGC has pioneered in research and technology development in the country, setting up twelve world-class Institutes under the aegis of ‘Committee of ONGC Institutes’ or ‘COIN’. These twelve institutes have become the backbone of India’s hydrocarbon industry and support the entire spectrum of Oil and Gas production, which begins at the well bore and culminates at the consumer point.</p>
        </Section>
        <Section>
          <SectionTitle>EPINET</SectionTitle>
          <p>ONGC has set benchmarks for industry to follow. ONGC has setup EPINET, through which a live E&P information network and a virtual database has been developed for Basin & Petroleum System Modeling of various basins. Through SCADA all production and drilling executives at different levels utilize and reap benefits of online SCADA data for enhanced operational efficiency and productivity.</p>
        </Section>
        <Section>
          <SectionTitle>3-D virtual reality centers</SectionTitle>
          <p>ONGC has set up four 3-D virtual reality centers known as 'Third Eye' for real time dissemination and information of onshore and offshore applications. These centers are used for exploration and production activities including real-time surveillance of producing oil and gas fields thus helping ONGC network all its centers together by parallel computing technologies for all the major projects.</p>
        </Section>
        <Section>
          <SectionTitle>SAP implementation started by ONGC’s management</SectionTitle>
          <p>Thinking ahead of times, in 2002, ONGC’s management started the SAP implementation, which turned out to be the largest India has ever seen. ONGC is now moving towards a paperless office through adoption of latest pioneering technologies.</p>
          <p>ONGC embarked upon realignment of its multi-faceted business activities through the powerful medium of Information Technology. The IT mission was realigned ‘To develop an integrated, flexible and standardized Information Technology architecture to position ONGC towards fundamental competitive advantage’. The existing standalone applications (UFSO – for Financial Management, SHRAMIK for Human Resource Management, IMMS for Material Management etc) and other legacy information systems were brought together under a common ERP platform. Thus, Project ICE, Information Consolidation for Efficiency was born, out of the strategic vision of the ONGC’s board, particularly that of Mr. Subir Raha, the then C&MD with the motto of “One Organisation, One Data and One Information”.</p>
        </Section>
        <Section>
          <SectionTitle>Project ICE</SectionTitle>
          <p>ONGC has also implemented an enterprise-wide ERP implementation by the name of Project ICE. It comprised of 23 SAP modules in more than 500 physical locations across the length and breadth of the country, starting from mobile Survey units at Jwalamukhi of Himachal Pradesh to Deep Sea vessels at Bay of Bengal, from Production installations at far flung areas of Assam to Drilling rigs in the desert of Rajasthan.</p>
        </Section>
        <Section>
          <SectionTitle>Ultra-deepwater drilling</SectionTitle>
          <p>Over the years, ONGC has developed a formidable capability in ultra-deepwater drilling. Since 2004, ONGC has drilled over 100 deepwater wells. A large number of these wells are in daunting water depths beyond 5000 feet in environmentally and logistically difficult areas of Indian East Coast and West Coast, ranging from Gujarat offshore to Mahanadi offshore including 6 wells in Andaman offshore. Out of these, around 25 wells have been drilled in water depths of 5000 feet to 7500 feet and 16 wells in water depths of 7500 feet to 10000 feet. The current world record well # 1-D-1, which is under drilling, is the 3rd well in beyond 10000 feet water depth.ONGC has achieved this commendable feat due to a sustained effort over the years to keep pace with latest technology in hydrocarbon exploration and it is one of the few companies in the world to have drilled a large number of ultra-deepwater wells in diverse and challenging areas.</p>
          <p>Having gone through the tough grind in deepwater operations during last fifteen years, ONGC is today fully geared up to stand up to any challenge in ultra-deepwater drilling operations in pursuit of energy security for the nation.</p>
        </Section>
        <Section>
          <SectionTitle>Collaboration with Indian Institutes of Technology</SectionTitle>
          <p>In early 2015, ONGC signed a Memorandum of Collaboration (MoC) with seven IITs for developing indigenous technologies to enhance exploration and production of hydrocarbons and alternate energy sources. Under the MoC, ONGC's R&D Institutes and the IITs shall jointly undertake advanced research and development projects for the exploration and production (E&P) sector of the country in general and oilfield specific activities of ONGC in particular.</p>
        </Section>
      </MainContainer>
      <Footer>
        <p>© 2025 ONGC. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default Technology; 