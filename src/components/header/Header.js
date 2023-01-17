import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <div className="header">
      <DesktopHeader />
      <MobileHeader />
    </div>
  );
};

export default Header;
