import React ,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

const useStyles = makeStyles((theme) => ({  
  imageList: {
    flexWrap: 'nowrap',    
    transform: 'translateZ(0)'  
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function UpcomingImageList({upcoming}) {
  const classes = useStyles();
  
  return (      
    <div>
      <div className="scrollBarTop" >
                Upcoming Movies
      </div>
      <ImageList className={classes.imageList} cols={6} rowHeight={250}>
        {upcoming.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}           
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
         
  );
}
