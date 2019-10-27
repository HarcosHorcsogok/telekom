import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {

   }
});

/* 
*  Returns code for a technology/skill card.
*  :param descObj The object that describes the technology/skill. Needs a name and an imglink field.
*
*  Example: <TechnolgySkillCard descObj={{name: "Kotlin", imglink: "kotlin.png"}}/>
*/
export default function TechnolgySkillCard(props) {
  const classes = useStyles();
  const descObj = props.descObj;
  return (
    <Link to={(window.location.pathname == '/' ? '/skills' : window.location.pathname) + "/" + props.descObj.name} style={{textDecoration: "none"}}>
    <Card className={classes.card} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt={"" + descObj.name}
            height="100"
            width="100"
            image={"" + descObj.imglink}
            title={"" + descObj.name}
          />
          <CardContent>
            <Typography variant="subtitle2">
              {descObj.name}
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
    </Link>
  );
}