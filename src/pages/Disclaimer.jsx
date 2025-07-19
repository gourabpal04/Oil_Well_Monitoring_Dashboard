import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  font-family: sans-serif;
  background: white;
`;
const Hero = styled.header`
  width: 100%;
  height: 260px;
  overflow: hidden;
  background: #003366;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2.2rem;
  font-weight: bold;
  letter-spacing: 1px;
  position: relative;
`;
const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.45;
  z-index: 1;
`;
const HeroText = styled.div`
  position: relative;
  z-index: 2;
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
const SectionTitle = styled.h2`
  color: #b91c1c;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`;
const Content = styled.div`
  font-size: 1.05rem;
  color: #222;
  line-height: 1.7;
  margin-bottom: 2rem;
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

const Disclaimer = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return (
    <Container>
      <Hero>
        <HeroImage src="/images/Privacy_Policy.gif" alt="Disclaimer Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>Disclaimer</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <SectionTitle>Disclaimer</SectionTitle>
        <Content>
          <p>ONGC companies have their own separate identities but in this website we may sometimes use "ONGC", "Group", "we" or "us" when we refer to ONGC companies in general or where no useful purpose is served by identifying any particular ONGC company.</p>
          <p>This website may include links to external websites. When you follow such links the external website may appear as a full screen (in which case you will need to use the back button on your browser to return to this website). These links are provided in order to help you find relevant websites, services and/or products which may be of interest to you quickly and easily. It is your responsibility to decide whether any services and/or products available through any of these websites are suitable for your purposes. ONGC is not responsible for the owners or operators of these websites or for any goods or services they supply or for the content of their websites and does not give or enter into any conditions, warranties or other terms or representations in relation to any of these or accept any liability in relation to any of these (including any liability arising out of any claim that the content of any external website to which this website includes a link infringes the intellectual property rights of any third party).</p>
          <p>All information or advice provided as part of this website is intended to be general in nature and you should not rely on it in connection with the making of any decision. ONGC tries to ensure that all information provided as part of this website is correct at the time of inclusion on the website but does not guarantee the accuracy of such information. ONGC is not liable for any action you may take as a result of relying on such information or advice or for any loss or damage suffered by you as a result of you taking this action.</p>
        </Content>
      </MainContainer>
      <Footer>
        <p>© 2025 ONGC. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default Disclaimer; 