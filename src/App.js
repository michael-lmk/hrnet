import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import './App.css';
import Navigation from './navigation/Navigation';
import store from './redux/store/Store';
import { Bars } from 'react-loader-spinner';

function App() {

  let persistor = persistStore(store);

  return (
    <Provider store={store}>

      <PersistGate loading={
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass="container-laoder"
          visible={true}
        />
      } persistor={persistor}>
        <Navigation></Navigation>
      </PersistGate>
    </Provider>
  );
}

export default App;
