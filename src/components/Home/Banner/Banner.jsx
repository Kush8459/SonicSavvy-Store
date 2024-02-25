import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Let's put an end to your worries about wires hanging and getting
            tangled with BoAt Rockerz 400 and connect with any Bluetooth device,
            connect and play.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div
              onClick={() => navigate(`/category/1`)}
              className="banner-cta v2"
            >
              Shop Now
            </div>
          </div>
        </div>
        <img className="banner-img" alt="" src={BannerImg} />
      </div>
    </div>
  );
};

export default Banner;
