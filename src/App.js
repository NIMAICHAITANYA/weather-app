import React,{useState} from 'react'
import axios from'axios'


function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  

  const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=9e7e62cd19dce30287dd106320fcf312`
  const searchLocation = (event) => 
  {
    if(event.key === 'Enter') 
    {
      axios.get(url).then((resopnse)=>{
          setData(resopnse.data)
          console.log(resopnse.data)
      })
      }
  }
  return (
    <div className="app">
      <div className='search'>
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type = "text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main? <h1>{data.main.temp}°C</h1> : null}
          </div>
          <div className="description">
           {data.weather ? <p>{data.weather[0].main}</p>:null}
            <p>Clouds</p>
          </div>
        </div>
    { data.name !== undefined &&  
        <div className="bottom">
          <div className='feels'>
          {data.main? <p>{data.main.feels_like}°C</p> : null}
             <p className='bold'>Feels Like</p>
          </div>
          <div className='humidity'>
          {data.main? <p>{data.main.humidity}%</p> : null}
            <p className='bold'>Humidity</p>
          </div>
          <div className='wind'>
          {data.main? <p>{data.wind.speed}MPH</p> : null}
            <p className='bold'> Wind Speed</p>
          </div>
        </div>
      }
      </div>
    </div>
  );
}

export default App;
