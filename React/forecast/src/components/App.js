import React, { useState, useEffect } from "react";
/*
import React, { Component } from 'react'

export default class App extends Component {
  state = { 
    number : 0,
  }

  render() {
    return (
      <div>
        {this.state.number}
        <button onClick={() => {
          this.setState({number:this.state.number+1})
        }}> plus </button>
      </div>
    )
  }
}
*/
import Axios from "axios";
import Current from "./Current";
import Forecast from "./Forecast";
import Spinner from "./Spinner";
import "./App.css";

const App = () => {
  const APPID = "7cdaaa5541fe9f12cd0da03dba7d179c";
  const [current, setcurrent] = useState(null);
  const [forecast, setforecast] = useState(null);
  const [unit, setunit] = useState("c");

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getTemp = async coords => {
    const { latitude: lat, longitude: lon } = coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APPID}&units=metric&lang=kr`;
    const res = await Axios.get(url);
    const { data } = res;
    console.log(data);
    setcurrent(data);
  };
  const getHourlyTemp = async coords => {
    const { latitude: lat, longitude: lon } = coords;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${APPID}&units=metric&lang=kr`;
    const res = await Axios.get(url);
    const { data } = res;
    console.log(data);
    setforecast(data);
  };

  const getAll = async () => {
    try {
      const { coords } = await getLocation();
      await getTemp(coords);
      await getHourlyTemp(coords);
    } catch (error) {
      alert("위치 동의 필요");
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  /*
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);
     state = {
         count:0,
     }

  useEffect(() => {
    console.log("useEffect가 일어났어요!");
    document.title = `U clicked ${count} times`;
  }, [count, number]); //componentDidMount
*/
  return (
    /*    <>
      <button
        onClick={() => {
          setCount(count + 1);
          //this.setState({count:this.state.count+1});
        }}
      >
        카운트업!
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        카운트다운!
      </button>
      <h2>{count}</h2>
      <h2>{number}</h2>
*/
    <>
      <header className="header-padding">
        <h1>일기예보</h1>
      </header>
      <main className="container">
        {!current || !forecast ? (
          <Spinner />
        ) : (
          <>
            <Current current={current} unit={unit} setunit={setunit} />
            <Forecast forecast={forecast} unit={unit} />
          </>
        )}
      </main>
    </>
  );
};

export default App;
