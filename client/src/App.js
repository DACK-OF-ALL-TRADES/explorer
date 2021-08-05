import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Main from "./pages/Landing Page/main";
import Login from "./pages/Enter page/Login";
import Signup from "./pages/Enter page/Signup";
import CityCard from "./pages/Profile page/CityCards";
import Home from "./pages/Home page";
import Profile from "./pages/Profile page";
import CityResult from "./pages/CityResult Page";
import Cities from "./pages/Cities Page";
import Asia from "./pages/Continents/Asia";
import Africa from "./pages/Continents/Africa";
import Europe from "./pages/Continents/Europe";
import NorthAmerica from "./pages/Continents/NorthAmerica";
import SouthAmerica from "./pages/Continents/SouthAmerica";
import Oceania from "./pages/Continents/Oceania";
import MyFavorites from "./pages/MyFavorites";
import Continents from "./pages/Continents";
import Top10 from "./pages/Top10";
import NotFound from "./pages/NotFound";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/CityCards">
              <CityCard />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/cities">
              <Cities />
            </Route>
            <Route exact path="/search/:city">
              <CityResult />
            </Route>
            <Route exact path="/Asia">
              <Asia />
            </Route>
            <Route exact path="/Europe">
              <Europe />
            </Route>
            <Route exact path="/NorthAmerica">
              <NorthAmerica />
            </Route>
            <Route exact path="/SouthAmerica">
              <SouthAmerica />
            </Route>
            <Route exact path="/Africa">
              <Africa />
            </Route>
            <Route exact path="/Oceania">
              <Oceania />
            </Route>
            <Route exact path="/myfavorites">
              <MyFavorites />
            </Route>
            <Route exact path="/continents">
              <Continents />
            </Route>
            <Route exact path="/top10">
              <Top10 />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
