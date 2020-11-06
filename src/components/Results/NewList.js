import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: " wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(50),
      height: theme.spacing(45)
    }
  },
  card: {
    width: "400px"
  },
  cardMedia: {
    height: "160px",
    justifyContent: "center",
    alignItems: "center"
  }
});
class NewList extends React.Component {
  render() {
    const { classes, results } = this.props;
    return (
      <div className={classes.root}>
        {results.map((item, i) => (
          <Card className={classes.card} key={i}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Imagen"
                height="200"
                image={item.img_url}
              />
              Fuente :{item.source_name}
              <CardContent>
                <Typography gutterBottom component="h3">
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" color="primary" href={item.url}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewList);
