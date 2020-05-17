import React from "react";

import "./App.scss";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

const url = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      listContacts: [],
    };
  }

  handleFilter = (param) => {
    const { contacts } = this.state;
    const listContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(param.toLocaleLowerCase())
    );
    this.setState({
      listContacts,
    });
  };

  handleSort = (attribute) => {
    const { listContacts } = this.state  
    const order = listContacts.sort((a, b) => a[attribute] > b[attribute] ? 1 : b[attribute] > a[attribute] ? -1 : 0);
    this.setState({
      listContacts: order,
    })
  }

  async componentDidMount() {
    await fetch(url)
      .then((contacts) => contacts.json())
      .then((contacts) => {
        this.setState({
          contacts,
          listContacts: contacts,
        });
      });
  }

  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar />
        <Filters
          handleFilter={this.handleFilter}
          handleSort={this.handleSort}
        />
        <Contacts contacts={this.state.listContacts} />
      </div>
    );
  }
}

export default App;