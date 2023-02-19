import React from "react";


// class Info extends React.Component {
//   render() {
//     return(
//       <div>
//         <h2>Погодное приложение</h2>
//         <p>Узнайте погоду в Вашем городе!</p>
//       </div>
//     );
//   }
// }

// Оптимизация:
const Info = () => (
  <div className="lg:p-5 p-0">
    <h2 className="pb-5 font-medium text-4xl 2xl:text-[50px] 2xl:leading-[60px] 2xl:flex 2xl:align-middle">Погодное приложение</h2>
    <p className="xl:text-xl text-mb text-amber-100">Узнайте погоду в Вашем городе!</p>
  </div>
)


export default Info;