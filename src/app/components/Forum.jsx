import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
import { Image } from 'react';
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(5),
    justifyItems: 'center',
    paddingTop: 90,
    paddingBottom: 70
  },
  pic: {
    maxWidth: 270,
    [theme.breakpoints.up('sm')]: {maxWidth: 500},
    width: '75%', 
    margin: theme.spacing(3),
    
  },
  picpic: {
    maxWidth: 270,
    [theme.breakpoints.up('sm')]: {maxWidth: 500},
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
  }
}));

export default function Forum(){
  const classes = useStyles();
  return(
   <Grid container spacing={3} style={{paddingTop: 90, paddingBottom: 70, textAlign: 'center'}} alignItems="center" justify="center" >
     <Grid item xs={12}><Typography variant={"h5"}>Coming soon!</Typography></Grid>
     <Grid item xs={12} m={6} className={classes.pic}> <img src="/img/highres/a.png" className={classes.picpic}/> </Grid>
     <Grid item xs={12} m={6} className={classes.pic}> <img src="/img/highres/b.png" className={classes.picpic}/> </Grid>
     <Grid item xs={12} m={6} className={classes.pic}> <img src="/img/highres/c.png" className={classes.picpic}/> </Grid>
     <Grid item xs={12} m={6} className={classes.pic}> <img src="/img/highres/d.png" className={classes.picpic}/> </Grid>
   </Grid>

    // <div className={classes.container}>
    //   <div style={{ gridColumnEnd: 'span 12' }}>
    //     <Typography variant={"h3"}>Coming soon!</Typography>
    //   </div>
    //   <div style={{ gridColumnEnd: 'span 12', maxWidth: 500, width: '75%'}}><img src={i1} style={{width:'75%', maxWidth: 500}}/></div>
    //   <div style={{ gridColumnEnd: 'span 12', maxWidth: 500, width: '75%'}}><img src={i2} style={{width:'75%', maxWidth: 500}}/></div>
    //   <div style={{ gridColumnEnd: 'span 12', maxWidth: 500, width: '75%'}}><img src={i3} style={{width:'75%', maxWidth: 500}}/></div>
    //   <div style={{ gridColumnEnd: 'span 12', maxWidth: 500, width: '75%'}}><img src={i4} style={{width:'75%', maxWidth: 500}}/></div>
    // </div>
  );
}