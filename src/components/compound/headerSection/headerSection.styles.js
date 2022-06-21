import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  headerSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "16px 32px",
  },
  typography: { marginLeft: 10 },
  watchListButton: {
    margin: 8,
    borderRadius: 20,
    fontSize: 12,
  },
  searchField: { padding: "10px", flex: 1 },
});
