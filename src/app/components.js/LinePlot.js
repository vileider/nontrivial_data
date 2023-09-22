import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";
import { useEffect, useState } from "react";
export default function LinePlot() {
  const [oilArr, setOilArr] = useState([]);
  const [goldArr, setGoldArr] = useState([]);

  if (oilArr.length > 0 ) {console.log(Object.keys(oilArr[0])[1])}
  if (oilArr.length > 1) console.log("f", oilArr[0].Date);
  console.log(
    "map",
    goldArr.map((x) => {
      let tempObj = {x,y:0}
      const monthAndYear = x.Date.substr(0, 7);
      const preInt = monthAndYear.replace("-", ".");
      tempObj.x = JSON.parse(preInt);
      tempObj.y = JSON.parse(x.Price)
      return tempObj;
    })
  );
  useEffect(() => {
    fetch("http://localhost:3000/api/oil")
      .then((res) => res.json())
      .then((data) => setOilArr(JSON.parse(data)))
      .catch((err) => console.log(err));

    fetch("http://localhost:3000/api/gold")
      .then((res) => res.json())
      .then((data) => setGoldArr(JSON.parse(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <XYPlot width={1000} height={1000}>
      {/* <HorizontalGridLines data={[{x: 1, y: 5}]}/> */}
      <LineSeries
        data={goldArr.map((x) => {
          let tempObj = {x,y:0}
          const monthAndYear = x.Date.substr(0, 7);
          const preInt = monthAndYear.replace("-", ".");
          tempObj.x = JSON.parse(preInt);
          tempObj.y = JSON.parse(x.Price)
          return tempObj;
        })}
      />
      <LineSeries
        data={oilArr.map((x) => {
          let tempObj = {x,y:0}
          const monthAndYear = x.Date.substr(0, 7);
          const preInt = monthAndYear.replace("-", ".");
          tempObj.x = JSON.parse(preInt);
             tempObj.y = JSON.parse(x[`${Object.keys(x)[1]}`])
          return tempObj;
        })}
        />
      <XAxis top={1000 - 30} />
      <YAxis left={0} />
      {/* <XAxis />
  <YAxis /> */}
    </XYPlot>
  );
}
