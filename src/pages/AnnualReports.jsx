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
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
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

const ReportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem 0;
`;

const ReportCard = styled.a`
  display: block;
  text-decoration: none;
  color: #333;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  background: #fff;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const ReportImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ReportCaption = styled.p`
  padding: 1rem;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: #f9f9f9;
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

const reports = [
  {
    pdf: '/images/ONGC-AnnualReportHindi-2023-24.pdf',
    img: '/images/2023-2034.jpg',
    caption: 'Annual Report 2023-24',
  },
  {
    pdf: '/images/ar2023-24.pdf',
    img: '/images/2023-2034.jpg',
    caption: 'Annual Report 2022-23',
  },
  {
    pdf: '/images/annualreport22-23rev.pdf',
    img: '/images/2022-2023.jpg',
    caption: 'Annual Report 2021-22',
  },
  {
    pdf: '/images/annualreport2022_New.pdf',
    img: '/images/2021-2022.jpg',
    caption: 'Annual Report 2020-21',
  },
];

const AnnualReports = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return (
    <Container>
      <Hero>
        <img src="/images/vision_and_mission_header.jpg" alt="Annual Reports Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>Annual Reports</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <SectionTitle>Annual Reports</SectionTitle>
        <ReportGrid>
          {reports.map((report, idx) => (
            <ReportCard href={report.pdf} target="_blank" rel="noopener noreferrer" key={idx}>
              <ReportImage src={report.img} alt={report.caption} />
              <ReportCaption>{report.caption}</ReportCaption>
            </ReportCard>
          ))}
        </ReportGrid>
      </MainContainer>
      <Footer>
        <p>© 2025 ONGC. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default AnnualReports; 