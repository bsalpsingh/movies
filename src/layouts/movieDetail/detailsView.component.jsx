import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
export const MovieDetails = ({ movieData }) => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <div style={{ paddingTop: 16 }}>
        <Typography
          style={{ margin: 8, fontWeight: "bold" }}
          gutterBottom
          variant="h5"
          color="primary"
        >
          {movieData.title}
        </Typography>

        <Typography
          style={{ marginBottom: 8 }}
          gutterBottom
          variant="body2"
          color="textSecondary"
        >
          {`  ${movieData.genre} `} &#8226;
          {` ${movieData.runTime}`}
        </Typography>

        <Typography
          style={{ marginBottom: 8 }}
          gutterBottom
          variant="caption"
          color="textSecondary"
        >
          {movieData.disc}
        </Typography>
      </div>
    </Grid>
    <Grid item xs={12} md={6}>
      <div
        style={{
          position: "relative",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          width: 300,
        }}
      >
        <img
          alt={`${movieData.title}`}
          style={{ height: 300, alignItems: "center" }}
          src={movieData.src}
        ></img>
        <PlayCircleFilledIcon
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",

            fontSize: 40,
            opacity: "0.7",
            transform: "translateX(-50%)",
          }}
        />
      </div>
    </Grid>
    <Grid item xs={12} md={12}>
      <div>
        <Typography
          style={{ margin: 8, fontWeight: "bold" }}
          gutterBottom
          variant="h5"
          color="primary"
        >
          Screenshots
        </Typography>
        <div style={{ margin: "auto" }}>
          {new Array(7).fill("*").map(() => (
            <img
              alt={`${movieData.title}`}
              style={{ height: 128, padding: 8 }}
              src={movieData.src}
            ></img>
          ))}
        </div>
      </div>
    </Grid>
  </Grid>
);
