import logo from "../../assets/images/logo.png";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";

const DesktopHeader = () => {
  const [moreDropdown, setMoreDropdown] = useState(false);
  const [allMicrosoftDropdown, setAllMicrosoftDropdown] = useState(false);

  const toggleMoreDropdown = () => {
    setMoreDropdown(!moreDropdown);
    setAllMicrosoftDropdown(false);
  };

  const toggleAllMicrosoftDropdown = () => {
    setAllMicrosoftDropdown(!allMicrosoftDropdown);
    setMoreDropdown(false);
  };

  return (
    <div className="desktop-header container">
      <div className="desktop-header-left">
        <a href="/" className="logo">
          <img src={logo} alt="Microsoft logo" />
        </a>
        <ul className="nav-links">
          <li>
            <a href="/">Microsoft 365</a>
          </li>
          <li>
            <a href="/">Teams</a>
          </li>
          <li>
            <a href="/">Windows</a>
          </li>
          <li>
            <a href="/">Surface</a>
          </li>
          <li>
            <a href="/">Xbox</a>
          </li>
          <li>
            <a href="/">Deals</a>
          </li>
          <li>
            <a href="/">Small Business</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>

          <li
            className={
              !moreDropdown
                ? "small-desktop-dropdown"
                : "small-desktop-dropdown active"
            }
            onClick={() => toggleMoreDropdown()}
          >
            <span>
              <span>More</span> <FaChevronDown />
            </span>
            <ul>
              <li>
                <a href="/">Deals</a>
              </li>
              <li>
                <a href="/">Small Business</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">Xbox</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Right side */}
      <div className="desktop-header-right">
        <ul>
          <li
            className={
              !allMicrosoftDropdown ? "all-microsoft" : "all-microsoft active"
            }
            onClick={() => toggleAllMicrosoftDropdown()}
          >
            <p>
              <span>All Microsoft</span> <FaChevronDown />
            </p>
            <div className="all-microsoft-dropdown">
              <div className="software">
                <span className="dropdown-header">Software</span>
                <ul>
                  <li>
                    <a href="/">Windows Apps</a>
                  </li>
                  <li>
                    <a href="/">OneDrive</a>
                  </li>
                  <li>
                    <a href="/">Outlook</a>
                  </li>
                  <li>
                    <a href="/">Skype</a>
                  </li>
                  <li>
                    <a href="/">OneNote</a>
                  </li>
                  <li>
                    <a href="/">Microsoft Teams</a>
                  </li>
                  <li>
                    <a href="/">Microsoft Edge</a>
                  </li>
                </ul>
              </div>

              <div className="pc-devices">
                <span className="dropdown-header">PCs & Devices</span>
                <ul>
                  <li>
                    <a href="/">Computers</a>
                  </li>
                  <li>
                    <a href="/">Shop Xbox</a>
                  </li>
                  <li>
                    <a href="/">Accessories</a>
                  </li>
                  <li>
                    <a href="/">VR & mixed reality</a>
                  </li>
                  <li>
                    <a href="/">Phones</a>
                  </li>
                </ul>
              </div>

              <div className="entertainment">
                <span className="dropdown-header">Entertainment</span>
                <ul>
                  <li>
                    <a href="/">Xbox Game Pass Ultimate</a>
                  </li>
                  <li>
                    <a href="/">PC Game Pass</a>
                  </li>
                  <li>
                    <a href="/">Xbox games</a>
                  </li>
                  <li>
                    <a href="/">PC games</a>
                  </li>
                  <li>
                    <a href="/">Windows digital games</a>
                  </li>
                  <li>
                    <a href="/">Movies & TV</a>
                  </li>
                </ul>
              </div>

              <div className="business">
                <span className="dropdown-header">Business</span>
                <ul>
                  <li>
                    <a href="/">Microsoft Cloud</a>
                  </li>
                  <li>
                    <a href="/">Microsoft Security</a>
                  </li>
                  <li>
                    <a href="/">Dynamic 365</a>
                  </li>
                  <li>
                    <a href="/">Microsoft 365 for business</a>
                  </li>
                  <li>
                    <a href="/">Microsoft Power Platform</a>
                  </li>
                  <li>
                    <a href="/">Windows 365</a>
                  </li>
                  <li>
                    <a href="/">Microsoft industry</a>
                  </li>
                  <li>
                    <a href="/">Small Business</a>
                  </li>
                </ul>
              </div>

              <div className="developer">
                <span className="dropdown-header">Developer & IT</span>
                <ul>
                  <li>
                    <a href="/">Azure</a>
                  </li>
                  <li>
                    <a href="/">Developer Center</a>
                  </li>
                  <li>
                    <a href="/">Documentation</a>
                  </li>
                  <li>
                    <a href="/">Microsoft Learn</a>
                  </li>
                  <li>
                    <a href="/">Microsoft Tech Community</a>
                  </li>
                  <li>
                    <a href="/">Azure Marketplace</a>
                  </li>
                  <li>
                    <a href="/">AppSource</a>
                  </li>
                  <li>
                    <a href="/">Visual Studio</a>
                  </li>
                </ul>
              </div>

              <div className="other">
                <span className="dropdown-header">Other</span>
                <ul>
                  <li>
                    <a href="/">Microsoft Rewards</a>
                  </li>
                  <li>
                    <a href="/">Free downloads and security</a>
                  </li>
                  <li>
                    <a href="/">Education</a>
                  </li>
                  <li>
                    <a href="/">Virtual workshops and training</a>
                  </li>
                  <li>
                    <a href="/">Gift cards</a>
                  </li>
                  <li>
                    <a href="/">Students and parents deals</a>
                  </li>
                  <li>
                    <a href="/">Licensing</a>
                  </li>
                  <li>
                    <a href="/">Microsoft Experience Center</a>
                  </li>
                </ul>
              </div>

              <a href="/" className="sitemap">
                <span>VIEW SITEMAP</span> <FaChevronRight />
              </a>
            </div>
          </li>

          <li className="search">
            <a href="/">
              <p>
                <span>Search</span>
              </p>
              <VscSearch />
            </a>
          </li>

          <li className="cart">
            <a href="/">
              <p>
                <span>Cart</span>
              </p>
              <BsCart3 />
            </a>
          </li>

          <li className="sign-in">
            <a href="/">
              <p>Sign in</p>
              <AiOutlineUserAdd />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopHeader;
