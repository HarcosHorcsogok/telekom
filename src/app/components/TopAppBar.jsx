import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import BackIcon from '@material-ui/icons/ArrowBack'
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
    flexGrow: 999,
    display: 'block',
    /*[theme.breakpoints.up('sm')]: {
      display: 'block',
    },*/
  },
  titleWithSearch: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    marginLeft: 0,
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      flexGrow: 0,
    }
    //width: '40%'
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
    padding: theme.spacing(1.5, 1, 1.5, 1.5),
    width: '100%'
  },
  backIcon: {
    marginRight: theme.spacing(2)
  }
}));

/* 
 * Defines a new top app bar.
 * :param props Needs a searchCallback function which will be called each time a search term is entered into the field 
*/
export default function TopAppBar(props) {
  const searchCallback = props.searchCallback;
  // const {pathname} = props.location;
  //console.log(props)

  // (:
  

//   _____ __________.___  _____________________________   ____ ______________ _____________________________
//   /  _  \\______   \   | \______   \_   _____/\_____  \ |    |   \_   _____//   _____/\__    ___/   _____/
//  /  /_\  \|     ___/   |  |       _/|    __)_  /  / \  \|    |   /|    __)_ \_____  \   |    |  \_____  \ 
// /    |    \    |   |   |  |    |   \|        \/   \_/.  \    |  / |        \/        \  |    |  /        \
// \____|__  /____|   |___|  |____|_  /_______  /\_____\ \_/______/ /_______  /_______  /  |____| /_______  /
//         \/                       \/        \/        \__>                \/        \/                  \/ 
  
  // Remove this if you know what you are doing
  // I don't
  //fetch("/api/skills/c++").then(result => result.json()).then(response => console.log(response));
  // fetch("/api/teams/teamb").then(result => result.json()).then(response => console.log(response));
  // fetch("/api/technologies").then(result => result.json()).then(response => console.log(response));
  // fetch("/api/skills").then(result => result.json()).then(response => console.log(response));
  // fetch("/api/members/teamc").then(result => result.json()).then(response => console.log(response));
  // fetch("/api/technologies/cloud").then(result => result.json()).then(response => console.log(response));


//   ___                                               ___           ___           ___           ___           ___           ___                         ___     
//   /  /\          ___            ___                 /  /\         /  /\         /  /\         /  /\         /  /\         /  /\          ___          /  /\    
//  /  /::\        /  /\          /__/\               /  /::\       /  /::\       /  /::\       /  /:/        /  /::\       /  /::\        /__/\        /  /::\   
// /  /:/\:\      /  /::\         \__\:\             /  /:/\:\     /  /:/\:\     /__/:/\:\     /  /:/        /  /:/\:\     /__/:/\:\       \  \:\      /__/:/\:\  
// /  /::\ \:\    /  /:/\:\        /  /::\           /  /::\ \:\   /  /::\ \:\    \  \:\ \:\   /  /:/        /  /::\ \:\   _\_ \:\ \:\       \__\:\    _\_ \:\ \:\ 
// /__/:/\:\_\:\  /  /::\ \:\    __/  /:/\/          /__/:/\:\_\:\ /__/:/\:\ \:\    \  \:\ \:\ /__/:/     /\ /__/:/\:\ \:\ /__/\ \:\ \:\      /  /::\  /__/\ \:\ \:\
// \__\/  \:\/:/ /__/:/\:\_\:\  /__/\/:/~~           \__\/~|::\/:/ \  \:\ \:\_\/     \  \:\/:/ \  \:\    /:/ \  \:\ \:\_\/ \  \:\ \:\_\/     /  /:/\:\ \  \:\ \:\_\/
//    \__\::/  \__\/  \:\/:/  \  \::/                 |  |:|::/   \  \:\ \:\        \__\::/   \  \:\  /:/   \  \:\ \:\    \  \:\_\:\      /  /:/__\/  \  \:\_\:\  
//    /  /:/        \  \::/    \  \:\                 |  |:|\/     \  \:\_\/        /  /:/     \  \:\/:/     \  \:\_\/     \  \:\/:/     /__/:/        \  \:\/:/  
//   /__/:/          \__\/      \__\/                 |__|:|~       \  \:\         /__/:/       \  \::/       \  \:\        \  \::/      \__\/          \  \::/   
//   \__\/                                             \__\|         \__\/         \__\/         \__\/         \__\/         \__\/                       \__\/    


  
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  if(checked) {
    return (
      <ThemeProvider theme={theme}>
          <div className={classes.root}>
          <AppBar position="fixed">
              <Toolbar>
                  <Typography className={classes.titleWithSearch} variant="h6" noWrap>
                      HOL/KI
                  </Typography>
                  <div >
                  </div>
                  <Grow in={checked}>
                      <div className={classes.search}>
                          <InputBase autoFocus
                              placeholder="Search…"
                              classes={{
                                  root: classes.inputRoot,
                                  input: classes.inputInput,
                              }}
                              inputProps={{ 'aria-label': 'search' }}
                              onChange={(ev) => searchCallback(ev.target.value)} />
                      </div>
                  </Grow>
                  <div class="font-icon-wrapper" style={{marginRight: 12}} onClick={() => handleChange()}>
                      <IconButton edge="end">
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
  } else {
    return (
      <ThemeProvider theme={theme}>
          <div className={classes.root}>
          <AppBar position="fixed">
              <Toolbar>
                {props.back && 
                  <div class="font-icon-wrapper" onClick={() => {searchCallback(""); window.history.back()}}>
                    <IconButton edge="start" className={classes.backIcon} color="inherit">
                      <BackIcon />
                    </IconButton>
                  </div> 
                  
                }
                <Typography className={classes.title} variant="h6">
                  HOL/KI
                </Typography>
                {props.search &&
                  <div class="font-icon-wrapper" onClick={() => handleChange()}>
                    <IconButton>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                    </IconButton>
                  </div>
                }
                
              </Toolbar>
          </AppBar>
          </div>
      </ThemeProvider>
    );
  }
}
