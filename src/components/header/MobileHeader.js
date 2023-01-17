import logo from "../../assets/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscSearch, VscChromeClose } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const MobileHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleDropdown = (e) => {
    // setDropdownActive(!dropdownActive);
    e.target.classList.toggle("active");
  };

  return (
    <div className="mobile-header">
      <div className="mobile-header-flex mobile-container">
        <div className="mobile-header-left">
          {!mobileMenu ? (
            <RxHamburgerMenu onClick={() => setMobileMenu(!mobileMenu)} />
          ) : (
            <VscChromeClose onClick={() => setMobileMenu(!mobileMenu)} />
          )}
          <VscSearch />
        </div>

        <div className="mobile-header-center">
          <a href="/">
            <img src={logo} alt="Microsoft logo" className="mobile-logo" />
          </a>
        </div>

        <div className="mobile-header-right">
          <a href="/">
            <BsCart3 />
          </a>
          <a href="/" className="sign-in-icon">
            <AiOutlineUserAdd />
          </a>
        </div>
      </div>

      <ul className={!mobileMenu ? "mobile-menu" : "mobile-menu active"}>
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
        {/* DROPDOWNS */}
        <li className="dropdown-header" onClick={(e) => toggleDropdown(e)}>
          <span>
            <p>Software</p>
            <FaChevronDown />
          </span>
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
        </li>

        <li className="dropdown-header" onClick={(e) => toggleDropdown(e)}>
          <span>
            <p>PCs & Devices</p>
            <FaChevronDown />
          </span>
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
        </li>

        <li className="dropdown-header" onClick={(e) => toggleDropdown(e)}>
          <span>
            <p>Entertainment</p>
            <FaChevronDown />
          </span>
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
        </li>

        <li className="dropdown-header" onClick={(e) => toggleDropdown(e)}>
          <span>
            <p>Business</p>
            <FaChevronDown />
          </span>
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
        </li>

        <li className="dropdown-header" onClick={(e) => toggleDropdown(e)}>
          <span>
            <p>Developer & IT</p>
            <FaChevronDown />
          </span>
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
        </li>

        <li className="dropdown-header" onClick={(e) => toggleDropdown(e)}>
          <span>
            <p>Other</p>
            <FaChevronDown />
          </span>
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
        </li>

        <li>
          <a href="/">View Sitemap</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileHeader;
