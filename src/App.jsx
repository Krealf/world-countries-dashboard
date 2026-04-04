import {Route, Routes} from 'react-router-dom';


import {Header} from './components/Header';
import {Main} from './components/Main';

import {HomePage} from './pages/HomePage';
import {Details} from './pages/Details';
import {NotFound} from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/world-countries-dashboard"
            element={<HomePage />}
          />
          <Route
            path="/world-countries-dashboard/country/:name"
            element={<Details />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Main>
    </>
  );
}

export default App;
