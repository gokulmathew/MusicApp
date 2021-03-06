import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { NOT_FOUND_PAGE_HEADING } from "../../constants";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    marginTop: "17px",
    "& h1": {
      marginBottom: "15px",
      color: "#000000",
    },
    "& p": {
      color: "#000000",
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
      <Grid container direction="row" justify="center" className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h3">
            {NOT_FOUND_PAGE_HEADING}
          </Typography>
        </Grid>
      </Grid>
  );
};
export default NotFound;
