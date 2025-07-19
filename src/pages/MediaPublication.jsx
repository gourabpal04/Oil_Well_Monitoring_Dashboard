import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaBookOpen } from 'react-icons/fa';

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

const PublicationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PublicationItem = styled.li`
  margin-bottom: 1.5rem;
`;

const PublicationLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f3f4f6;
  color: #b91c1c;
  font-size: 1.15rem;
  font-weight: 600;
  padding: 1.25rem 1.5rem;
  border-radius: 0.75rem;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  &:hover {
    background: #dc2626;
    color: #fff;
    box-shadow: 0 4px 18px rgba(220,38,38,0.10);
  }
  svg {
    font-size: 1.5rem;
    flex-shrink: 0;
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

const MediaPublication = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');
  const handleSidebarNav = (route) => (e) => {
    e.preventDefault();
    if (route) navigate(route);
  };

  const publications = [
    { name: 'MERI YOJNA-BOOK', url: 'https://uk.gov.in/pages/meri-yojna-book' },
    { name: 'Downstream India', url: '/images/DownstreamIndia.pdf' },
    { name: 'ONGC BOOK', url: '/images/ONGCBOOK.pdf' },
    { name: 'Upstream India', url: '/images/UpstreamIndia.pdf' },
  ];

  return (
    <Container>
      <Hero>
        <img src="/images/group_of_companies_header.avif" alt="Media Publications Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>Media Publications</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <TitleSection>
          <h1>Media Publications</h1>
        </TitleSection>
        <GlanceSection>
          <LeftContent>
            <PublicationList>
              {publications.map((pub, idx) => (
                <PublicationItem key={idx}>
                  <PublicationLink href={pub.url} target="_blank" rel="noopener noreferrer">
                    <FaBookOpen />
                    {pub.name}
                  </PublicationLink>
                </PublicationItem>
              ))}
            </PublicationList>
          </LeftContent>
          <Sidebar>
            <ul className="sidebar-links">
              <li><a href="#" className="active">Publication</a></li>
              <li><a href="#" onClick={handleSidebarNav('/media/gallery')}>Gallery</a></li>
              <li><a href="#" onClick={handleSidebarNav('/media/news')}>News & Recent Updates</a></li>
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

export default MediaPublication; 