import { array } from "./ArrayMain";
import Card from "./Card";
import comics from "./comics";
import Btn from "./Btn";
import Badge from "./Badge";
/* import CardMain from "./CardMain"; */
export default function Main() {
  return (
    <main>
      <div className="hero"></div>
      <div className="pt-50 pb-20 bg-grey positon-relative">
        <div className="container">
          <Badge title="CURRENT SERIESE" />
          <div className="d-flex  wrap gap-15">
            {comics.map((obj) => (
              <Card
                key={obj.id}
                series={obj.series}
                thumb={obj.thumb}
                type={obj.type === "comic book" ? "border" : ""}
              />
            ))}
          </div>
          <Btn title="LOAD MORE" />
        </div>
      </div>
      <div className="bg-blue pt-50 pb-50">
        <div className="container d-flex wrap">
          {array.map((element) => (
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
