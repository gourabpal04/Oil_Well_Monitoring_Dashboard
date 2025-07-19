import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaNewspaper } from 'react-icons/fa';

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
  @media (max-width: 900px) {
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
`;

const NewsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NewsItem = styled.li`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  &:last-child {
    border-bottom: none;
  }
`;

const NewsTitle = styled.a`
  color: #111;
  font-size: 1.15rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #111;
    text-decoration: underline;
  }
`;

const NewsDate = styled.div`
  color: #111;
  font-size: 0.95rem;
  margin-top: 0.25rem;
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

const MediaNews = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');
  const handleSidebarNav = (route) => (e) => {
    e.preventDefault();
    if (route) navigate(route);
  };

  return (
    <Container>
      <Hero>
        <img src="/images/group_of_companies_header.avif" alt="Media News Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>News & Recent Updates</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <TitleSection>
          <h1><FaNewspaper style={{verticalAlign:'middle', marginRight:8}}/>News & Recent Updates</h1>
        </TitleSection>
        <GlanceSection>
          <LeftContent>
            <NewsList>
              <NewsItem>
                <NewsTitle href="/images/EOI100725.pdf" target="_blank" rel="noopener noreferrer">Expression of Interest for hiring of non-intrusive technologies for Integrity/Health Assessment of non-piggable/ difficult to pig Onshore and Offshore pipelines</NewsTitle>
                <NewsDate>10 Jul, 2025</NewsDate>
              </NewsItem>
              <NewsItem>
                <NewsTitle href="/images/EOI-VMI-OCTG.pdf" target="_blank" rel="noopener noreferrer">Expression of Interest (EOI) Notification Vendor Managed Inventory for OCTG (Oil Country Tubular Goods) at ONGC</NewsTitle>
                <NewsDate>27 Jun, 2025</NewsDate>
              </NewsItem>
              <NewsItem>
                <NewsTitle href="/images/EOI-PTB260625.pdf" target="_blank" rel="noopener noreferrer">Expression of Interest (EOI) by Domestic Manufactures for Development of Personnel Transfer Basket</NewsTitle>
                <NewsDate>26 Jun, 2025</NewsDate>
              </NewsItem>
              <NewsItem>
                <NewsTitle href="https://oilgasbidding.eproc.in/" target="_blank" rel="noopener noreferrer">ONGC has published NIO on 23.05.2025 for the sale of 0.015 MMSCMD of 'Cascade Ready' gas with marketing and pricing freedom from North Karanpura block</NewsTitle>
                <NewsDate>26 May, 2025</NewsDate>
              </NewsItem>
              <NewsItem>
                <NewsTitle href="/images/EOI_SMRRevised-Submissiondate.pdf" target="_blank" rel="noopener noreferrer">EOI Small Modular Reactors (SMR) at ONGC</NewsTitle>
                <NewsDate>15 May, 2025</NewsDate>
              </NewsItem>
            </NewsList>
          </LeftContent>
          <Sidebar>
            <ul className="sidebar-links">
              <li><a href="#" onClick={handleSidebarNav('/media/publication')}>Publication</a></li>
              <li><a href="#" onClick={handleSidebarNav('/media/gallery')}>Gallery</a></li>
              <li><a href="#" className="active">News & Recent Updates</a></li>
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

export default MediaNews; 