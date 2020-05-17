import React from "react";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    };
  }

  render() {
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              onChange={(e) => this.props.handleFilter(e.target.value)}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <button
            className={`filters__item ${
              this.state.filter === "name" && "is-selected"
            }`}
            onClick={() => {
              if (this.state.filter !== "name") {
                this.props.handleSort("name");
                this.setState({ filter: "name" });
              }
            }}
          >
            Nome <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              this.state.filter === "country" && "is-selected"
            }`}
            onClick={() => {
              if (this.state.filter !== "country") {
                this.props.handleSort("country");
                this.setState({ filter: "country" });
              }
            }}
          >
            País <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              this.state.filter === "company" && "is-selected"
            }`}
            onClick={() => {
              if (this.state.filter !== "company") {
                this.props.handleSort("company");
                this.setState({ filter: "company" });
              }
            }}
          >
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              this.state.filter === "department" && "is-selected"
            }`}
            onClick={() => {
              if (this.state.filter !== "department") {
                this.props.handleSort("department");
                this.setState({ filter: "department" });
              }
            }}
          >
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              this.state.filter === "admissionDate" && "is-selected"
            }`}
            onClick={() => {
              if (this.state.filter !== "admissionDate") {
                this.props.handleSort("admissionDate");
                this.setState({ filter: "admissionDate" });
              }
            }}
          >
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    );
  }
}

export default Filters;