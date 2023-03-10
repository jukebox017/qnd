import React, { useState } from 'react';
import './App.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function App() {
  const [bgColor, setBgColor] = useState<string>('#282c34');

  const changeBgColor = () => {
    // From https://stackoverflow.com/a/5365036/4020932
    setBgColor("#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"));
  }

  return (
    <div className="App" style={{backgroundColor: bgColor}}>
      <h2>Here's a simple line graph.</h2>
      <XYPlot
        width={300}
        height={300}>
        <HorizontalGridLines />
        <LineSeries
          data={[
            {x: 1, y: 10},
            {x: 2, y: 5},
            {x: 3, y: 15}
          ]}/>
        <XAxis />
        <YAxis />
      </XYPlot>
      <div style={{color: 'white'}}>
        Click <Link to={`bar-chart`}>here</Link> to see a simple bar chart.
      </div>
      <div style={{color: 'white'}}>
        Click <Link to={`star-wars`}>here</Link> to fetch data from the Star Wars API.
      </div>
      <div style={{color: 'white', margin: '20px 0'}}>
        Click <Button onClick={changeBgColor}>here</Button> to change the background color to a random color.
      </div>
    </div>
  );
}

export default App;
