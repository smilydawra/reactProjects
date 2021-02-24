import './App.css';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import Login from './components/Login';
import Register from './components/Register';
import Single from './components/Single';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="container">
          <Switch>
            <Route path="/" exact component={BlogList}></Route>
            <Route path="/blog" exact component={BlogList}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/single" exact component={Single}></Route>
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
