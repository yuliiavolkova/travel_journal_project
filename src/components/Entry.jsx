export default function Entry(props) {
  console.log(props);
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img src={props.entry.img.src} alt={props.entry.img.alt} />
      </div>
      <div>
        <img
          className="main-image"
          src="/src/marker.png"
          alt="map marker icon"
        />
        <span>{props.entry.country}</span>
        <a href={props.entry.googleMapsLink}>View on Google maps</a>
        <h2>{props.entry.title}</h2>
        <p>{props.entry.dates}</p>
        <p>{props.entry.description}</p>
      </div>
    </article>
  );
}
