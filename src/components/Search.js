import React, { Component } from "react";

class Search extends Component {
  onChange(e) {
    let search = e.target.value;
    this.props.handleSearch(search);
  }

  render() {
    return (
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Filter for what you're looking for here..."
          onChange={e => this.onChange(e)}
        />
      </div>
    );
  }
}

export default Search;
