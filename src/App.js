import Search from './components/Search';
import { Provider }  from 'react-redux';
import store from './constants/store';

function App() {
  return (
    <Provider store={store}>
    <div className='main-container'>
      <h1>SmartSearch: The Intelligent Auto Suggest Search Bar</h1>
      <h5>
        Welcome to the SmartSearch Bar! This project aims to help
        frontend developers and software engineers prepare for machine coding
        rounds by showcasing an auto-suggest search bar that dynamically
        provides suggestions as users type. Leveraging debouncing for optimal
        performance, and powered by React and Redux, it intelligently caches
        previous search results to minimize duplicate API calls.
      </h5>
      <Search />
    </div>
    </Provider>
  );
}

export default App;
