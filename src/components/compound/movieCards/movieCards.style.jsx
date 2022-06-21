import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "30vh",
    margin: "8px auto",
    height: "40vh",

    position: "relative",
  },
  media: {
    // height: 200,
    height: "100%",
    backgroundSize: "fit",
    flex: 1,
  },

  iconButton: { position: "absolute", top: 0, left: 5 },
  favIcon: { color: "red" },
}));
