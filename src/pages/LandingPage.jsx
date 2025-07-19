import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchStockPrices } from '../utils/stockApi';

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  background: white;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.875rem;
`;

const ONGCTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #b91c1c;
  font-weight: bold;
  
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
  
  .company-name {
    font-size: 0.75rem;
    color: #374151;
    font-weight: normal;
    line-height: 1.2;
  }
`;

const StockInfo = styled.div`
  color: #4b5563;
  text-align: center;
  
  .stock-prices {
    font-weight: 600;
    margin-bottom: 0.25rem;
    font-size: 0.9rem;
  }
  
  .bse-price {
    color: #059669;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background: rgba(5, 150, 105, 0.1);
  }
  
  .nse-price {
    color: #dc2626;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background: rgba(220, 38, 38, 0.1);
  }
  
  .datetime {
    font-size: 0.75rem;
    color: #6b7280;
    font-weight: 500;
  }
`;

const UpdateInfo = styled.div`
  text-align: right;
  font-size: 0.75rem;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  background: #f3f4f6;
  font-size: 0.875rem;
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;
  
  button {
    background: none;
    border: none;
    color: #dc2626;
    text-decoration: none;
    font-size: 0.875rem;
    cursor: pointer;
    padding: 0;
    font-weight: 500;
    height: 2.2rem;
    line-height: 2.2rem;
    display: inline-block;
    vertical-align: middle;
    &:hover {
      color: #b91c1c;
      text-decoration: underline;
    }
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchInput = styled.input`
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
`;

const HeroSection = styled.section`
  position: relative;
  height: 24rem;
  background: linear-gradient(135deg, #8B4513, #A0522D);
  overflow: hidden;
`;

const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const VideoText = styled.p`
  font-size: 2rem;
  font-weight: 300;
  color: white;
  text-align: center;
  
  span {
    color: #dc2626;
    font-weight: 600;
  }
`;

const CardsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 2rem;
  background: white;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  position: relative;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  border: 2px solid #ddd;
  background: #f0f0f0;
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;

const CardTitle = styled.h3`
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CardButton = styled.button`
  background: #dc2626;
  color: white;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  
  &:hover {
    background: #b91c1c;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-size: 0.875rem;
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
`;

const FooterList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  li {
    margin: 0;
    display: flex;
    align-items: center;
    
    &:not(:last-child)::after {
      content: '|';
      color:rgb(0, 0, 0);
      margin: 0 0.75rem;
      font-weight: 300;
    }
  }
  
  button {
    background: none;
    border: none;
    color: #374151;
    text-decoration: none;
    font-size: 0.875rem;
    cursor: pointer;
    padding: 0;
    
    &:hover {
      color: #dc2626;
      text-decoration: underline;
    }
  }
`;

const LoginButton = styled.button`
  width: auto;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(90deg, #dc2626 60%, #b91c1c 100%);
  color: #fff;
  border: none;
  border-radius: 999px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s cubic-bezier(.4,0,.2,1);
  margin-top: 0;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(220, 38, 38, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.02em;

  &:hover, &:focus {
    background: linear-gradient(90deg, #b91c1c 60%, #dc2626 100%);
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 6px 24px rgba(220, 38, 38, 0.18);
    color: #fff;
    outline: none;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 1px 4px rgba(220, 38, 38, 0.10);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 0;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  z-index: 10;
  min-width: 220px;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  a {
    color: #dc2626;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    font-weight: 500;
    border-left: 3px solid transparent;
    transition: all 0.2s;
    background: none;
    cursor: pointer;
    &:hover {
      background: #f3f4f6;
      color: #b91c1c;
      border-left-color: #dc2626;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalContent = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  padding: 2.5rem 2rem 2rem 2rem;
  min-width: 340px;
  max-width: 95vw;
  text-align: center;
  position: relative;
`;
const ModalTitle = styled.h2`
  color: #b91c1c;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;
const ModalButton = styled.button`
  display: block;
  width: 100%;
  margin: 0.5rem 0;
  padding: 1rem 0;
  background: #dc2626;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #b91c1c;
  }
`;
const ModalClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #b91c1c;
  cursor: pointer;
`;

// Add ExploreUs section styled-components
const ExploreSection = styled.section`
  background: #fff;
  padding: 3rem 0 3.5rem 0;
`;
const ExploreTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2.5rem;
  letter-spacing: 0.01em;
`;
const ExploreGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const ExploreCard = styled.div`
  position: relative;
  height: 16rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  background: #eee;
  transition: box-shadow 0.2s;
  &:hover, &:focus-within {
    box-shadow: 0 8px 32px rgba(0,0,0,0.14);
  }
  &:hover img, &:focus-within img {
    transform: scale(1.07);
    filter: brightness(0.85);
  }
  &:hover .explore-overlay, &:focus-within .explore-overlay {
    opacity: 1;
    pointer-events: auto;
  }
`;
const ExploreImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s cubic-bezier(.4,0,.2,1), filter 0.25s;
`;
const ExploreOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(24, 24, 24, 0.82);
  color: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.28s cubic-bezier(.4,0,.2,1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  font-size: 1.05rem;
  line-height: 1.6;
  text-align: left;
  z-index: 2;
`;
const ExploreCardText = styled.div`
  position: absolute;
  left: 1.25rem;
  bottom: 1.25rem;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
`;
const ExploreCardNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
const ExploreCardCaption = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

// Sustainability Section styled-components
const SustainabilitySection = styled.section`
  position: relative;
  background: url('/images/sustainability.jpg') center/cover no-repeat;
  color: #fff;
`;
const SustainabilityOverlay = styled.div`
  background: rgba(0,0,0,0.42);
  width: 100%;
  min-height: 100%;
  padding: 4rem 0;
  backdrop-filter: blur(6px);
`;
const SustainabilityTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;
const SustainabilityGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const SustainabilityBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SustainabilityIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
`;
const SustainabilityStat = styled.p`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;
const SustainabilityDesc = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;
// Sustainability Carousel styled-components
const SustainabilityCarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;
const SustainabilityCarouselInner = styled.div`
  display: flex;
  transition: ${(props) => (props.animate ? 'transform 0.7s cubic-bezier(.4,0,.2,1)' : 'none')};
  will-change: transform;
`;
const SustainabilityCarouselBlock = styled(SustainabilityBlock)`
  min-width: 0;
  flex: 0 0 100%;
  max-width: 100%;
  @media (min-width: 768px) {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
`;

const FooterSection = styled.footer`
  background: #f3f4f6;
  padding: 3rem 0;
`;
const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 0 1.5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const FooterCol = styled.div``;
const FooterColTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid #222;
  width: max-content;
`;
const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: #374151;
  li {
    margin-bottom: 0.5rem;
  }
  a {
    color: #374151;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const FooterContact = styled.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.7;
`;
const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.75rem;
  a img {
    width: 24px;
    height: 24px;
    display: block;
  }
`;
const FooterMap = styled.iframe`
  width: 100%;
  height: 16rem;
  border-radius: 0.5rem;
  border: none;
`;

const SearchDropdown = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  z-index: 100;
  padding: 0.5rem 0;
  max-height: 260px;
  overflow-y: auto;
`;
const SearchResult = styled.div`
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  color: #222;
  font-size: 1rem;
  &:hover {
    background: #f3f4f6;
    color: #b91c1c;
  }
`;
const SearchWrapper = styled.div`
  position: relative;
  width: 200px;
`;

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [stockPrices, setStockPrices] = useState({
    bse: { price: 245.01, change: 0 },
    nse: { price: 245.01, change: 0 }
  });
  const [showSustainabilityMenu, setShowSustainabilityMenu] = useState(false);
  const [showCSRMenu, setShowCSRMenu] = useState(false);
  const [showMediaMenu, setShowMediaMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // Update date/time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Fetch stock prices (simulated real-time updates)
  useEffect(() => {
    const updateStockPrices = async () => {
      try {
        const stockData = await fetchStockPrices();
        setStockPrices({
          bse: stockData.bse,
          nse: stockData.nse
        });
      } catch (error) {
        console.error('Error fetching stock prices:', error);
      }
    };

    // Initial fetch
    updateStockPrices();

    // Update every 30 seconds
    const stockTimer = setInterval(updateStockPrices, 30000);

    return () => clearInterval(stockTimer);
  }, []);

  const formatDateTime = (date) => {
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }) + ' ' + date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleAboutUs = () => {
    setShowAboutMenu((prev) => !prev);
  };
  const handleAboutNav = (route) => () => {
    setShowAboutMenu(false);
    navigate(route);
  };

  const handleNetZero = () => {
    navigate('/net-zero');
  };

  const handleSustainability = () => {
    setShowSustainabilityMenu((prev) => !prev);
  };
  const handleCSR = () => setShowCSRMenu((prev) => !prev);
  const handleMedia = () => setShowMediaMenu((prev) => !prev);
  const handleCSRNav = (route) => () => {
    setShowCSRMenu(false);
    navigate(route);
  };
  const handleNavLink = (route) => () => {
    setShowSustainabilityMenu(false);
    navigate(route);
  };
  const handleMediaNav = (route) => () => {
    setShowMediaMenu(false);
    navigate(route);
  };

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.style.display = 'none';
  };

  const handleImageLoad = (e) => {
    console.log('Image loaded successfully:', e.target.src);
  };

  // Sustainability blocks data
  const sustainabilityBlocks = [
    {
      icon: "https://ongcindia.com/documents/77751/38658701/sustainability1.png?t=1684749189236",
      stat: "36.37Mw",
      desc: "Total installed Solar Power Plant in ONGC till Jan 2023",
    },
    {
      icon: "https://ongcindia.com/documents/77751/38658701/sustainability3.png?t=1684749187954",
      stat: "153.9 MW",
      desc: "Total installed Wind Power Plant in ONGC till Jan 2023",
    },
    {
      icon: "https://ongcindia.com/documents/77751/38658701/sustainability6.png?t=1684749187324",
      stat: "35.4723MU",
      desc: "Total Solar Energy Generated by ONGC Plants in 2022–23 till Jan 2023",
    },
    {
      icon: "https://ongcindia.com/documents/77751/38658701/sustainability2.png?t=1684749186201",
      stat: "340.74MU",
      desc: "of energy saved due to energy efficiency initiatives",
    },
  ];
  const [sustainIndex, setSustainIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const blockCount = sustainabilityBlocks.length;
  const carouselRef = useRef();
  const [pendingReset, setPendingReset] = useState(false);
  const autoSlideRef = useRef();
  const pauseTimeoutRef = useRef();

  // Auto-slide with pause/resume
  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setAnimate(true);
      setSustainIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(autoSlideRef.current);
  }, []);

  // Manual navigation handlers
  const pauseAndResumeAutoSlide = () => {
    clearInterval(autoSlideRef.current);
    clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      autoSlideRef.current = setInterval(() => {
        setAnimate(true);
        setSustainIndex((prev) => prev + 1);
      }, 4000);
    }, 5000);
  };
  const handlePrev = () => {
    pauseAndResumeAutoSlide();
    if (sustainIndex === 0) {
      setAnimate(false);
      setSustainIndex(blockCount);
      setTimeout(() => {
        setAnimate(true);
        setSustainIndex(blockCount - 1);
      }, 20);
    } else {
      setAnimate(true);
      setSustainIndex((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    pauseAndResumeAutoSlide();
    setAnimate(true);
    setSustainIndex((prev) => prev + 1);
  };

  // Handle seamless looping (reset only in effect)
  useEffect(() => {
    if (sustainIndex === blockCount) {
      // After animation, reset to 0 without animation
      const timeout = setTimeout(() => {
        setAnimate(false);
        setSustainIndex(0);
        setTimeout(() => setAnimate(true), 20);
      }, 700); // match transition duration
      return () => clearTimeout(timeout);
    }
  }, [sustainIndex, blockCount]);

  // Calculate transform
  const transformX = `translateX(-${sustainIndex * (100/3)}%)`;

  const searchableItems = [
    { label: 'About Us', route: '/about' },
    { label: 'Vision and Mission', route: '/vision-mission' },
    { label: 'Annual Reports', route: '/annual-reports' },
    { label: 'Sustainability Reports', route: '/sustainability-reports' },
    { label: 'Human Rights Policy', route: '/human-rights-policy' },
    { label: 'Publications', route: '/media/publication' },
    { label: 'Gallery', route: '/media/gallery' },
    { label: 'News and Recent Updates', route: '/media/news' },
    // ...add more as needed
  ];

  const filteredItems = searchableItems.filter(item =>
    item.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container>
      {/* Header Bar */}
      <Header>
        <ONGCTitle>
          <img src="/images/logo.png" alt="ONGC Logo" />
          <div>
            <div>ONGC</div>
            <div className="company-name">Oil and Natural Gas Corporation Limited</div>
          </div>
        </ONGCTitle>
        <StockInfo>
          <div className="stock-prices">
            <span className="bse-price">
              BSE - ₹{stockPrices.bse.price} 
              {stockPrices.bse.change > 0 ? '+' : ''}{stockPrices.bse.change > 0 ? '▲' : stockPrices.bse.change < 0 ? '▼' : ''} {stockPrices.bse.change} ({stockPrices.bse.changePercent > 0 ? '+' : ''}{stockPrices.bse.changePercent}%)
            </span>
            {' | '}
            <span className="nse-price">
              NSE - ₹{stockPrices.nse.price}
              {stockPrices.nse.change > 0 ? '+' : ''}{stockPrices.nse.change > 0 ? '▲' : stockPrices.nse.change < 0 ? '▼' : ''} {stockPrices.nse.change} ({stockPrices.nse.changePercent > 0 ? '+' : ''}{stockPrices.nse.changePercent}%)
            </span>
          </div>
          <div className="datetime">
            {formatDateTime(currentDateTime)}
          </div>
        </StockInfo>
      </Header>

      {/* Navigation Bar */}
      <Navigation>
        <NavGroup>
          <NavLinks>
            <button
              onClick={handleAboutUs}
              onBlur={() => setTimeout(() => setShowAboutMenu(false), 200)}
              style={{ position: 'relative' }}
            >
              About Us
              {showAboutMenu && (
                <DropdownMenu onMouseLeave={() => setShowAboutMenu(false)}>
                  <a onClick={handleAboutNav('/about')}>ONGC at a Glance</a>
                  <a onClick={handleAboutNav('/group-of-companies')}>ONGC Group of Companies</a>
                  <a onClick={handleAboutNav('/vision-mission')}>Vision and Mission</a>
                  <a onClick={handleAboutNav('/our-growth-story')}>Our Growth Story</a>
                </DropdownMenu>
              )}
            </button>
            <button onClick={handleNetZero}>Net Zero</button>
            <button
              onClick={handleSustainability}
              onBlur={() => setTimeout(() => setShowSustainabilityMenu(false), 200)}
              style={{ position: 'relative' }}
            >
              Sustainability
              {showSustainabilityMenu && (
                <DropdownMenu onMouseLeave={() => setShowSustainabilityMenu(false)}>
                  <a onClick={handleNavLink('/carbon-management')}>Carbon Management</a>
                  <a onClick={handleNavLink('/oil-split-management')}>Oil Split Management</a>
                  <a onClick={handleNavLink('/environment')}>Environment</a>
                  <a onClick={handleNavLink('/clean-development-mechanism')}>Clean Development Mechanism</a>
                </DropdownMenu>
              )}
            </button>
            <button
              onClick={handleCSR}
              onBlur={() => setTimeout(() => setShowCSRMenu(false), 200)}
              style={{ position: 'relative' }}
            >
              CSR
              {showCSRMenu && (
                <DropdownMenu onMouseLeave={() => setShowCSRMenu(false)} style={{ left: 0 }}>
                  <a onClick={handleCSRNav('/csr-vision-mission')}>CSR Vision and Mission</a>
                  <a onClick={handleCSRNav('/csr-signature-initiatives')}>Signature CSR Initiatives</a>
                </DropdownMenu>
              )}
            </button>
            <button
              onClick={handleMedia}
              onBlur={() => setTimeout(() => setShowMediaMenu(false), 200)}
              style={{ position: 'relative' }}
            >
              Media
              {showMediaMenu && (
                <DropdownMenu onMouseLeave={() => setShowMediaMenu(false)}>
                  <a onClick={handleMediaNav('/media/publication')}>Publication</a>
                  <a onClick={handleMediaNav('/media/gallery')}>Gallery</a>
                  <a onClick={handleMediaNav('/media/news')}>News & Recent Updates</a>
                </DropdownMenu>
              )}
            </button>
            <SearchWrapper>
              <SearchInput
                type="text"
                placeholder="Search..." 
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
              {searchValue && (
                <SearchDropdown>
                  {filteredItems.length === 0 ? (
                    <SearchResult>No results found</SearchResult>
                  ) : (
                    filteredItems.map(item => (
                      <SearchResult
                        key={item.label}
                        onClick={() => {
                          setSearchValue('');
                          if (item.route.startsWith('#')) {
                            document.querySelector(item.route).scrollIntoView({ behavior: 'smooth' });
                          } else {
                            navigate(item.route);
                          }
                        }}
                      >
                        {item.label}
                      </SearchResult>
                    ))
                  )}
                </SearchDropdown>
              )}
            </SearchWrapper>
          </NavLinks>
          <LoginButton onClick={handleLogin}>Login</LoginButton>
        </NavGroup>
      </Navigation>

      {/* Hero Section */}
      <HeroSection>
        <HeroVideo 
          autoPlay 
          muted 
          loop 
          playsInline
          onError={(e) => {
            console.error('Video failed to load:', e.target.src);
            e.target.style.display = 'none';
          }}
          onLoadStart={() => console.log('Video loading started')}
        >
          <source src="/documents/77751/38658701/ONGC-Indian-Energy-Independence-2_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </HeroVideo>
      </HeroSection>

      {/* Cards Section */}
      <CardsSection>
        {/* Card 1 */}
        <Card onClick={() => navigate('/vision-mission')} style={{ cursor: 'pointer' }}>
          <CardImage 
            src="https://picsum.photos/600/400?random=1" 
            alt="Big Vision"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
          <CardContent>
            <CardTitle>BIG VISION FOR BIG FUTURE</CardTitle>
            <CardButton>Know More</CardButton>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card onClick={() => navigate('/sea-survival-training')} style={{ cursor: 'pointer' }}>
          <CardImage 
            src="https://picsum.photos/600/400?random=2" 
            alt="Sea Survival"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
          <CardContent>
            <CardTitle>A World Class Sea Survival Centre</CardTitle>
            <CardButton>Know More</CardButton>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card onClick={() => navigate('/technology')} style={{ cursor: 'pointer' }}>
          <CardImage 
            src="https://picsum.photos/600/400?random=3" 
            alt="Technology Future"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
          <CardContent>
            <CardTitle>TECHNOLOGY FOR THE FUTURE</CardTitle>
            <CardButton>Know More</CardButton>
          </CardContent>
        </Card>
      </CardsSection>

      {/* Footer Links */}
      <Footer>
        <FooterList>
          <li><button onClick={() => navigate('/media/publication')}>Publications</button></li>
          <li><button onClick={() => navigate('/annual-reports')}>Annual Reports</button></li>
          <li><button onClick={() => navigate('/sustainability-reports')}>Sustainability Reports</button></li>
          <li><button onClick={() => navigate('/human-rights-policy')}>Human Rights Policy</button></li>
        </FooterList>
      </Footer>
      {/* EXPLORE US Section */}
      <ExploreSection>
        <ExploreTitle>EXPLORE US</ExploreTitle>
        <ExploreGrid>
          <ExploreCard tabIndex={0}>
            <ExploreImage src="/images/Explore_1.jpg" alt="Worker" />
            <ExploreCardText>
              <ExploreCardNumber>27,000+</ExploreCardNumber>
              <ExploreCardCaption>Total Workforce</ExploreCardCaption>
            </ExploreCardText>
            <ExploreOverlay className="explore-overlay">
              A team comprising more than 27,000 dedicated professionals toil round the clock to amplify the performance figures of ONGC’s exploration and production activities of oil & gas and related oil-field services. Needless to emphasize, this has been made possible by the men & women behind the machines who have built & nurtured a world-class human capital poised for leadership in the energy business.
            </ExploreOverlay>
          </ExploreCard>
          <ExploreCard>
            <ExploreImage src="/images/Explore_2.jpg" alt="Platform" />
            <ExploreCardText>
              <ExploreCardNumber>1,12,464 Million</ExploreCardNumber>
              <ExploreCardCaption>Total Assets</ExploreCardCaption>
            </ExploreCardText>
            <ExploreOverlay className="explore-overlay">
              Despite facing an economic slowdown owing to the COVID-19 pandemic & Ukraine-Russia conflict, ONGC manifested its resilience & outstanding performance by posting its highest-ever net profit of Rs 403,057 million against Rs 112,464 million during FY'21. Oil & gas production (inclusive of Joint Ventures) stood at 43.39 MMTOE versus 45.35 MMTOE in the preceding fiscal year
            </ExploreOverlay>
          </ExploreCard>
          <ExploreCard>
            <ExploreImage src="/images/Explore_3.webp" alt="Production" />
            <ExploreCardText>
              <ExploreCardNumber>71%</ExploreCardNumber>
              <ExploreCardCaption>Total Production</ExploreCardCaption>
            </ExploreCardText>
            <ExploreOverlay className="explore-overlay">
              Being an integrated Oil & Gas Corporate displaying a dynamic in-house capability in all aspects of exploration & production business, ONGC contributes to around 70% of India's crude oil and around 84% of its natural gas production. Its structured & holistic approach is assured to play a major role in transforming the Maharatna into India's energy anchor.
            </ExploreOverlay>
          </ExploreCard>
          <ExploreCard>
            <ExploreImage src="/images/Explore_4.webp" alt="Countries" />
            <ExploreCardText>
              <ExploreCardCaption>Operating in</ExploreCardCaption>
              <ExploreCardNumber>15 Countries</ExploreCardNumber>
            </ExploreCardText>
            <ExploreOverlay className="explore-overlay">
              Our wholly-owned subsidiary & overseas arm, ONGC Videsh owns Participating Interests in 32 oil and gas assets across 15 countries. Being the second largest petroleum company of India in terms of reserves and production, next only to its parent company, ONGC Videsh registered production worth 12.330 MMTOE from overseas assets in FY 2021-22.
            </ExploreOverlay>
          </ExploreCard>
        </ExploreGrid>
      </ExploreSection>
      {/* Sustainability Section */}
      <SustainabilitySection>
        <SustainabilityOverlay>
          <SustainabilityTitle>Sustainability</SustainabilityTitle>
          <SustainabilityCarouselWrapper>
            <SustainabilityCarouselInner animate={animate} style={{ transform: transformX }} ref={carouselRef}>
              {[...sustainabilityBlocks, ...sustainabilityBlocks.slice(0,3)].map((block, idx) => (
                <SustainabilityCarouselBlock key={idx}>
                  <SustainabilityIcon src={block.icon} alt="Sustainability Icon" />
                  <SustainabilityStat>{block.stat}</SustainabilityStat>
                  <SustainabilityDesc>{block.desc}</SustainabilityDesc>
                </SustainabilityCarouselBlock>
              ))}
            </SustainabilityCarouselInner>
          </SustainabilityCarouselWrapper>
        </SustainabilityOverlay>
      </SustainabilitySection>
      {/* Footer Section */}
      <FooterSection>
        <FooterGrid>
          <FooterCol>
            <FooterColTitle>Other Links</FooterColTitle>
            <FooterLinks>
              <li><a href="#" onClick={() => navigate('/privacy-policy')}>Privacy Policy</a></li>
              <li><a href="#" onClick={() => navigate('/terms-of-use')}>Terms of Use</a></li>
              <li><a href="#" onClick={() => navigate('/disclaimer')}>Disclaimer</a></li>
            </FooterLinks>
          </FooterCol>
          <FooterCol>
            <FooterColTitle>Reach Us</FooterColTitle>
            <FooterContact>
              <strong>Registered Office:</strong><br />
              Plot No. 5A–5B Nelson Mandela Road, Vasant Kunj, New Delhi, 110070<br />
              <strong>Corporate Identity Number:</strong> L74899DL1993GOI054155<br />
              <strong>Telephone No.:</strong> 011-26750998;<br />
              <strong>Fax No.:</strong> 011-26750991 / 26129091<br />
              <strong>Grievances:</strong> <a href="https://grievance.ongc.co.in" style={{ color: '#2563eb', textDecoration: 'underline' }}>https://grievance.ongc.co.in</a>
            </FooterContact>
            <SocialIcons>
              <a href="https://www.facebook.com/ONGCLimited/"><img src="https://cdn-icons-png.flaticon.com/24/2111/2111393.png" alt="FB" /></a>
              <a href="https://www.instagram.com/ongcofficial/"><img src="https://cdn-icons-png.flaticon.com/24/2111/2111463.png" alt="Twitter" /></a>
              <a href="https://x.com/ONGC_"><img src="/images/twitter.png" alt="YT" /></a>
              <a href="https://in.linkedin.com/company/oilandnaturalgascorporation"><img src="https://cdn-icons-png.flaticon.com/24/1409/1409945.png" alt="LinkedIn" /></a>
            </SocialIcons>
          </FooterCol>
          <FooterCol>
            <FooterMap
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14019.465217793012!2d77.1555092!3d28.5236458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1b4272c6a87%3A0xa5026b9e3cf8bbf6!2sONGC%20Head%20Office!5e0!3m2!1sen!2sin!4v1658290372591!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="ONGC Head Office Map"
            />
          </FooterCol>
        </FooterGrid>
      </FooterSection>
    </Container>
  );
};

export default LandingPage; 