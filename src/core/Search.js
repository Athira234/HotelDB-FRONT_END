import { Component } from "react";
import "../assets/Styles/Search.css";
class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="s">
        <input
          className="search"
          placeholder="search"
          onChange={this.props.handleSearchChange}
        />
      </div>
    );
  }
}
export default Search;
