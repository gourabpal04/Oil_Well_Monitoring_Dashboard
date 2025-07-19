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

const ContentSection = styled.section`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  line-height: 1.7;
  color: #374151;
  margin-bottom: 3rem;
  h2, h3 {
    color: #dc2626;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
    border: 4px solid #dc2626 !important;
    background: #fff;
    box-shadow: 0 4px 16px rgba(220,38,38,0.15);
  }
  th, td {
    border: 4px solid #dc2626 !important;
    padding: 0.8rem 1.2rem;
    text-align: left;
    background: #fff;
  }
  th {
    background: #f3f4f6;
    color: #b91c1c;
    font-weight: bold;
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

const SWMList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.001rem;
  margin: 2rem 0 1rem 0;
  padding-left: 2rem;
  list-style: disc outside;

  li {
    background: #f9fafb;
    border-radius: 6px;
    padding: 1rem 1.5rem;
    color: #374151;
    font-size: 1.08rem;
    box-shadow: 0 1px 6px rgba(220,38,38,0.04);
    margin: 0;
    transition: box-shadow 0.2s;
    &:hover {
      box-shadow: 0 2px 12px rgba(220,38,38,0.10);
      background: #fff;
    }
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
`;

const CleanDevelopmentMechanism = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return (
    <Container>
      <Hero>
        <img src="/images/1540_profilemain02.jpg" alt="Clean Development Mechanism Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>Clean Development Mechanism</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <TitleSection>
          <h1>Clean Development Mechanism</h1>
        </TitleSection>
        <img 
          src="/images/Clean_Development_Mechanism.jpg" 
          alt="Clean Development Mechanism" 
          style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
        />
        <GlanceSection>
          <LeftContent>
            <p>ONGC was the first PSU in the country to have taken a lead in the area of Clean Development Mechanism. Company commenced its Clean Development Mechanism (CDM) journey in 2006. Currently, it has 15 registered CDM projects with the United Nations Framework Convention on Climate Change (UNFCCC) that yield (potential) Certified Emissions Reductions (CER) approx. 2.1 million yearly. The registered CDM projects are as under:</p>
            <table>
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Projects</th>
                  <th>CER/annum</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Waste heat recovery from Process Gas Compressors (PGCs), Mumbai high south (offshore platform).</td><td>5320</td></tr>
                <tr><td>2</td><td>Up-gradation of Gas Turbine 1 (GT 1) and Gas Turbine 2 (GT 2) at co-generation plant of Hazira Gas Processing Complex (HGPC).</td><td>7802</td></tr>
                <tr><td>3</td><td>Flare gas recovery project at Uran plant.</td><td>97740</td></tr>
                <tr><td>4</td><td>Flare gas recovery project at Hazira Gas Processing Complex (HGPC), Hazira plant.</td><td>8793</td></tr>
                <tr><td>5</td><td>Amine Circulation Pumps Energy Efficiency at Hazira Plant.</td><td>4043</td></tr>
                <tr><td>6</td><td>51 MW wind power project of ONGC at Surajbari.</td><td>85762</td></tr>
                <tr><td>7</td><td>Energy Efficient Green Building at Mumbai.</td><td>544</td></tr>
                <tr><td>8</td><td>Energy Efficient Green Building at Dehradun.</td><td>735</td></tr>
                <tr><td>9</td><td>Gas Flaring Reduction at Neelam & Heera Asset.</td><td>65811</td></tr>
                <tr><td>10</td><td>OTPC Natural gas based combined cycle power plant in Tripura, India.</td><td>1612506</td></tr>
                <tr><td>11</td><td>Energy Efficient Green Building at Kolkata.</td><td>1881</td></tr>
                <tr><td>12</td><td>Energy Efficient Green Building at Delhi.</td><td>5944</td></tr>
                <tr><td>13</td><td>Gas flare reduction at GGS Charali Assam.</td><td>15172</td></tr>
                <tr><td>14</td><td>Replacement of MOL pumps at Neelam and Heera.</td><td>10539</td></tr>
                <tr><td>15</td><td>102 MW Wind Power project at Jaisalmer, Rajasthan.</td><td>180177</td></tr>
                <tr><td colSpan="2" style={{fontWeight:'bold'}}>Total</td><td style={{fontWeight:'bold'}}>2102769</td></tr>
              </tbody>
            </table>
            <p>Four production installations (CPF Gandhar, Gandhar GGS-I, Ankleshwar CTF, and Nawagam CTF) were declared carbon neutral for the year 2015-16 after voluntarily retiring 1,34,419 CERs of CP-1 credit period from CDM registry account (UNFCC).</p>
            <h2>Sustainable Water Management (SWM)</h2>
            <p>As an <b>E&P Company</b>, the Company business depends on sustainability of fresh water resources which are presently under pressure. Globally, per capita availability of freshwater is steadily decreasing and trend will inevitably continue with the increasing consumption levels and climate change unfolds. In this situation, it is imperative for the Company to develop new strategies for water management in order to achieve sustainable growth and development. The details of existing rain water harvesting projects of the Company are given below.</p>
            <SWMList>
              <li>29 ground water recharge wells at various locations of Ahmedabad Asset.</li>
              <li>Rain water from rooftop and surface run off harvesting at Green Building, Mumbai.</li>
              <li>Percolation well for bore well recharge at Residential complex, Ankleshwar Asset.</li>
              <li>Rain water harvesting system as integral part of C2-C3 plant, Dahej, Gujarat.</li>
              <li>Rain water harvesting at Rajahmundry Asset base complex.</li>
              <li>16 infiltration well in IPSHEM, Goa.</li>
              <li>2 ground water recharge wells at IRS, Ahmedabad.</li>
              <li>6 ground water recharge wells at KDMIPE, Dehradun.</li>
              <li>1 ground water recharge well at base complex, RFB, Jodhpur.</li>
              <li>RWH system at K. V. School, NOBH and officers’ club at Agartala, Tripura Asset.</li>
              <li>RWH system, PPCL building, Uran Plant, Raigad, Maharashtra.</li>
              <li>Bhavale Hill RWH system, Panvel, Maharashtra.</li>
              <li>RWH system at SPIC campus, Panvel, Maharashtra.</li>
              <li>RWH systems at various locations at Western Onshore Basin, Vadodara.</li>
            </SWMList>
          </LeftContent>
          <Sidebar>
            <ul className="sidebar-links">
              <li><a href="#" onClick={() => navigate('/carbon-management')}>Carbon Management</a></li>
              <li><a href="#" onClick={() => navigate('/oil-split-management')}>Oil Split Management</a></li>
              <li><a href="#" onClick={() => navigate('/environment')}>Environment</a></li>
              <li><a href="#" className="active">Clean Development Mechanism</a></li>
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

export default CleanDevelopmentMechanism; 