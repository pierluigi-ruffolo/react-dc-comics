import img from "../assets/img/dc-logo-bg.png";

export default function FooterTop() {
  return (
    <div className="footer-top pb-30 pt-30">
      <div className="container d-flex space-between conteiner-list">
        <div className="d-flex gap-15 list-footer">
          <div className="col">
            <ul>
              DC COMICS
              <li>
                <a href="#">characters</a>
              </li>
              <li>
                <a href="#">comics</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Tv</a>
              </li>
              <li>
                <a href="#">Games</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
            <ul>
              SHOP
              <li>
                <a href="#">Shop DC</a>
              </li>
              <li>
                <a href="#">Shop Dc Collectibles</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              DC
              <li>
                <a href="#">Terms Of use</a>
              </li>
              <li>
                <a href="#">Privacy policy (new)</a>
              </li>
              <li>
                <a href="#">ad choices</a>
              </li>
              <li>
                <a href="#">advertisting</a>
              </li>
              <li>
                <a href="#">jobs</a>
              </li>
              <li>
                <a href="#">sudscriptions</a>
              </li>
              <li>
                <a href="#">talent workshops</a>
              </li>
              <li>
                <a href="#">CPSC certificates</a>
              </li>
              <li>
                <a href="#">Ratings</a>
              </li>
              <li>
                <a href="#">Shop help</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul></ul>
          </div>
          <div className="col">
            <ul>
              SITES
              <li>
                <a href="#">DC</a>
              </li>
              <li>
                <a href="#">MAD magazine</a>
              </li>
              <li>
                <a href="#">DC kids</a>
              </li>
              <li>
                <a href="#">DC universe</a>
              </li>
              <li>
                <a href="#">Dc power visa</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="conteiner-img-footer">
          <img className="img-footer-top" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
