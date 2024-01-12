import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./utils/constants";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div data-test="app">
        <MainNavigation/>
        <Layout>
          <Routes>
            <Route path={ALL_MEETUP_PAGE} element={<AllMeetupsPage />} />
            <Route path={NEW_MEETUP_PAGE} element={<NewMeetupsPage />} />
            <Route path={FAVORITES_PAGE} element={<FavoritesPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
