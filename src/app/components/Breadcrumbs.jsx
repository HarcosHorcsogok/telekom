import React from 'react';
import { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const breadcrumbNameMap = {
  '/tech': 'Technologies',
  '/teams': 'Teams',
  '/forum': 'Forums',
  '/tech/?': '?',
  '/teams/?': '?'
};

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

const LinkRouter = props => <Link {...props} component={RouterLink} />;

/*
*  Returns the code for breadcrumbs.
*  :param namesAndLinks List object in order of appearance of objects {name: someName, link: someLink}
*
*  Example: <BreadCrumbs namesAndLinks = {[{name: "Technologies", link: "technologies"}, {name: "C++", link: "cpp"}]}/>
*/
export default function DynamicBreadcrumbs(props) {
  const classes = useStyles();

  /*let breadcrumbs = [];
  let linkSoFar = "";
  props.namesAndLinks.forEach(function(nameAndLink, index) {
    linkSoFar += "/" + nameAndLink.link;
    
    breadcrumbs.push(current);
  });*/

  return (
    <Route>
    {({ location }) => {
      const pathnames = location.pathname.split('/').filter(x => x);

      return (
        <Breadcrumbs aria-label="breadcrumb">
          {pathnames.map((value, index) => {
            const pathTillIndex = `/${pathnames.slice(0, index + 1).join('/')}`;

            let breadCrumbKey = null;
            const crumbKeys = Object.keys(breadcrumbNameMap);
            for (let i = 0; i < crumbKeys.length && breadCrumbKey == null; i++) {
              let atMap = 0;
              let atPath = 0;
              while (atMap < crumbKeys[i].length && atPath < pathTillIndex.length) {
                if (crumbKeys[i].charAt(atMap) === pathTillIndex.charAt(atPath)) {
                  atMap++; atPath++;
                } else if (crumbKeys[i] === '?') {
                  atPath++;
                  if (pathTillIndex.charAt(atPath) === '/') {
                    atMap++;
                  }
                } else {
                  break;
                }
              }

              if (atMap >= crumbKeys[i].length && atPath >= pathTillIndex.length) {
                breadCrumbKey = crumbKeys[i];
              }
            }
            
            let breadCrumbText = breadCrumbKey === null ? pathnames[index] : breadcrumbNameMap[breadCrumbKey];
            
            let current = <StyledBreadcrumb
              component="a"
              href={pathTillIndex}
              label={breadCrumbText}
              />;
            current = React.cloneElement(
                current, 
                { key: pathTillIndex }
            );
            return current;
          })}
        </Breadcrumbs>
      );
    }}
  </Route>
  );

  /*return (
    <Paper elevation={0} className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Paper>
  );*/
}
