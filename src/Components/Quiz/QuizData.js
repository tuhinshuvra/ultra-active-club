// import React, { useState } from 'react';
// import QuestionOptions from '../QuestionOptions/QuestionOptions';
// import './Quiz.css';

// export default function QuizData() {
//     const [options, setOptions] = useState({});
//     const addOption = (name, o) => {
//         setOptions({ ...options, [name]: o });
//     };

//     return (
//         <div className="quiz_data">
//             {variants.map((variant, index) => {
//                 return (
//                     <Variant
//                         options={options}
//                         variant={variant}
//                         addOption={addOption}
//                         key={index}
//                     />
//                 );
//             })}

//             <h3>
//                 Selected variants are:
//                 <ul>
//                     {Object.keys(options).map((name, i) => {
//                         return (
//                             <li key={i}>
//                                 {name}: {options[name].variantOptionName}
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </h3>
//         </div>
//     );
// }