export default function Card({ series, thumb }) {
  return (
    <div className="card">
      <img className="img-main-header" src={thumb} alt={series} />
      <p className="mt-10 text-center color-white">{series}</p>
    </div>
  );
}
