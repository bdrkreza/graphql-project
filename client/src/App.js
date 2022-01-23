import {
  ApolloClient, ApolloProvider, InMemoryCache
} from "@apollo/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav';
import AnimalPage from './pages/AnimalPage/AnimalPage';
import CategoryPage from './pages/CategoryPage';
import LandingPage from './pages/LandingPage';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});
function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
      <BrowserRouter >
          <Nav />
          <Switch>
            <Route exact strict path="/" component={LandingPage}/>
            <Route exact strict path="/products/:slug" component={CategoryPage}/>
            <Route exact strict path="/product/:slug" component={AnimalPage}/>
          </Switch>
      </BrowserRouter>
      </ApolloProvider>
      
    </div>
  );
}

export default App;
