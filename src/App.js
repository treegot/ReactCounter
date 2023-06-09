import logo from './logo.svg';
import './App.css';
import { Store } from 'redux';
import Counter from './containers/Counter';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/store';
const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
    <div>
  <Counter/>
    </div>
    </Provider>
  );
}

export default App;
