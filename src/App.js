import React, { useEffect } from "react";
import "@fontsource/roboto";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home/home.page";
import { MovieDetailsPage } from "./pages/MoviePage/movieDetails.page";

// components
import { AppBarWrap } from "./components/compound/appbarWrap/appbarWrap.HOC";

// library fxns
import { useTranslation } from "react-i18next";

const WrapAppBar = (page) => () => AppBarWrap(page);

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("hindi");
  }, [i18n]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={WrapAppBar(HomePage)()} />
        <Route path="/watchlist" exact render={WrapAppBar(HomePage)()} />
        <Route
          path="/movie/:id"
          exact
          render={WrapAppBar(MovieDetailsPage)()}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
