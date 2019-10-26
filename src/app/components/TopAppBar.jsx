import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Grow from '@material-ui/core/Grow'
import IconButton from '@material-ui/core/IconButton';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#E10075',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#000000'
    }
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    marginLeft: 0,
    width: '40%'
  },
  searchIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: 'white',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'black',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    width: '100%'
  },
}));

/* 
 * Defines a new top app bar.
 * :param props Needs a searchCallback function which will be called each time a search term is entered into the field 
*/
export default function TopAppBar(props) {
  const searchCallback = props.searchCallback;

  // (:
  //************************** */
  //************************** */
  //************************** */
  //************************** */

  // Remove this if you know what you are doing
  fetch("/api/skills/C++").then(result => result.json()).then(response => console.log(response));

  //************************** */
  //************************** */
  //************************** */
  //************************** */
  
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    HOL/KI
                </Typography>
                <Grow in={checked}>
                    <div className={classes.search}>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={searchCallback}
                        />
                    </div>
                </Grow>
                <div class="font-icon-wrapper" onClick={() => handleChange()}>
                    <IconButton>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        </div>
    </ThemeProvider>
  );
}
