import { arrey } from "./ArrayMain";
import Card from "./Card";
import comics from "./comics";
import Btn from "./btn";
/* import CardMain from "./CardMain"; */
export default function Main() {
  return (
    <main>
      <div className="hero"></div>
      <div className="pt-50 pb-20 bg-grey">
        <div className="container">
          <div className="d-flex  wrap gap-15">
            {comics.map((obj) => (
              <Card key={obj.id} series={obj.series} thumb={obj.thumb} />
            ))}
          </div>
          <Btn title="LOAD MORE" />
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
