import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";  
import Sdata from "./Sdata";


function ncard(val,index)
{
return (
<Card
     key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    links={val.links}


    />
);
}
ReactDOM.render(
  <>
  <h1 className="heading">Top 5 Netflix Series</h1>
  {Sdata.map(ncard)}
 </>,
  document.getElementById('root')

);