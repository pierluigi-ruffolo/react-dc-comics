import { arrey } from "./ArrayMain";
import CardMain from "./CardMain";

/* import CardMain from "./CardMain"; */
export default function Main() {
  console.log(arrey);
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
          {arrey.map((element) => (
            <div
              className="col-main-footer d-flex align-items-center"
              key={element.id}
            >
              <img src={element.img} alt="" className="mr-10" />
              <p className="color-white">{element.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
