import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function UserList() {
  const [listOfUSer, setlistOfUSer] = useState([]);
  const Api = "https://jsonplaceholder.typicode.com/users";
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  useEffect(() => {
    axios
      .get(Api)
      .then((response) => {
        setlistOfUSer(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {listOfUSer.map((user) => (
        <Card className={classes.root} key={user.id}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {user.name}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              User-name:{user.username}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {user.email}
            </Typography>
            <Typography variant="body2" component="p">
              work in {user.company.name}
              <br />
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default UserList;
