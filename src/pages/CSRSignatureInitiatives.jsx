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

const CSRSignatureInitiatives = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return (
    <Container>
      <Hero>
        <img src="/images/Net_Zero.jpg" alt="Signature CSR Initiatives Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>Signature CSR Initiatives</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <TitleSection>
          <h1>Signature CSR Initiatives</h1>
        </TitleSection>
        <GlanceSection>
          <LeftContent>
            <p>ONGC as a leading Maharatna of the nation has set a benchmark continuously for the last two years by achieving 100% utilization of CSR budget which has been to the tune of over Rs 500 Crore each year. This reflects ONGC’s commitment as a responsible Corporate Citizen of giving back to the society in equal measure.</p>
            <p>ONGC’s leadership has ensured that as per the Government’s mandate, 33% of the CSR budget is spent on Swachh Bharat projects. Further, 65.90% of the projects in the last three years were implemented in the priority focus area of Education and Health Care.</p>
            <p>As per directives of NitiAyog, ONGC has identified 20 Aspiration districts and is committed to raise the social and economic condition of these districts by implementing strategic CSR projects. Projects worth more than Rs 31 Cr has been successfully implemented till FY 2018-19.</p>
            <p>In the year 2018-19 alone, ONGC has implemented more than 4000 projects covering every nook and corner of the country. A few proud achievements of the company that have brought a positive impact to the society in focus areas of Health Care, Education, Skill Development, Swachh Bharat and Rural Development are given below:</p>
            <h2 className='text-2xl text-center text-red-800'>Health Care initiative</h2>
            <h3 className='text-red-700 font-bold'>A 300 bed Multi-Speciality for the underprivileged</h3>
            <p>Your company has taken up a mega CSR initiative towards addressing the health care concerns of people in the Northeast by setting up a Multi-Speciality Hospital in Sivasagar, Assam. The services of the first Phase of the 300 bed hospital has been opened for public in the first week of March 2019. The hospital which is to be completed in three phases at a cost of Rs 313 Cr is expected to benefit more than one lakh patients in a year.</p>
            <img 
                src="/images/hospital.jpg" 
                alt="Clean Development Mechanism" 
                style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '500px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
            />
            <h3 className='text-red-700 font-bold'>The Highlights of the hospital</h3>
            <ul>
              <li>300 beds Multi-Specialty hospital coming up in three phases</li>
              <li>The services of 1st phase of the hospital with 50 beds commenced from  March 1, 2019</li>
              <li>Dr Babasaheb Ambedkar Vaidakiya Pratisthan, Aurungabad, a Charitable organization who has more than 28 years of experience in Health Care sector primarily through charitable aspects, is the Construction Management Operating Partner of the hospital</li>
              <li>The Outpatient Department (OPD) and Inpatient Department (IPD) charges is much lesser than the market rates and further additional discounts would be extended to BPL families</li>
              <li>Presently, there are 2 Operation theatres, 4 General wards, 5 Private VIP Rooms, 1 Dialysis unit with 4 beds, Dental OPD, Pharmacy, Ultrasound, X Ray, etc</li>
            </ul>
            <h3 className='text-red-700 font-bold'>A Cancer Institute at Nagpur</h3>
            <p>At Nagpur, ONGC supported for setting up of National Cancer Institute, a 455 bedded quaternary care oncology centre. The institute will provide world-class oncology treatment facility at affordable rates to the general public of Central India. The state of the art radio diagnostic equipment and construction of the first floor and ground floor of the institute has been funded by ONGC. More than 10,000 people have benefited through this project up to April 2019.</p>
            <img 
                src="/images/Cancer_Institute.jpg" 
                alt="Clean Development Mechanism" 
                style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
            />
            <h3 className='text-red-700 font-bold'>An Exclusive Door Step Medical Treatment for the Elderly</h3>
            <p>ONGC is taking up medical treatment to the door step for the elderly in the remotest villages of our country.  31 Mobile Medical Units (MMUs) have been engaged in 9 states catering to the needs of 371 villages. In FY 2018-19, 592301 nos. of treatments have been extended to 17260 nos. of patients / beneficiaries.</p>
            <img 
                src="/images/A_patient_being_treated_in_Mobile_Medical_Unit.jpg" 
                alt="Clean Development Mechanism" 
                style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
            />
            <p className='text-center text-red-800'>A patient being treated in Mobile Medical Unit</p>
            <h3 className='text-red-700 font-bold'>ONGC – MRPL Lady Goschen Hospital, Mangalore</h3>
            <p>The Lady Goschen Hospital established in 1849, at the heart of Mangalore City is the only hospital in entire Konkon region which provides exclusive pre-natal and post natal care. At an average 500 women are admitted and treated for pre/ post-natal care every month.  The 167 year old hospital building was in a dilapidated condition and due to the increased inflow of patients. Hence there was an urgent need for additional facilities. District Administration of Mangalore approached ONGC for financial support to start a new wing in the hospital campus. ONGC extended financial support of Rs.12.78 Cr towards construction of new ‘ONGC-MRPL Wing’ for Government Lady Goschen Hospital, Mangalore. The new hospital building has been inaugurated in February 2019.</p>
            <img 
                src="/images/New_Wing_of_Lady_Goschen_hospital_in_Mangalore.jpg" 
                alt="Clean Development Mechanism" 
                style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
            />
            <p className='text-center text-red-800'>New Wing of Lady Goschen hospital in Mangalore</p>
            <h3 className='text-red-700 font-bold'>An initiative towards visually impaired</h3>
            <p>17522 patients were treated in 62 eye screening camps organized across India, where  2579 cataract operations were performed by expert doctors and 11313 spectacles were distributed in 20 districts across the country through a specialized agency in FY 2018-19. Further more than 1000 visually disabled adult where provided with smart sensor based navigation sticks in Ahmedabad.</p>
            <h3 className='text-red-700 font-bold'>Strengthening Trimurti Hospital</h3>
            <p>Trimurti Hospital Balwa located in around 30 kms from Ahmedabad has been supported by your company with medical equipment and infrastructure for a 10 bedded ICU and State of the Art operation theatre to deal with complex medical conditions and trauma patients with serious injuries. The hospital caters to patients suffering from heart diseases, serious lung disease, cancer and road accident victims, extending its services to around 100km radius of low socio-economic area.</p>
            <img 
                src="/images/Trimurty_hospital.jpg" 
                alt="Clean Development Mechanism" 
                style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
            />
            <p className='text-center text-red-800'>Renovated Trimurty hospital, Ahmedabad</p>
            <h3 className='text-red-700 font-bold'>Upgrading Medical Infrastructure facilities in Kerala</h3>
            <p>ONGC fundeda project for up gradation and renovation of Sree Sudheendra Medical Mission hospital located at Ernakulam Kerala. The ICU and CCU at the ground floor, four OTs and six rooms in first floor and renovation of fourth floor (with 43 rooms) had been completed through support from ONGC. The hospital caters to 300 OPDs per day and 150 minor and major operations in a month.</p>
            <h2 className='text-center text-red-800 text-xl font-sans'>Swachh Bharat and Environment preservation Initiative</h2>
            <ul>
              <li ><h3 className='text-red-700 font-bold'>Ensuring Clean Drinking Water Facilities across India by Installing:</h3>
                <ul>
                  <li>2309 nos. of tube well and hand pump</li>
                  <li>121 nos. of Water RO’s</li>
                  <li>26 nos. of Water ATM’s</li>
                </ul>
                <img 
                    src="/images/Water_ATM.jpg" 
                    alt="Clean Development Mechanism" 
                    style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
                />
                <div class="flex justify-center gap-36">
                    <p class="text-red-800">Water ATM at Varanasi</p>
                    <p class="text-red-800">Water RO Purifier in a school in Assam</p>
                </div>
              </li>
              <li><h3 className='text-red-700 font-bold'>Open Defecation Free (ODF) Initiative:</h3>
                <ul>
                  <li>33,662 nos.  IHHL, 412 nos. school toilets and 43 nos. community toilets have been constructed across the country with an objective to facilitate declaration of ODF village.</li>
                  <li>At Tripura, your company signed an agreement with the State Govt. for construction of20833 dysfunction IHHL to help declare Tripura, an Open Defecation Free State.</li>
                </ul>
              </li>
                <img 
                    src="/images/Community_toilet_at_Dharavi.jpg" 
                    alt="Clean Development Mechanism" 
                    style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
                />
                <p className='text-center text-red-800'>Community toilet at Dharavi, Mumbai</p>
              <li><h3 className='text-red-700 font-bold'>Clean Himalayas Initiatives:</h3> ONGC is among the first company to have undertaken a cleaning initiative in the high mountain peak of Himalayas. In FY- 2018-19, nine cleaning initiatives / expeditions had been undertaken in partnership with Indian Mountaineering Foundation (IMF) and the teams succeeded in bringing down 130 tons of garbage for eco-friendly disposal.</li>
              <li><h3 className='text-red-700 font-bold'>Reviving the Ancient River Saraswati:</h3> 10 deep water tube wells were drilled along the ancient Paleo channel of River Saraswati, with an intention to revive the ancient river. The project implemented in association with WAPCOS has ensured drinking water and irrigation facilities in 10 villages of Harayana State.</li>
            </ul>
          </LeftContent>
          <Sidebar>
            <ul className="sidebar-links">
              <li><a href="#" onClick={() => navigate('/csr-vision-mission')}>CSR Vision and Mission</a></li>
              <li><a href="#" className="active">Signature CSR Initiatives</a></li>
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

export default CSRSignatureInitiatives; 