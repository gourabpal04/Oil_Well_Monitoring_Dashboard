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
  p {
    margin-bottom: 1.5rem;
  }
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

const CarbonManagement = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');
  const handleSidebarNav = (route) => (e) => {
    e.preventDefault();
    if (route) navigate(route);
  };

  return (
    <Container>
      <Hero>
        <img src="/images/About_ONGC.jpg" alt="Carbon Management Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>Carbon Management</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <TitleSection>
          <h1>Carbon Management</h1>
        </TitleSection>
        <img 
          src="/images/carbon_management.jpg" 
          alt="Carbon Management" 
          style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
        />
        <GlanceSection>
          <LeftContent>
            <p>ONGC being one of the premier energy majors of the world realises its responsibilities in ensuring sustained development through protection of the ecological system. It therefore strives to position itself as a leading organisation in sustainable management and is aiming to achieve sustainable development through a holistic approach to carbon management. ONGC believes that focused Carbon Management efforts are an ideal route to cover the elements of our business specific sustainable development issues across the environmental dimensions. A critical area of environmental sustainability is mitigation of global greenhouse gas from operations. It is an organizational objective for us to progressively reduce our carbon footprint by working towards reduction in both direct and indirect energy consumption.</p>
            <p>ONGC is aware of the risks arising due to climate change. It has a dedicated Carbon Management & Sustainability Group (CM&SG) with a specific mandate to position ONGC as the leading organisation in sustainable development (SD) and to voluntarily take up carbon management strategy to synergise all business activities with sustainable development, particularly to address issues related to climate change risks and opportunities arising from carbon mitigation initiatives. The management has been active in engaging with national and international climate change forum to ensure that the organisation stays current with global climate change negotiations and India’s domestic commitments.</p>
            <h2>Global Methane Initiative</h2>
            <p>Global Methane Initiative (GMI) was launched by United States Environmental Protection Agency (USEPA) is a voluntary, multilateral partnership and other interested stakeholders in a collaborative effort to reduce methane gas emissions and advance methane recovery and use as a clean energy source. The efforts not only reduce global methane emissions but also stimulate economic growth, strengthen energy security, improving local air & water quality in addition to the safety of the manpower employed.</p>
            <p>ONGC signed a voluntary agreement with USEPA in 2007 for the purpose of reducing fugitive methane emission in atmosphere by implementing cost effective emission reduction technologies and practices. Regular gas leak surveys are conducted at various production installations using Gas Find Infrared Camera.</p>
            <p>The main objective of the gas leak survey was to identify the fugitive gas leaks to enable the remedial action in order to improve the operational efficiency, enhancing workplace safety, protecting the environment and increasing marketable natural gas.</p>
            <h3>GMI Survey Locations</h3>
            <ul>
              <li><strong>FY20:</strong>CM&SG group had completed the GMI Survey of the following locations:<strong><br/>
                                                                                                                    1) Uran Plant (11.11.2019 to 13.11.2019),<br/>
                                                                                                                    2) Hazira Plant (22.04.2019 to 25.04.2019),<br/>
                                                                                                                    3) Assam Asset (30.10.2019 to 02.11.2019)
                                                                                                                    </strong></li>
              <li><strong>FY21:</strong>CM&SG group had completed the GMI Survey of the following locations:<strong><br/>
                                                                                                                    1) Ahmedabad Asset (11.03.2021 to 13.03.2021),<br/>
                                                                                                                    2) Cambay Asset (15.03.2021 to 16.03.2021)
                                                                                                                    </strong></li>
            </ul>
          </LeftContent>
          <Sidebar>
            <ul className="sidebar-links">
              <li><a href="#" className="active">Carbon Management</a></li>
              <li><a href="#" onClick={handleSidebarNav('/oil-split-management')}>Oil Split Management</a></li>
              <li><a href="#" onClick={handleSidebarNav('/environment')}>Environment</a></li>
              <li><a href="#" onClick={handleSidebarNav('/clean-development-mechanism')}>Clean Development Mechanism</a></li>
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

export default CarbonManagement; 