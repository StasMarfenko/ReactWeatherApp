import React from "react";
import Info1 from "./components/Info"
import Form from "./components/Form"
import Weather from "./components/Weather"
import './App.css';
import loader from "./img/loader.png";
import cloud from "./img/cloud-bg.jpg";

const API_KEY = "4ebdb346a0d3b4d400d1988d96a95766";
// const link = "api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=ВАШ_КЛЮЧ&units=metric"

class App extends React.Component {

  state = {
    temp: undefined,
    humidity: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    weather: undefined,
    gmt: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    let city = (e.target.elements.city.value).trimEnd();
    let loader = document.querySelector('.preloader');
    loader.style.display='block';
    if(city){
      const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await API_URL.json();
      e.target.elements.city.value ='';
      if(data){
        loader.style.display='none'
      }
      if(data.cod === '404'){
        return this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            sunrise: undefined,
            sunset: undefined,
            weather: undefined,
            gmt: undefined,
            error:"City not found!"
        });
    }
      let sunsetInSec = data.sys.sunset;
      let sunriseInSec = data.sys.sunrise;
      let dateSunset = new Date(sunsetInSec * 1000);
      let dateSunrise = new Date(sunriseInSec * 1000);
      let weather = data.weather[0].main;
      switch(weather){
        case 'Snow':
        weather = 'Cнег';
        break;
        case 'Rain':
        weather = 'Дождь';
        break;
        case 'Clear':
        weather = 'Ясно';
        break;
        case 'Clouds':
        weather = 'Облачно';
        break;
        case 'Mist':
        weather = 'Туман';
        document.querySelector('.titleWeather').style.backgroundImage = `url(${cloud})`;
        break;
        case 'Haze':
        weather = 'Дымка';
        break;
        case 'Fog':
        weather = 'Густой туман';
        break;
        default:
        console.log('Необходим перевод');
        break;
      }
      let timezone = data.timezone;
      if(data.timezone>=0){
        timezone = '+'+data.timezone/3600;
      }else{
        timezone = data.timezone/3600;
      }
      
      //Развернутая запись приведения времени:
      // let sunset_date = dateSunset.getHours() + ":" + dateSunset.getMinutes() + ":" + dateSunset.getSeconds();
      // let sunrise_date = dateSunrise.getHours() + ":" + dateSunrise.getMinutes() + ":" + dateSunrise.getSeconds();
      //Короткая запись приведения времени:
      let timeSunset = dateSunset.toLocaleTimeString();
      let timeSunrise = dateSunrise.toLocaleTimeString();

      this.setState({
        temp: parseFloat((data.main.temp).toFixed(0)),
        humidity: data.main.humidity,
        city: data.name,
        country: data.sys.country,
        sunrise: timeSunrise,
        sunset: timeSunset,
        weather: weather,
        gmt: timezone,
        error: undefined
      });
    } else {
      loader.style.display='none';
      this.setState({
        temp: undefined,
        humidity: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        weather: undefined,
        gmt: undefined,
        error: "Введите название города"
      });
    }
  }
  render() {
    return(
      <div className="wrapper h-screen 2xl:min-h-[800px]">
        <div className="w-full lg:w-2/3 h-full mx-0 lg:mx-auto flex items-center">
          <div className="weather-block  lg:min-h-[400px] lg:min-w-[680px] flex-row lg:flex w-full h-full lg:h-3/4 bg-sky-500 rounded shadow-lg">
            <div className="titleWeather relative bg-cover bg-center w-full h-1/2 lg:h-full lg:w-2/5 rounded">
              <div className="grid absolute h-full w-full bg-black bg-opacity-70 text-slate-200 pt-20 2xl:pt-40 text-center rounded-l">
               <Info1 />
              </div>
            </div>
            <div className="relative info w-full lg:w-3/5">
              
                <Form weatherMethod={this.gettingWeather} />
                <Weather 
                {...this.state}//spread оператор
                  // temp={this.state.temp}
                  // city={this.state.city}
                  // country={this.state.country}
                  // sunrise={this.state.sunrise}
                  // sunset={this.state.sunset}
                  // error={this.state.error}
                />
              <div className="preloader hidden absolute top-0 bg-black opacity-50 w-full h-full"> 
                <img src={loader} alt="" className="absolute top-0 bottom-0 left-0 right-0 m-auto"/>
              </div>
                
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// function App2() {
//   return(
//     <h1 className="">HELLO!</h1>
//   )
// }
export default App;
