import comics from "../componenets/comics";

export default function CardMain() {
  return (
    <div className="d-flex  wrap gap-15">
      {comics.map(({ id, series, thumb }) => (
        <div className="card" key={id}>
          <img className="img-main-header" src={thumb} alt={series} />
          <p className="mt-10 text-center color-white">{series}</p>
        </div>
      ))}
      ;
    </div>
  );
}
