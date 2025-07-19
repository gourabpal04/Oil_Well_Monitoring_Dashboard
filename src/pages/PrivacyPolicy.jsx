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

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return (
    <Container>
      <Hero>
        <HeroImage src="/images/Privacy_Policy.gif" alt="Privacy Policy Hero" />
      </Hero>
      <Breadcrumb>
        <a href="#" onClick={handleGoHome}>Home</a> › <span>Privacy Policy</span>
      </Breadcrumb>
      <MainContainer>
        <GoHomeButton onClick={handleGoHome}>Go Home</GoHomeButton>
        <SectionTitle>Privacy Policy</SectionTitle>
        <Content>
          <img 
            src="/images/Privacy_Policy.gif" 
            alt="Vision and Mission" 
            style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
          />
          <p>We respect the privacy of everyone who visits this site. Please read our Privacy Policy carefully so that you can understand how we collect and use the personal information that you provide to us.</p>
          <p>By submitting your personal data to us, you will be treated as having given your permission for disclosures referred to in this policy.</p>
          <h3>The Privacy Policy Covers...</h3>
          <p>This privacy policy covers our use of your personal information which is collected through or in connection with this site. For the purposes of this policy, "this site" means the top site, which links to other ONGC websites.</p>
          <p>Other ONGC websites may contain privacy policies which are different from this privacy policy. This privacy policy relates to the www.ongcindia.com website. On your journey around the ONGC websites please check the privacy policy of each website which you visit and do not assume that this privacy policy applies to all ONGC websites.</p>
          <h3>Special Notice - if you are under 13 years old</h3>
          <p>If you are under 13 years old please do not send us your personal information (for example, your name, address and email address). If you are under 13 years old and you wish to ask a question or use this site in anyway which requires you to submit your personal information please get your parent or guardian to do so on your behalf.</p>
          <h3>Information Collection And Use</h3>
          <h4>Collection of personal information</h4>
          <p>We collect and use personal information (including name, address, telephone number and email) in order to:</p>
          <ul>
            <li>Respond to queries or requests submitted by you</li>
            <li>Process orders or applications submitted by you</li>
            <li>Administer or otherwise carry out our obligations in relation to any agreement you have with us</li>
            <li>Anticipate and resolve problems with any goods or services supplied to you</li>
            <li>Create products or services that may meet your needs</li>
          </ul>
          <p>Except as set out in this privacy policy, we will not disclose any personally identifiable information without your permission unless we are legally entitled or required to do so (for example, if required to do so by legal process or for the purposes of prevention of fraud or other crime) or if we believe that such action is necessary to protect and/or defend our rights, property or personal safety and those of our users/customers etc.</p>
          <h4>Collection of non-personal information</h4>
          <p>We may automatically collect non-personal information about you such as the type of internet browsers you use or the website from which you linked to our site. We may also aggregate details which you have submitted to the site (for example, your age and the town where you live). You cannot be identified from this information and it is only used to assist us in providing an effective service on this website. We may from time to time supply third parties with this non-personal or aggregated data for uses in connection with this site.</p>
          <h4>Use of your personal information submitted to other websites</h4>
          <p>We cannot be responsible for the privacy policies and practices of other websites even if:</p>
          <ul>
            <li>You accessed the third party website using links from our website; or</li>
            <li>You linked to our website from a third party website.</li>
          </ul>
          <p>We recommend that you check the policy of each site you visit and contact the owner or operator of such website if you have any concerns or questions.</p>
          <h4>Submission of others' personal information</h4>
          <p>From time to time this site may ask you to provide personal details of your family or friends, for example, so that we can send them details of our products and services. Before providing such information, please ensure that you have obtained their consent to their personal data being used in this way. We will not use these details in any manner which is incompatible with this privacy policy.</p>
          <h3>Additional Information & Sharing Of Information</h3>
          <p>From time to time we would like to use your personal information for purposes other than as set out in the above section. We believe that these additional uses will be of benefit to you. However, we understand that you may not wish us to use your information in this way. We will not use your information for the purposes set out below if you have indicated that you do not wish us to use your information in this way when submitting the information.</p>
          <p>Additionally, if at any time you wish us to stop using your information for any or all of the below purposes, please let us know. We will stop the use of your information for such purposes as soon as it is reasonably possible to do so. In such case we will, however, continue to use your personal data for the purposes set out in the above section for as long as it is reasonable to do so.</p>
          <p>From time to time we would like to use the information you supply to us for:</p>
          <ul>
            <li>Market research and tracking of sales data</li>
            <li>Informing you about our products and services, which may include contacting you by telephone</li>
            <li>Giving the information to ONGC affiliate offices and companies to enable them to send you information which may be of interest to you</li>
          </ul>
          <p>In addition, from time to time we would like to give your name, address and e-mail and any other personal data you supply to us to selected third parties. These third parties may use this information for:</p>
          <ul>
            <li>Market research and tracking of sales data</li>
            <li>Sending you information about their products and services</li>
            <li>Giving the information to their affiliate offices and companies to enable them to send you information which may be of interest to you</li>
          </ul>
          <h3>Use Of Cookies</h3>
          <p>We may store some information (commonly known as a "cookie") on your computer when you look at our site. We are able to read these cookies for information purposes when you revisit our website. The type of information we collect as a result of a cookie being accepted by you is specific to your PC and includes the IP address, the date and time the PC visited the website, what parts of our website were looked at and whether the web pages requested were delivered successfully. This information is anonymous; it represents a computer rather than a person.</p>
          <p>We use the cookie information to improve our knowledge of the use of our website and to enable us to be able to ascertain whether the website is operating at an optimal level. This allows us to enhance our web offerings to you and to provide an enjoyable and an innovative online experience</p>
          <p>You can erase or block this information by changing the settings on your computer (please refer to your help screens or manuals). If you do erase or block this information you may not be able to utilise some features of the site</p>
          <h3>Chats, Message Boards, Newsgroups</h3>
          <p>If at any time this site offers any chat rooms, message board facilities, newsgroups etc. we may collect the information that you disclose. Such information will be used in accordance with this privacy policy. Please note that we cannot be responsible for other parties' use of the personal information which you make available to such third parties through any chat room, notice board, newsgroup etc. on this site. Please be careful about what personal information you disclose in this way.</p>
          <h3>Data Security</h3>
          <p>We have implemented technology and policies with the objective of protecting your privacy from unauthorised access and improper use and will update these measures as new technology becomes available, as appropriate.</p>
          <h3>Change In Privacy Policy</h3>
          <p>From time to time we may make changes to this privacy policy. If we make any substantial changes to this privacy policy and the way in which we use your personal data we will post these changes on this page and will do our best to notify you of any significant changes. Please check our privacy policy on a regular basis.</p>
          <p>If at any time you would like to contact www.ongcindia.com about our privacy policy, you can do so by emailing the Administrator at <a href="mailto:editorspeak@gmail.com">editorspeak@gmail.com</a></p>
        </Content>
      </MainContainer>
      <Footer>
        <p>© 2025 ONGC. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default PrivacyPolicy; 