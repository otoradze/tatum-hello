import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { HomePage } from '@pages/HomePage';
import { ErrorPage } from '@pages/ErrorPage';
import '@shared/configs/styles/global.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <LocationProvider>
      <ToastContainer />
      <div>
        <main>
          <Router>
            <Route path="/" component={HomePage} />
            <Route default component={ErrorPage} />
          </Router>
        </main>
      </div>
    </LocationProvider>
  );
}

render(<App />, document.getElementById('app'));
