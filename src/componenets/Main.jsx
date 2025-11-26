import ImgByComics from "../assets/img/buy-comics-digital-comics.png";
import ImgMerchandise from "../assets/img/buy-comics-merchandise.png";
import ImgShop from "../assets/img/buy-comics-shop-locator.png";
import ImgSudscriptions from "../assets/img/buy-comics-subscriptions.png";
import ImgPower from "../assets/img/buy-dc-power-visa.svg";
import CardMain from "./CardMain";

/* import CardMain from "./CardMain"; */
export default function Main() {
  return (
    <main>
      <div className="hero"></div>
      <div className="pt-50 pb-50 bg-grey">
        <div className="container">
          <CardMain />
        </div>
      </div>
      <div className="bg-blue pt-50 pb-50">
        <div className="container d-flex wrap">
          <div className="col-main-footer d-flex align-items-center">
            <img src={ImgByComics} alt="" className="mr-10" />
            <p className="color-white">DIGITAL COMICS</p>
          </div>
          <div className="col-main-footer d-flex align-items-center">
            <img src={ImgMerchandise} alt="" className="mr-10" />
            <p className="color-white">DIGITAL COMICS</p>
          </div>
          <div className="col-main-footer d-flex align-items-center">
            <img src={ImgSudscriptions} alt="" className="mr-10" />
            <p className="color-white">DIGITAL COMICS</p>
          </div>
          <div className="col-main-footer d-flex align-items-center">
            <img src={ImgShop} alt="" className="mr-10" />
            <p className="color-white">DIGITAL COMICS</p>
          </div>
          <div className="col-main-footer d-flex align-items-center">
            <img src={ImgPower} alt="" className="mr-10" />
            <p className="color-white">DIGITAL COMICS</p>
          </div>
        </div>
      </div>
    </main>
  );
}
