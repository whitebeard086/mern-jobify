import Wrapper from "../assets/wrappers/BigSidebar";
import { Logo, NavLinks } from "../components";
import { useAppContext } from "../context/appContext";

const Navbar = () => {
  const { showSidebar } = useAppContext();

  return (
    <Wrapper>
      <div className={showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
