
import React, { useEffect, useState } from 'react';
import Header from "../../common/header/Header";
import { Grid, Paper, TextField, Button, InputLabel, Input, Typography, Select, MenuItem } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { useHistory, useParams } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import "./Details.css";
import YouTube from 'react-youtube';



const Details = (props) => {

    const history = useHistory();
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    // const[title,setTitle] = useState("");
    // const[posterurl,setPosterUrl] = useState("");
    // const[genres,setGenres] = useState({});
    // const[storyline,setStoryLine] = useState("");
    // const[duration,setDuration] = useState();
    // const[releasedate,setReleasedate] = useState("");
    // const[rating,setRating] = useState();
    // const[wikiurl,setWikiurl] = useState("");
    // const[trailerurl,setTrailerurl] = useState("");
    // const[artists,setArtists] = useState([]);
    useEffect(() => {
        //Fetch upcoming movies
        console.log("id=" + id);
        fetch(props.baseUrl + "movies/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
            },
        })
            .then((response) => (response.json()))
            .then((response) => setMovie(response));

        // setTitle(movie.title);
        // setPosterUrl(movie.poster_url);
        // setGenres(movie.genres);
        // setStoryLine(movie.storyline);
        // setDuration(movie.duration);
        // setReleasedate(movie.release_date);
        // setRating(movie.rating);
        // setWikiurl(movie.wiki_url);
        // setTrailerurl(movie.trailer_url);
        // setArtists(movie.artists);
        // console.log(genres);
    }, []);


    return (
        <div className="DetailsMain">
            <div>
                <Header {...props} baseUrl={props.baseUrl} />
            </div>
            <div className="container">
                <div className="coloumn1">
                    <Typography className="backButtonClass" variant="button" style={{ cursor: "pointer" }} onClick={() => history.push("/")}>
                        &lt;Back to Home
                    </Typography>
                    <div>
                        <img src={movie.poster_url} alt={movie.title} />
                    </div>
                </div>
                <div className="coloumn2">
                    <Typography variant="h2">
                        {movie.title}
                    </Typography>
                    {/* <p>Genre: {movie.genres.map((item)=>(<span>{item}</span>))}</p> */}
                    <Typography>
                        <b>Genre:</b> {movie.genres && movie.genres.join(",")}
                    </Typography>
                    <Typography><b>Duration:</b>{movie.duration}</Typography>
                    <Typography><b>Release Date:</b>{new Date(movie.release_date).toDateString()}</Typography>
                    <Typography><b>Rating:</b>{movie.rating}</Typography>
                    <div className="marginTop">
                        <Typography ><b>Plot:</b>(<a href={movie.wiki_url}>Wiki_Link</a>){movie.storyline}</Typography>

                    </div>

                    <div className="marginTop">
                        <Typography ><b>Trailer:</b>
                            <YouTube videoId={movie.trailer_url && movie.trailer_url.split("?v=")[1]} />
                        </Typography>
                    </div>




                </div>
                <div className="coloumn3">

                </div>

            </div>

        </div>
    )
};
export default Details;