import ImgFacebook from "../assets/img/footer-facebook.png";
import ImgPeriscope from "../assets/img/footer-periscope.png";
import ImgPinte from "../assets/img/footer-pinterest.png";
import ImgTwitter from "../assets/img/footer-twitter.png";
import ImgYouTube from "../assets/img/footer-youtube.png";

export default function FooterBottom() {
  return (
    <div class="bg-grey footer-bottom">
      <div className="container d-flex pt-20 pb-20 space-between">
        <button className="btn-footer ">SIGN-UP-NOW</button>
        <div class="d-flex gap-15">
          <p>FOLLOW US</p>

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
