import React from 'react';
import './App.css';
import Home from './component/Home/Home';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
//import { BrowserRouter as Router,Route,Link } from "react-router-dom"; 

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#fff',
        main: '#03a9f4',
        dark: '#03a9f4'
     },
     secondary: {
       main: '#03a9f4',
     },
  },
  typography: { 
     useNextVariants: true
  }
});

function App() {

  return (
    <div className="App">
       <MuiThemeProvider theme = { theme }> 
       <Home/>
        
       </MuiThemeProvider>
    </div>
  );
}

export default App;
