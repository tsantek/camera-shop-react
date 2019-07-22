import React, { Component } from "react";

import Search from "./Search";
import ListItems from "./ListItems";
class ItemList extends Component {
  state = {
    search: "",
    filteredItems: []
  };

  handleSearch = search => {
    let filteredItems = [];
    const searchLowerCase = search.toLowerCase();

    if (search.length > 0) {
      Object.keys(this.props.state.cameras).forEach(key => {
        if (
          this.props.state.cameras[key].name
            .toLowerCase()
            .includes(searchLowerCase)
        ) {
          filteredItems.push(this.props.state.cameras[key]);
        }
      });
    } else {
      filteredItems = this.props.cameras;
    }
    this.setState({ search, filteredItems });
  };

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <ListItems
          cameras={
            this.state.search
              ? this.state.filteredItems
              : this.props.state.cameras
          }
        />
      </div>
    );
  }
}

export default ItemList;
