import logo from './logo.svg';
import './App.css';

function App() {
  let curdate =new Date(2021,2,2,13);
curdate = curdate.getHours();
let greeting='';
const cssstyle={};
if(curdate>=1&&curdate<12)
{
  greeting ="Good Morning";
  cssstyle.color='Green';
}
else if(curdate>=12&&curdate<17)
{
  greeting ="Good Afternoon";
  cssstyle.color='Orange';

}
else 
{
  greeting ="Good Night";
  cssstyle.color='Black';
}

return(
<>
<div>
<h1>Hello sir,<span style={cssstyle}>{greeting}</span>
</h1>
</div>
</>
);
}

export default App;
