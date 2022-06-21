export const MovieCast = ({ details }) => (
  <div style={{ display: "flex" }}>
    <div>
      <figure>
        <img
          alt={`cast}`}
          style={{ height: 120, margin: 8 }}
          src={details.cast1}
        ></img>
        <figcaption style={{ marginRight: 4}}>{details.cast1Name}</figcaption>
      </figure>
    </div>
    <div>
      {" "}
      <figure>
        <img
          alt={`cast}`}
          style={{ height: 120, margin: 8 }}
          src={details.cast2}
        ></img>
        <figcaption style={{ marginRight: 4}}>{details.cast2Name}</figcaption>
      </figure>
    </div>
  </div>
);
