import img from "../assets/img/dc-logo-bg.png";

export default function FooterTop() {
  return (
    <div className="footer-top pb-50 pt-50">
      <div className="container d-flex space-between conteiner-list">
        <div className="d-flex gap-15 list-footer">
          <div className="col">
            <ul>
              DC COMICS
              <li>
                <a>characters</a>
              </li>
              <li>
                <a>comics</a>
              </li>
              <li>
                <a>Movies</a>
              </li>
              <li>
                <a>Tv</a>
              </li>
              <li>
                <a>Games</a>
              </li>
              <li>
                <a>Videos</a>
              </li>
              <li>
                <a>News</a>
              </li>
            </ul>
            <ul>
              SHOP
              <li>
                <a>Shop DC</a>
              </li>
              <li>Shop Dc Collectibles</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              DC
              <li>
                <a>Terms Of use</a>
              </li>
              <li>
                <a>Privacy policy (new)</a>
              </li>
              <li>
                <a>ad choices</a>
              </li>
              <li>
                <a>advertisting</a>
              </li>
              <li>
                <a>jobs</a>
              </li>
              <li>
                <a>sudscriptions</a>
              </li>
              <li>
                <a>talent workshops</a>
              </li>
              <li>
                <a>CPSC certificates</a>
              </li>
              <li>
                <a>Ratings</a>
              </li>
              <li>
                <a>Shop help</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
            <ul></ul>
          </div>
          <div className="col">
            <ul>
              SITES
              <li>
                <a>DC</a>
              </li>
              <li>
                <a>MAD magazine</a>
              </li>
              <li>
                <a>DC kids</a>
              </li>
              <li>
                <a>DC universe</a>
              </li>
              <li>
                <a>Dc power visa</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="conteiner-img-footer">
          <img class="img-footer-top" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
