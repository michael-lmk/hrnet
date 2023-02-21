import { Provider } from 'react-redux';
import './App.css';
import Navigation from './navigation/Navigation';
import store from './redux/store/Store';

function App() {



  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
}

export default App;
