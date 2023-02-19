import React from "react";


// class Weather extends React.Component {
//   render() {
//     return(
//       <div>
//         { this.props.city && 
//             <div>
//                 <p>Местоположение: {this.props.city}, {this.props.country}</p>
//                 <p>Температура: {this.props.temp}</p>
//                 <p>Влажность: {this.props.humidity}</p>
//                 <p>Восход солнца: {this.props.sunrise}</p>
//                 <p>Заход солнца: {this.props.sunset}</p>
//             </div>
//         }
//         <p>{this.props.error}</p>
//       </div>
//     );
//   }
// }

// Оптимизация кода:
const Weather = props => {
    return(
        <div>
        { props.city && 
            <div className="pl-10 text-white 2xl:text-2xl 2xl:leading-10">
                <p>Местоположение: <span className="text-yellow-300 font-medium">{props.city}, {props.country} (GMT{props.gmt})</span></p>
                <p>Температура: <span className="text-yellow-300 font-medium">{props.temp} <sup>o</sup>C</span></p>
                <p>Погода: <span className="text-yellow-300 font-medium">{props.weather}</span></p>
                <p>Влажность: <span className="text-yellow-300 font-medium">{props.humidity} %</span></p>
                <p>Восход солнца: <span className="text-yellow-300 font-medium">{props.sunrise} (GMT+6)</span></p>
                <p>Заход солнца: <span className="text-yellow-300 font-medium">{props.sunset} (GMT+6)</span></p>
            </div>
        }
        <p className="text-2xl pl-10 text-white">{props.error}</p>
      </div>
    );
}


export default Weather;