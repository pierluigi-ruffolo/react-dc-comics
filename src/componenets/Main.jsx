import ImgByComics from "../assets/img/buy-comics-digital-comics.png";
import ImgMerchandise from "../assets/img/buy-comics-merchandise.png";
import ImgShop from "../assets/img/buy-comics-shop-locator.png";
import ImgSudscriptions from "../assets/img/buy-comics-subscriptions.png";
import ImgPower from "../assets/img/buy-dc-power-visa.svg";
export default function Main() {
  return (
    <main>
      <div className="bg-black pt-50 pb-50">
        <div className="container">
          <h2 className="color-white">Content goes here</h2>
        </div>
      </div>
      <div class="bg-blue pt-50 pb-50">
        <div className="container d-flex wrap">
          <div className="col-main d-flex align-items-center">
            <img src={ImgByComics} alt="" className="mr-10" />
            <p className="color-white">DIGITAL COMICS</p>
          </div>
          <div className="col-main d-flex align-items-center">
            <img src={ImgMerchandise} alt="" className="mr-10" />
            <p className="color-white">DIGITAL COMICS</p>
          </div>
          <div className="col-main d-flex align-items-center">
            <img src={ImgSudscriptions} alt="" className="mr-10" />
            <p className="color-white">DIGITAL COMICS</p>
          </div>
          <div className="col-main d-flex align-items-center">
            <img src={ImgShop} alt="" className="mr-10" />
            <p className="color-white">DIGITAL COMICS</p>
          </div>
          <div className="col-main d-flex align-items-center">
            <img src={ImgPower} alt="" className="mr-10" />
            <p className="color-white">DIGITAL COMICS</p>
          </div>
        </div>
      </div>
    </main>
  );
}
