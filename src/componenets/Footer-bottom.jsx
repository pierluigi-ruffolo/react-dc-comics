import ImgFacebook from "../assets/img/footer-facebook.png";
import ImgPeriscope from "../assets/img/footer-periscope.png";
import ImgPinte from "../assets/img/footer-pinterest.png";
import ImgTwitter from "../assets/img/footer-twitter.png";
import ImgYouTube from "../assets/img/footer-youtube.png";

export default function FooterBottom() {
  return (
    <div className="bg-grey footer-bottom">
      <div className="container d-flex pt-50 pb-50 space-between">
        <button className="btn-footer">SIGN-UP-NOW</button>
        <div className="d-flex gap-15 width-40 align-items-center">
          <p class="cl-blue">FOLLOW US</p>

          <img src={ImgFacebook} alt="" />
          <img src={ImgTwitter} alt="" />
          <img src={ImgYouTube} alt="" />
          <img src={ImgPinte} alt="" />
          <img src={ImgPeriscope} alt="" />
        </div>
      </div>
    </div>
  );
}
