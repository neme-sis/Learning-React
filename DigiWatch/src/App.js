import react, { useState } from 'react';
import './App.css';

function App() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', "May", 'June', 'July',
    'August', 'September', 'October', 'November', 'december'];

  var date = new Date()
  var [hr, setHr] = useState(date.getHours())
  var [min, setMin] = useState(date.getMinutes())
  var [sec, setSec] = useState(date.getSeconds())
  var [dateAndTime, setDateAndTime] = useState(date.getDate())
  var [month, setMonth] = useState(date.getMonth())
  var [year, setYear] = useState(date.getFullYear())
  var [day, setDay] = useState(date.getDay())

  setInterval(() => {
    var date = new Date();
    setHr(date.getHours())
    setMin(date.getMinutes())
    setSec(date.getSeconds())
    setDateAndTime(date.getDate())
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setDay(date.getDay());
    var ampm = " AM"
  }, 1000);

  return (
    <div className='body'>
      <div className="watch" id="watch">
        <div className="date">{days[day]}
        , {dateAndTime} {months[month]}
        , {year}
        </div>
        <div className="time">
          {(hr-12)>0?(((hr-12)<10)?('0'+(hr-12)):(hr-12)):((hr<10)?('0'+hr):hr)} : {(min<10)?('0'+min):min} : {(sec<10)?('0'+sec):sec}
        </div>
      </div>
    </div>
  );
}

export default App;
