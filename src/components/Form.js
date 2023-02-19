import React from "react";


// class Form extends React.Component {
//   render() {
//     return(
//         <form onSubmit={this.props.weatherMethod}>
//             <input type="text" name="city" placeholder="Город" />
//             <button>Получить погоду</button>
//         </form>
//     );
//   }
// }
// Оптимизация:
const Form = props => (
    <form onSubmit={props.weatherMethod} className="py-10 text-center xl:text-left xl:pl-10">
    <input type="text" name="city" placeholder="Город" className="w-44 outline-none p-3 rounded mb-5 mx-5 bg-slate-200 focus:bg-white hover:bg-white transition " />
    <button className="w-44 bg-yellow-300 hover:bg-yellow-400 transition p-3 rounded text-gray-700">Узнать погоду</button>
</form>
)

export default Form;