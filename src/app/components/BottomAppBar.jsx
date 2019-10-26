import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TechIcon from '@material-ui/icons/Widgets';
import TeamIcon from '@material-ui/icons/Group';
import ForumIcon from '@material-ui/icons/Forum';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    backgroundColor: "#E10075",
  },
  action: {
    color: "#ffffffd0"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000'
    }
  },
});

export default function BottomAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction component={Link} to="/tech" label="Technologies" value="recents" icon={<TechIcon />} className={classes.action} />
        <BottomNavigationAction component={Link} to="/teams" label="Teams" value="favorites" icon={<TeamIcon />} className={classes.action}/>
        <BottomNavigationAction component={Link} to="/forum" label="Forum" value="folder" icon={<ForumIcon />} className={classes.action}/>
      </BottomNavigation>
    </ThemeProvider>
  );
}