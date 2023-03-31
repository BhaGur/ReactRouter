import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
  } from "react-router-dom";
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <AppBar position='static' color='primary'>
          <Toolbar>
            <Typography variant='h5'>
              Welcome to React Router
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
        <BrowserRouter>
          <Link to="/">Home</Link>{' '}
          <Link to="/about">About</Link>{' '}
          <Link to="/contact">Contact</Link>{' '}
          <Routes>
          <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
