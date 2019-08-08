import React from 'react';
import AppBar from './components/AppBar/AppBar'
import SearchBar from './components/SearchBar/searchBar'
import MainScreen from './components/MainScreen/mainScreen'
import './App.css';
import { Provider } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import configureStore from './reducers/store'
import 'bootstrap/dist/css/bootstrap.min.css';

const reduxStore = configureStore();
const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'span',
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={reduxStore}>
        <div className="App">
          <AppBar />
          <SearchBar />
          <MainScreen />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
