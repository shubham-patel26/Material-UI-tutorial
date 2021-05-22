import React from 'react';
import './App.css';
import SideMenu from '../Components/SideMenu';
import Header from '../Components/Header';
import { CssBaseline, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';

const themes = createMuiTheme({
  palette: {
      primary:{
          main: "#ff0000",
          light: "#3c44b126"

      },
      secondary: {
          main:"#f832245",
          light:"#f8324526"
      },
      background:{
        default:"#f4f5fd"
      }
  }
})
const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
    
  }
})
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={themes}>
    <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
      </div>
      <CssBaseline/>

    </ThemeProvider>
      
    
  );
}

export default App;
