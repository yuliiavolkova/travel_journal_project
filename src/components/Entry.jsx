export default function Entry(props) {
  console.log(props);
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div>
        <img
          className="main-image"
          src="/src/marker.png"
          alt="map marker icon"
        />
        <span>{props.country}</span>
        <a href={props.googleMapsLink}>View on Google maps</a>
        <h2>{props.title}</h2>
        <p>{props.dates}</p>
        <p>{props.description}</p>
      </div>
    </article>
  );
}
