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

export default function BottomAppBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('skills');
  const callback = props.callback;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    callback();
  };

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction component={Link} to="/skills" label="Technologies" value="skills" icon={<TechIcon />} />
        <BottomNavigationAction component={Link} to="/teams" label="Teams" value="teams" icon={<TeamIcon />} />
        <BottomNavigationAction component={Link} to="/forum" label="Forum" value="forum" icon={<ForumIcon />} />
      </BottomNavigation>
    </ThemeProvider>
  );
}