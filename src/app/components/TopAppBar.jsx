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
/*
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
*/









  

export default class TopAppBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchCallback: props.searchCallback,
      checked: false
    }
    this.backWithReset = this.backWithReset.bind(this);
  }

  backWithReset() {
    this.state.searchCallback("");
    window.history.back();
  }
  
  render(){
    const handleChange = () => {
      this.setState({checked: !this.state.checked});
    };

    const theme = createMuiTheme({palette: {primary: { main: '#E10075' }, secondary: { main: '#000000' }}});

    if(this.state.checked) {
      return (
        <ThemeProvider theme={theme}>
          <div style={{flex: "grow"}}>
            <AppBar position="fixed">
              <Toolbar>
                <Typography style={{flexGrow: 1, display: 'none', [theme.breakpoints.up('sm')]: {display: 'block',}}} 
                  variant="h6" noWrap>
                  HOL/KI
                </Typography>
                <div >
                </div>
                <Grow in={this.state.checked}>
                  <div style={{position: 'relative', borderRadius: theme.shape.borderRadius, backgroundColor: fade(theme.palette.common.white, 1), marginLeft: 0, flexGrow: 1, [theme.breakpoints.up('sm')]: { flexGrow: 0,}}}>
                    <InputBase autoFocus
                      placeholder="Search…"
                      classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                      onChange={(ev) => this.state.searchCallback(ev.target.value)} />
                  </div>
                </Grow>
                <div class="font-icon-wrapper" style={{marginRight: 12}} onClick={() => handleChange()}>
                  <IconButton edge="end">
                    <div style={{ width: theme.spacing(4), height: theme.spacing(4), color: 'white', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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
            <div style={{flex: "grow"}}>
            <AppBar position="fixed">
                <Toolbar>
                  {this.props.back && 
                      <IconButton onClick={this.backWithReset} edge="start" style={{marginRight: theme.spacing(2)}} color="inherit">
                        <BackIcon />
                      </IconButton>
                  }
                  <Typography style={{flexGrow: 999, display: 'block',}} 
                    variant="h6">
                    HOL/KI
                  </Typography>
  
                  {this.props.search &&
                    <div class="font-icon-wrapper" onClick={() => handleChange()}>
                      <IconButton>
                        <div style={{ width: theme.spacing(4), height: theme.spacing(4), color: 'white', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
}


/* 
 * Defines a new top app bar.
 * :param props Needs a searchCallback function which will be called each time a search term is entered into the field 
*/
/*
export default function TopAppBar(props) {
  const searchCallback = props.searchCallback;
  // const {pathname} = props.location;
  console.log(props)
  
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
                    <IconButton onClick={function(ev){
                      searchCallback("");
                      window.history.back()}} edge="start" className={classes.backIcon} color="inherit">
                      <BackIcon />
                    </IconButton>
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
*/