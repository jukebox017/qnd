import React from 'react';
import './App.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
