import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
import { Image } from 'react';
import {makeStyles} from "@material-ui/core/styles"

import i1 from './../../img/highres/a.png'
import i2 from './../../img/highres/b.png'
import i3 from './../../img/highres/c.png'
import i4 from './../../img/highres/d.png'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(5),
    justifyItems: 'center',
    paddingTop: 90,
    paddingBottom: 70
  },
  pic: {maxWidth: 500, width: '75%', margin: theme.spacing(3), }
}));

export default function Forum(){
  const classes = useStyles();
  return(
   <Grid container spacing={3} style={{paddingTop: 90, paddingBottom: 70, textAlign: 'center'}} alignItems="center" justify="center" >
     <Grid item xs={12}><Typography variant={"h5"}>Coming soon!</Typography></Grid>
     <Grid item xs={12} m={6} className={classes.pic}> <img src={i1} style={{maxWidth: 500}}/> </Grid>
     <Grid item xs={12} m={6} className={classes.pic}> <img src={i2} style={{maxWidth: 500}}/> </Grid>
     <Grid item xs={12} m={6} className={classes.pic}> <img src={i3} style={{maxWidth: 500}}/> </Grid>
     <Grid item xs={12} m={6} className={classes.pic}> <img src={i4} style={{maxWidth: 500}}/> </Grid>
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