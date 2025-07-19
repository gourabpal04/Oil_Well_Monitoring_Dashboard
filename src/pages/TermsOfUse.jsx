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
  h3, h4 {
    color: #b91c1c;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    font-size: 1.15rem;
    font-weight: 600;
  }
  ul, ol {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
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

const TermsOfUse = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return (
    <Container>
      <Hero>
        <HeroImage src="/images/Privacy_Policy.gif" alt="Terms of Use Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>Terms of Use</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <SectionTitle>Terms of Use</SectionTitle>
        <Content>
          <p>Welcome to www.ongcindia.com ( www.ongc.in / www.ongc.net ). This website belongs to ONGC, India. Visitors to this website are bound by the following terms and conditions. For the purposes of these terms and conditions , "this website" refers to www.ongcindia.com, which links to other ONGC websites.</p>
          <p>Other ONGC websites may contain terms and conditions which are different from these terms and conditions. On your journey around the ONGC websites please check the terms and conditions of each website, and do not assume that these terms and conditions apply to all ONGC websites.</p>
          <h3>Terms & Conditions</h3>
          <p>This website contains material including text, photographs and other images and sound, which are protected by copyright and /or other intellectual property rights. All copyright and other intellectual property rights in this material are owned by ONGC or have been licensed to them by the owner(s) of those rights so that it can use this material as part of this website.</p>
          <p>This website also contains trade marks, including the mark "ONGC" and the ONGC emblem. All trade marks included on this website belong to ONGC or have been licensed to it by the owner(s) of those trade marks for use on this website.</p>
          <p>You may:</p>
          <ul>
            <li>Access any part of the website;</li>
            <li>Print off one copy of any or all of the pages for your own personal reference.</li>
          </ul>
          <p>You may not:</p>
          <ul>
            <li>Copy (whether by printing off onto paper, storing on disk, downloading or in any other way), distribute (including distributing copies), broadcast, alter or tamper with in any way or otherwise use any material contained in the website except as set out under "You may". These restrictions apply in relation to all or part of the material on the website;</li>
            <li>Remove any copyright, trade mark or other intellectual property notices contained in the original material from any material copied or printed off from the website;</li>
            <li>Link to this website... without our express written consent.</li>
          </ul>
          <p>If you wish to provide a hypertext or other link to this website, please contact the website administrator with details of:</p>
          <ul>
            <li>The URL(s) of the web page(s) from which you are proposing to link to this website.</li>
            <li>The URL(s) of the web page(s) on this website to which you are proposing to link ... and we will consider your request. We have the sole discretion to accept or reject such requests.</li>
          </ul>
          <h3>Changes In Terms & Conditions</h3>
          <p>ONGC may change the terms and conditions and disclaimer set out above from time to time. By browsing this website you are accepting that you are bound by the current terms and conditions and disclaimer and so you should check these each time you revisit the site.</p>
          <h3>Changes In Operation Of This Website</h3>
          <p>ONGC may change the format and content of this website at any time.</p>
          <p>ONGC may suspend the operation of this website for support or maintenance work, in order to update the content or for any other reason.</p>
          <p>ONGC reserves the right to terminate access to this website at any time and without notice.</p>
          <h3>Data Protection</h3>
          <p>Personal details provided to ONGC or other ONGC companies through this website will only be used in accordance with our Privacy Policy. Please read this carefully before going on. By providing your personal details to us you are consenting to its use in accordance with our Privacy Policy.</p>
          <h3>Complaints</h3>
          <p>If you have a question or complaint about this website, please contact the www.ongcindia.com Administrator at ongcreports@ongc.co.in</p>
          <h3>Jurisdiction</h3>
          <p>These terms and conditions are governed by and to be interpreted in accordance with relevant Indian laws, both substantive and procedural. In the event of any dispute arising in relation to these terms and conditions or any dispute arising in relation to the website whether in contract or tort or otherwise the Indian courts at New Delhi will have exclusive jurisdiction over such dispute.</p>
        </Content>
      </MainContainer>
      <Footer>
        <p>© 2025 ONGC. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default TermsOfUse; 