import React from 'react';

import './App.scss';
import Topbar from './components/Topbar';
import Contact from './components/Contact';
import Contacts from './components/Contacts';
import Filters from './components/Filters';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar/>
        <Filters/>
        <Contacts>
          <Contact/>
        </Contacts>
      </React.Fragment>
    )
  }
}

export default App;
