import { FaTimes } from "react-icons/fa";

import { Logo, NavLinks } from "../components";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SmallSidebar";

const Navbar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();

  return (
    <Wrapper>
      <div className={showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
        <div className="content">
          <button className="close-btn" type="button" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
