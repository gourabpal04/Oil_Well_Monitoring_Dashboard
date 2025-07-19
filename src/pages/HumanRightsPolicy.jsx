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

const SectionTitle = styled.h2`
  color: #b91c1c;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const PolicyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
`;

const PolicyItem = styled.li`
  margin-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1.5rem;
  &:last-child {
    border-bottom: none;
  }
`;

const PolicyLink = styled.a`
  color: #111;
  font-size: 1.15rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: #dc2626;
    text-decoration: underline;
    transform: scale(1.07);
  }
`;

const PolicyDate = styled.div`
  color: #6b7280;
  font-size: 0.95rem;
  margin-top: 0.25rem;
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

const policies = [
  {
    title: 'Human Rights Policy',
    date: '30 Oct, 2024',
    link: '/images/HumanRightsPolicy301024 (1).pdf',
  },
  {
    title: 'Preface Human Rights Policy',
    date: '22 Jun, 2022',
    link: '/images/Preface.pdf',
  },
  {
    title: 'ONGC Human Rights Policy 2022',
    date: '22 Jun, 2022',
    link: '/images/Policy202.pdf',
  },
];

const HumanRightsPolicy = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return (
    <Container>
      <Hero>
        <img src="/images/vision_and_mission_header.jpg" alt="Human Rights Policy Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>Human Rights Policy</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <SectionTitle>Human Rights Policy</SectionTitle>
        <PolicyList>
          {policies.map((policy, idx) => (
            <PolicyItem key={idx}>
              <PolicyLink href={policy.link} target="_blank" rel="noopener noreferrer">{policy.title}</PolicyLink>
              <PolicyDate>{policy.date}</PolicyDate>
            </PolicyItem>
          ))}
        </PolicyList>
      </MainContainer>
      <Footer>
        <p>© 2025 ONGC. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default HumanRightsPolicy; 