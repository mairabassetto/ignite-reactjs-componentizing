import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { MoviesProvider } from './useMovies';
import { IndexPage } from './pages';

export function App() {
  return (
    <MoviesProvider>
      <IndexPage />
    </MoviesProvider>
  )
  }