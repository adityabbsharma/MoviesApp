
import React, { useEffect, useState } from 'react';
import Header from "../../common/header/Header";
import { Grid, Paper, TextField, Button, InputLabel, Input, Typography, Select, MenuItem } from '@material-ui/core';
import UpcomingImageList from "./upcomingImageList/upcomingImageList";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { makeStyles } from '@material-ui/core/styles';
import "./upcomingImageList/Home.css";
import { useHistory } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";



const Home = (props) => {
  const [released, setReleased] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieTitle, setMovieTitle] = useState([]);
  const [checkedGenres, setCheckedGenres] = useState([]);
  const [checkedArtists, setCheckedArtists] = useState([]);
  const [StartReleasedDate, setStartReleasedDate] = useState("");
  const [EndReleasedDate, setEndReleasedDate] = useState("");
  // const { classes } = props;
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    cursorProp: {
      // background: "#f1f1f1",
      '&:hover': {
        background: "#f1f1f1",
      },
    },
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const classes = useStyles();
  useEffect(() => {
    //Fetch upcoming movies
    fetch(props.baseUrl + "movies?status=PUBLISHED", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => response.json())
      .then((response) => setUpcoming(response.movies));

    //Fetch released movies
    fetch(props.baseUrl + "movies?status=RELEASED", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => response.json())
      .then((response) => setReleased(response.movies));

    //Fetch genres
    fetch(props.baseUrl + "genres", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => response.json())
      .then((response) => setGenres(response.genres));

    //Fetch artists
    fetch(props.baseUrl + "artists", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => response.json())
      .then((response) => setArtists(response.artists));
  }, []);

  const applyFilterHandler = ()=>{
    let newMoviesList = released;
    if(movieTitle!==""){
      console.log(released);
      newMoviesList = released.filter((movie) => movie.title === movieTitle);
    }    
    setReleased(newMoviesList);
  }
  return (
    <div className="HomeMain">
      <div>
        <Header {...props} baseUrl={props.baseUrl} />
      </div>
      <div>
        <UpcomingImageList upcoming={upcoming} />
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <div >
                <ImageList cols={4} rowHeight={350}>
                  {released.map((item) => (
                    <ImageListItem key={item.id} onClick={() => history.push("/movie/" + item.id)}>
                      <img src={item.poster_url} alt={item.title} />
                      <ImageListItemBar
                        title={item.title}
                        subtitle={<span>Released On: {item.release_date}</span>}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography className="typoGraphy">FIND MOVIES BY:</Typography>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="moviename">Movie Name</InputLabel>
                <Input id="moviename" name="movietitle" onChange={(e) => setMovieTitle(e.target.value)}/>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple-checkbox">
                  Genres
                </InputLabel>
                <Select
                  multiple
                  input={<Input id="select-multiple-checkbox-genre" />}
                  renderValue={(selected) => selected.join(",")}
                  value={checkedGenres}
                  onChange={(e) => setCheckedGenres(e.target.value)}
                >
                  {genres.map((genre) => (
                    <MenuItem key={genre.id} value={genre.genre}>
                      <Checkbox
                        checked={checkedGenres.indexOf(genre.genre) > -1}
                      />
                      <ListItemText primary={genre.genre} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <Button
                  onClick={() => applyFilterHandler()}
                  variant="contained"
                  color="primary"
                >
                  APPLY
                </Button>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </div>      
    </div>
  )
};
export default Home;