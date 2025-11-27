export default function Card({ series, thumb, type }) {
  return (
    <div className={`card ${type}`}>
      <img className="img-main-header" src={thumb} alt={series} />
      <p className="mt-10 text-center color-white">{series}</p>
    </div>
  );
}
