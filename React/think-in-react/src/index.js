import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
/*
const data = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
*/

class App extends React.Component {
  //state는 class형 component에만 선언해야함.
  state = {
    keyword: "",
    checked: false,
    data: null
  };

  async getData(url) {
    const res = await axios.get(url);
    const { data } = res;
    data.sort(function(a, b) {
      return a.category < b.category ? -1 : a.category > b.category ? 1 : 0;
    });

    //const data = res.data;
    this.setState({ data });
    //this.setState({data: data});
    console.log(data);
  }

  componentDidMount() {
    //api
    const url = "https://frozen-ocean-08299.herokuapp.com";
    this.getData(url);
  }

  handleKeywordChange = keyword => {
    this.setState({ keyword });
  };
  handleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };
  render() {
    return (
      <>
        <SearchBar
          handleKeywordChange={this.handleKeywordChange}
          handleChecked={this.handleChecked}
        />
        <ProductTable
          data={this.state.data}
          keyword={this.state.keyword}
          checked={this.state.checked}
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
