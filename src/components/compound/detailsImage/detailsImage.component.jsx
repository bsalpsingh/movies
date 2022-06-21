import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

//styles
import { useStyles } from "./detailsImage.styles";

export const DetailsImage = ({ imgSrc }) => {
  const classes = useStyles();

  return (
    <Card elevation={5} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
};
