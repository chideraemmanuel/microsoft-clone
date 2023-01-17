import surface from "../../assets/images/surface.webp";
import xbox from "../../assets/images/xbox.webp";
import windows from "../../assets/images/windows.webp";
import keyboardMouse from "../../assets/images/keyboard-mouse.webp";
import shop from "../../assets/images/shop.webp";

const Branches = () => {
  return (
    <section className="branches">
      <div className="branch">
        <img src={surface} alt="Microsoft Surface icon" />
        <a href="/">Shop Surface devices</a>
      </div>
      <div className="branch">
        <img src={xbox} alt="Microsoft Xbox icon" />
        <a href="/">Buy Xbox games and consoles</a>
      </div>
      <div className="branch">
        <img src={windows} alt="Microsoft Windows icon" />
        <a href="/">Choose your Microsoft 365</a>
      </div>
      <div className="branch">
        <img src={windows} alt="Microsoft Windows icon" />
        <a href="/">Get Windows 11</a>
      </div>
      <div className="branch">
        <img src={keyboardMouse} alt="Keyboard and mouse icon" />
        <a href="/">Shop for accessories</a>
      </div>
      <div className="branch">
        <img src={shop} alt="Briefcase icon" />
        <a href="/">Shop Business</a>
      </div>
    </section>
  );
};

export default Branches;
