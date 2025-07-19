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

const Environment = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return (
    <Container>
      <Hero>
        <img src="/images/About_ONGC.jpg" alt="Environment Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>Environment</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <TitleSection>
          <h1>Environment</h1>
        </TitleSection>
        <img 
          src="/images/Environment.jpg" 
          alt="Clean Development Mechanism" 
          style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
        />
        <GlanceSection>
          <LeftContent>
            <p>ONGC boasts a robust Environment Management System in a bid to address environmental issues arising out of E&P operations. It is deeply committed to the preservation of the environment & ecology, sustainable development and enrichment of the quality of life of employees, customers and the community around its operational areas. The platform also demonstrates the Maharatna’s proactive environmental management through its integrated health, safety and environment (HSE) policy.</p>
            <p>As an ethical organization, it continuously strives to mitigate the environmental impact that may arise from its business activities such as exploration, drilling & production, by investing in state-of-art technologies, effluent & solid waste management, environment monitoring and reporting, bio-diversity conservation efforts and up-gradation and sustenance of environment management systems.</p>
            <p>It is the company policy to ensure that the environment is not in any way degraded so that the ecological balance is not disturbed. ONGC’s robust and well defined Corporate Environment Policy provides broad guidelines on the corporate and work-center approach to ensure cleaner and healthier work environment. As per the policy, ONGC have put in place objectives, targets, strategies, systems and trainings on environment management. All the regulatory measures stipulated by Ministry of Environment, Forest and Climate Change (MoEFCC), State Pollution Control Boards (SPCB), OISD & other statutory authorities are implemented in letter and spirit for the protection of the environment. It is imperative to comprehend that the oil & gas industry has worked for a long time to meet the challenges of providing environment protection.</p>
            <p>The broad environmental issues faced by upstream energy major are manifested at both Asset & Corporate level. The major issues include air emissions, soil & ground water contamination, marine & fresh water discharges, habitat protection, biodiversity conservation & incidents of oil spills. Being an environmentally ethical organization, ONGC has always responded very effectively & efficiently to these issues in timely manner.</p>
            <p>It has a comprehensive process of internal audit and management review for QHSE management system and regularly reviews its QHSE policy and maps risks. Some notable HSE practices are – regular QHSE internal audit, fire safety measures, regular fire and earth quake mock drill, health awareness program, material safety datasheet (MSDS), personal protective equipment, implementation of Environment Management Systems (EMS), occupational health & safety (OH&S), Near Miss Reporting, risk management and compliance reporting.</p>
            <p>The management of ONGC always takes into account the continual evolution of the environmental agendas through appropriate initiatives. The organization places due emphasis on establishing robust and effective management systems and has gone a long way to ensure that environmental issues are key components of corporate culture & addressed in timely manner with comprehensive approaches.</p>
            <p>The operational activities of Oil & Gas Industry have environmental aspects which may have impact on various components of the environment i.e. air, water, land and biological components. ONGC has been taking requisite measures to minimize the impact of its activities on the environment as detailed below:</p>
            <h2>A. Mitigation of air pollution</h2>
            <p>The sources of air emissions are mainly from flaring of natural gas, exhaust from running of DG sets, use of heavy equipment, construction activities, movement of vehicles etc. Following measures have been put in place to prevent air pollution:</p>
            <ul>
              <li><b>Reduction in flaring of natural gas:</b> Gas Gen-sets have been installed in production installations to utilize low pressure gas for generation of electricity for internal consumption. Gas flaring recovery scheme has been installed in both Hazira & Uran Plant of ONGC for utilisation as fuel for internal consumption. Use of micro-turbines to reduce gas flaring and utilizing the recovered gas for power generation. This help in minimizing environmental pollution and protection of biodiversity around the plant area. The initiative is also in line with the aim of World Bank to end routine gas flaring at oil production sites around the world by 2030. Low NOx burner and steam injection facility had been installed for reducing soot formation. The flare stack has been designed and constructed taking into consideration ground level concentrations of the pollutants. Regular ambient air quality monitoring studies are carried out around drill sites, production installations & plants as per statutory requirements to measure and monitor concentration of air pollutants in ambient air. The concentration of air pollutants have been found to be well within the permissible limits. In order to have complete combustion, additional O2 is mixed in Uran and Hazira plant flaring system. In the northeastern sector, wherever ground flaring is being done, a 3 meter fire proof wall has been erected around flare system to protect paddy crop form illumination and heat.</li>
            </ul>
            <h2>B. Mitigation of noise pollution</h2>
            <ul>
              <li>The major noise generating sources are DG sets, pumps at drilling rig and other equipment of drilling rig. Following mitigation measures are in place to control noise impacts: Acoustic enclosures have been provided around all gen-sets to reduce noise levels to acceptable ambient levels. Personnel Protective Equipment (PPE) like ear muff/ plugs is being provided to personnel working in noise prone areas. Regular noise monitoring is done to measure the sound levels around various equipment and machineries. Subsequently, high noise prone areas are clearly demarcated at workplace. Green belt development around major installations also contributes in mitigating noise pollution.</li>
            </ul>
            <h2>C. Mitigation of water/ land pollution</h2>
            <ul>
              <li>The major water / land pollution sources include oil spillage on land / marine environment and seepage of waste-water in land/ ground water. Following mitigation measures are in place to control water/ land pollution:</li>
              <li><b>Oil spill management in offshore operations:</b> Oil spills in offshore operations may occur due to releases of crude oil from tankers, offshore platforms, drilling rigs and wells, as well as spills of refined petroleum products (such as gasoline, diesel) and their by-products, heavier fuels used by large ships such as bunker fuel, or the spill of any oily refuse or waste oil. ONGC is having a robust oil spill management system to address oil spills ranging from minor to significant volumes. The Indian Coast Guard (ICG) is designated as a central coordinating authority by the Government of India for combating oil spills in Indian waters and undertaking oil spill prevention and control. As per the National Oil Spill Disaster Contingency Plan (NOS-DCP) promulgated by ICG, ONGC is maintaining its own Tier-I (upto 700 tons) oil spill response equipment and manpower onboard multi-support vessels in its operational area. For Tier-II (700 to 10,000 tons) level oil spill, ONGC is relying on Indian Coast Guard and ONGC’s mutual aid partners and for Tier-III (beyond 10,000 tons) oil spill, ONGC is maintaining participant membership of Oil Spill Response Limited (OSRL), UK, through which ONGC is having guaranteed response and access to OSRL’s worldwide resources comprising of Booms, Skimmers, Oil spill Dispersants stockpile, storage equipment, specialized manpower etc.. In addition, ONGC has also developed its own oil spill contingency plan to deal with oil spill incidents and eventualities. ONGC conducts internal oil spill mock drills and also participates in regional and national level mock drills organized by the Indian Navy and Indian Coast Guard. Annual returns on preparedness for oil spill response is being filed annually to ICG. Regular aerial surveillance is being carried out by ONGC and ICG helicopters and vessels patrolling in operational area. In addition, ONGC has signed following agreement/ MoU for oil spill response co-operation:- In the east coast, agreement has been signed among operators viz. ONGC, RIL, Cairn India & OIL for pooling of resources in case of emergencies which includes oil spill. At West Coast, MoU has been signed between Mumbai Port Trust (MbPT), Jawaharlal Port Trust (JNPT) and Participating Oil Companies (POC) which includes ONGC for maintaining Tier-I oil spill response facility & services in Mumbai Harbour covering ONGC’s installation at Uran and Nhava.</li>
              <li><b>Oil spill management in onshore operations:</b> Oil spills in onshore operations may occur due to leakage from pipelines (trunk lines, flow lines etc) originating from well site/ production installations; storage tanks at production installations/ plants and during transportation of crude oil through tankers. The spillage would contaminate the nearby soil/ water body posing threat to Environment. ONGC, though its joint-venture company ONGC TERI Biotech Limited (OTBL), undertakes the restoration of oil spill sites and further bio-remediation of oil contaminated soil. In bioremediation process oil eating consortium of bacteria is used to break down hazardous substances into less toxic or non-toxic substances. It is ensured that the Total Petroleum Hydrocarbon (TPH) of the treated oil contaminated soil is less than 0.5% (5000 ppm) in consonance with the Hazardous and Other Wastes (Management and Trans-boundary Movement) Rules, 2016.</li>
              <li><b>Prevention of waste-water seepage in land/ ground water:</b> To avoid contamination of ground water and nearby land, the waste water & drill- cutting pits at all drilling sites are lined with High Density Poly-Ethylene (HDPE) lining. This helps in restricting the percolation of waste-water into ground water & underground soil and thereby protecting the ground water & soil quality.</li>
            </ul>
            <h2>D. Waste water management</h2>
            <ul>
              <li>Waste water in the operations comes from underground oil and gas reservoirs, along with hydrocarbons during production. In its pristine form, produced water cannot be used in place of freshwater as it is highly saline with emulsified oil and other contaminants. Effluent treatment plants have been installed in work centers to treat effluent generated during processing of oil and gas to meet statutory requirements for discharge of treated effluent at surface/ subsurface. ONGC operates more than 40 nos. of Effluent Treatment Plants (ETPs) with designed capacity of handling more than 1,00,000 m3/ day of effluent from onshore production installations/plants. This water is disposed in underground reservoirs, through specially prepared effluent disposal wells, after treating them to disposable levels. With certain additional treatment, this water is further treated and reused for technical uses like injecting into the formation called ‘Water Injection’ for the purpose of maintaining reservoir  pressure. Treated water is also used for the various purposes during drilling at drill sites and also used for gardening purpose, floor cleaning and other utilities. Produced Water Conditioners (PWCs) have been installed for treatment of offshore produced water. The various parameters of the discharged effluent after treatment are maintained well within the prescribed limits.</li>
            </ul>
            <h2>E. Water Management</h2>
            <ul>
              <li>ONGC is continuously making technical improvements in the areas of waste water reuse and recycling in our operations. These improvements in the long run decrease operational costs and increase the sustainability of operations. The strategy for water management encompasses multiple considerations including site-specifc risks and impacts, such as security of water supply and managing the quality of water returned to the environment. The recycled water is utilized wherever possible in our operations to minimize the consumption of fresh water. At present, the water requirement is fulfilled from various sources including ground water, municipal water and surface water.</li>
            </ul>
            <h2>F. Hazardous waste management</h2>
            <ul>
              <li>As such oily sludge generated out of E&P operations is classified as a hazardous waste, as per Hazardous and Other Waste (Management and Trans-boundary Movement) Rules, 2016; which if, disposed untreated, would damage the nearby soil and ecological balance as a whole. Bio-remediation is therefore a technique to convert hazardous waste generated out of operations to non-hazardous nature and thereby ensuring environmentally safe disposal of waste. In bioremediation process oil eating consortium of bacteria is used to break down hazardous substances into less toxic or non-toxic substances. It is ensured that the Total Petroleum Hydrocarbon (TPH) of the treated oily sludge is less than 0.5% (5000 ppm) in consonance with the Hazardous and Other Wastes (Management and Trans-boundary Movement) Rules, 2016. ONGC has entered into a rate contract with ONGC’s joint venture company ONGC Teri Biotech Limited (OTBL) for bioremediation of oily sludge using Oil Zapper technique. Hazardous waste such as spent / used oil, chemical containers, linings etc. are disposed of through CPCB/ SPCB authorized recyclers.</li>
            </ul>
            <h2>G. Paperless Office (Project DISHA)</h2>
            <ul>
              <li>The Paperless Office initiative of ONGC is another giant leap towards office automation and environmental protection. In line with the Government of India’s Digital India Campaign, all our offices are functioning in paperless mode through Digitization, Integration and Standardization by Harnessing Automation (DISHA). This has transformed the business process of our work-centers into digital processing of files; making seamless electronic transfer of files across 400 plus operational establishments’ on-land and in the high seas across the nation at the click of a mouse; saving a lot of time, space, money spent on cartridges, printer and paper while setting a new standard in efficiency, accountability and transparency of the organization. This initiative alone saves thousands of tress from cutting down every year from our land for paper making.</li>
            </ul>
            <h2>H. Green Initiatives</h2>
            <ul>
              <li>ONGC group regularly carry out tree plantation initiatives pan India around its project sites. Green belts are developed and maintained around its Installations and operational areas to retain the biodiversity of the surrounding areas, ensuring compliance with various regulations. Tree plantation is carried out using native varieties of the flora to ensure that they are not invasive in the region they are being planted and the bio geo-climatic conditions are suitable for the species to have a desirable rate of survival.</li>
            </ul>
            <h2>I. Biodiversity Conservation</h2>
            <ul>
              <li>At ONGC, conservation of flora and fauna is an ongoing process and it is achieved through various initiatives that the group has identified and developed. As per Wildlife Protection Act, 1972; for Schedule – I species found in operational area, ONGC submits conservation plan along with earmarked funds to State Wildlife Division prior to seeking Environment Clearance from Ministry of Environment, Forests & Climate Change. Prior to start of operations, while carrying out EIA studies funds are allocated under Environment Management Plan which includes mitigation measures towards bio-diversity conservation. ONGC continues to go beyond the regulatory compliance requirements when it comes to caring for biodiversity that surrounds its operations. ONGC beyond its business activities has undertaken projects related to Biodiversity conservation such as: Translocation of Eastern Swamp Deer from Kaziranga National Park to Manas National Park, Assam; Conservation & Preservation of Amur Falcon in Karbianglong, Assam; Conservation of White Winged Wood Duck in Assam & Arunachal Pradesh; Preservation of Endangered Western Hoolock Gibbon in Khasi Hills of Meghalaya.</li>
            </ul>
            <p>ONGC pro-actively manages its environmental impacts throughout its value chain, right from research, development, production, sales and end use. Environmental protection is a crucial aspect of ONGC's sustainable development policy, and follows a universal approach to devise and implement operational strategies in a cognitive and accountable manner, while undertaking remedial measures whenever required. We also ensure proper compliance with environmental laws across our areas of operation. Numerous approaches, for instance, maintaining pollution inventories through monitoring and dissemination of data on ambient environment and pollution loads, cleaner production techniques backed by commitment from top management and environmental management systems based on continual environmental improvement, and entering into negotiated agreements and government-industry partnerships for achieving defined environmental goals are followed to create an atmosphere of proactive industrial environmental compliance.</p>
            <p>ONGC has been conferred with various Awards from credible organizations for excellence in Environmental performance, a testimony to showcase our commitment towards Environment protection and Sustainable development.</p>
            <img 
                src="/images/Award.jpg" 
                alt="Clean Development Mechanism" 
                style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
            />
            <p class="font-bold text-center text-red-800">Awards and Accolades won by ONGC</p>
          </LeftContent>
          <Sidebar>
            <ul className="sidebar-links">
              <li><a href="#" onClick={() => navigate('/carbon-management')}>Carbon Management</a></li>
              <li><a href="#" onClick={() => navigate('/oil-split-management')}>Oil Split Management</a></li>
              <li><a href="#" className="active">Environment</a></li>
              <li><a href="#" onClick={() => navigate('/clean-development-mechanism')}>Clean Development Mechanism</a></li>
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

export default Environment; 