import { Link } from "react-router-dom";
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* Info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby gastropub etsy cold-pressed ennui YOLO vegan. Semiotics hot chicken roof party
            pitchfork artisan bespoke man bun mixtape vaporware cardigan. La croix marfa jean shorts
            post-ironic coloring book chillwave farm-to-table. Truffaut stumptown 3 wolf moon banh
            mi yuccie hashtag farm-to-table ethical kale chips.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
