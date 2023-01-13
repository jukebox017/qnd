// Copied directly from https://github.com/uber/react-vis/blob/premodern/showcase/plot/bar-chart.js
// to demonstrate a different viz and routing

import React from 'react';
import { Link } from 'react-router-dom';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries
} from 'react-vis';

const greenData = [{x: 'A', y: 10}, {x: 'B', y: 5}, {x: 'C', y: 15}];

const blueData = [{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}];

const labelData: any = greenData.map((d, idx) => ({
  x: d.x,
  y: Math.max(greenData[idx].y, blueData[idx].y)
}));

export default class BarChart extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{color: 'black'}}>Here's a simple bar chart.</h2>
        <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries className="vertical-bar-series-example" data={greenData} barWidth={30} />
          <VerticalBarSeries data={blueData} barWidth={30} />
          <LabelSeries data={labelData} />
        </XYPlot>

        <div>
          Click <Link to={`/`}>here</Link> to go back.
        </div>
      </div>
    );
  }
}
