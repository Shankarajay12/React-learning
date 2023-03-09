import { useState } from "react";
import "./app.css";



function App() {
  const [EmailTxt,setEmailTxt]=useState(true);
  const [PhoneTxt,setPhoneTxt]=useState(true);
  const [HoroscopeTxt,setHoroscopeTxt]=useState(true);
  const [buttonCondition,setbuttonCondition]=useState(true);
const inputTxt=(e)=>{
  var txt=e.target.value;
  console.log(txt);
  if(txt.length>0)
  {
    setEmailTxt(false)
  }
  else if(txt.length<1)
  {
    setEmailTxt(true);
  }
}
const inputTxt2=(e)=>{
  var txt=e.target.value;
  console.log(txt);
  if(txt.length>0)
  {
    setPhoneTxt(false)
  }
  else if(txt.length<1)
  {
    setPhoneTxt(true);
  }
}
const inputTx3=(e)=>{
  var txt=e.target.value;
  console.log(txt);
  if(txt.length>0)
  {
    setHoroscopeTxt(false)
  }
  else if(txt.length<1)
  {
    setHoroscopeTxt(true);
  }
}
const inputTxt4=(e)=>{
  var txt=e.target.value;
  console.log(txt);
  if(txt.length>0)
  {
    setbuttonCondition(false)
  }
  else if(txt.length<1)
  {
    setbuttonCondition(true);
  }
}

  return (
   <div>
   <div className="body">
   <label>UserName:<input type='required'  onChange={inputTxt}></input></label>
   </div>
   <div className="body">
   <label>Email:<input type='required' required disabled={EmailTxt}  onChange={inputTxt2}></input></label>
   </div>
   <div className="body">
   <label>PhoneNumber:<input type='number' required disabled={PhoneTxt}  onChange={inputTx3}></input></label>
   </div>
   <div className="body">
    <label>Horoscope-signe<input placeholder="Enter the text" disabled={HoroscopeTxt}  onChange={inputTxt4}></input></label>
    </div>
    <div className="body">
    <button type="submit" disabled={buttonCondition}>Submit</button>
    </div>
   </div>
  );
}

export default App;
