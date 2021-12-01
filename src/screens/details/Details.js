
import React, { useEffect, useState } from 'react';
import Header from "../../common/header/Header";
import { Grid,  Typography} from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { useHistory, useParams } from "react-router-dom";
import "./Details.css";
import YouTube from 'react-youtube';
import StarBorderIcon from '@material-ui/icons/StarBorder';



const Details = (props) => {

    const history = useHistory();
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const bookShowButtonHandler = props.bookShowButtonHandler;

    useEffect(() => {
        //Fetch upcoming movies
        bookShowButtonHandler(true);
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
        // setArtists(movie["artists"]);

        // console.log("artists="+artists[0]);
        // console.log("movie[artists]="+movie.artists[0]);
    }, []);
    const [colorOfStarOne, setColorOfStarOne] = useState("Black");
    const [colorOfStarTwo, setColorOfStarTwo] = useState("Black");
    const [colorOfStarThree, setColorOfStarThree] = useState("Black");
    const [colorOfStarFour, setColorOfStarFour] = useState("Black");
    const [colorOfStarFive, setColorOfStarFive] = useState("Black");

    const clickHandlerOne = () => {
        setColorOfStarOne("yellow");
    }
    const clickHandlerTwo = () => {
        setColorOfStarTwo("yellow");
    }
    const clickHandlerThree = () => {
        setColorOfStarThree("yellow");
    }
    const clickHandlerFour = () => {
        setColorOfStarFour("yellow");
    }
    const clickHandlerFive = () => {
        setColorOfStarFive("yellow");
    }

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
                    <Typography>
                        <b>Rate this movie:</b>
                    </Typography>
                    <div>
                        <StarBorderIcon style={{ color: colorOfStarOne }} onClick={clickHandlerOne} ></StarBorderIcon>
                        <StarBorderIcon style={{ color: colorOfStarTwo }} onClick={clickHandlerTwo}></StarBorderIcon>
                        <StarBorderIcon style={{ color: colorOfStarThree }} onClick={clickHandlerThree}></StarBorderIcon>
                        <StarBorderIcon style={{ color: colorOfStarFour }} onClick={clickHandlerFour}></StarBorderIcon>
                        <StarBorderIcon style={{ color: colorOfStarFive }} onClick={clickHandlerFive}></StarBorderIcon>
                    </div>
                    <Typography style={{ margintop: "16px", marginbottom: "16px" }} >
                        <b>Artists:</b>
                    </Typography>
                    <Grid>
                        <ImageList cols={2} rowHeight={150}>
                            {movie.artists && movie.artists.map((item) => (
                                <ImageListItem key={item.id} >
                                    <img src={item.profile_url} alt={item.first_name + " " + item.last_name} />
                                    <ImageListItemBar
                                        title={item.first_name + " " + item.last_name}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>

                </div>

            </div>

        </div>
    )
};
export default Details;