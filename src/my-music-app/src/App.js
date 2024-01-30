import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Auth/Register';
import MusicList from './components/Music/MusicList';
import SubmitMusic from './components/Music/SubmitMusic';
import VoteForm from './components/Vote/VoteForm';
import VoteResults from './components/Vote/VoteResults';
import CreateSession from './components/Session/CreateSession';
import SessionDetails from './components/Session/SessionDetails';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/music" component={MusicList} />
        <Route path="/submit-music" component={SubmitMusic} />
        <Route path="/vote" component={VoteForm} />
        <Route path="/vote-results" component={VoteResults} />
        <Route path="/create-session" component={CreateSession} />
        <Route path="/session-details" component={SessionDetails} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;

