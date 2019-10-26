import React from 'react';
import { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';

const StyledBreadcrumb = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
  avatar: {
    background: 'none',
    marginRight: -theme.spacing(1.5),
  },
}));

/*
*  Returns the code for breadcrumbs.
*  :param namesAndLinks List object in order of appearance of objects {name: someName, link: someLink}
*
*  Example: <BreadCrumbs namesAndLinks = {[{name: "Technologies", link: "technologies"}, {name: "C++", link: "cpp"}]}/>
*/
export default function BreadCrumbs(props) {
  const classes = useStyles();

  let breadcrumbs = [];
  let linkSoFar = "";
  props.namesAndLinks.forEach(function(nameAndLink, index) {
    linkSoFar += "/" + nameAndLink.link;
    let current = <StyledBreadcrumb
      component="a"
      href={linkSoFar}
      label={nameAndLink.name}
    />;
    current = React.cloneElement(
        current, 
        { key: nameAndLink.name }
    );
    breadcrumbs.push(current);
  })

  return (
    <Paper elevation={0} className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Paper>
  );
}
