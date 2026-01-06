// import { useState } from "react";

// type Node = React.ReactNode;
// type SwitcherProps = {
//   isActive: boolean;
//   children: Node[];
// };

// function SwitchingDiv({ isActive, children }: SwitcherProps) {
//     const [active , setActive] = useState<boolean>( isActive??true )

//     const togler = ()=>{
//         setActive(!isActive)
//     }
//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         height: "100%",

//         border: "1px solid black",
//       }}
//     >
//         {/* here div one  */}
//         <div 
//         style={{
//         position: "absolute",
//         width: "100%",
//         height: "100%",
//                 opacity: active ? 0:1,
//         border: "1px solid black",
//       }}
//         > Div1 </div>
//          <div
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           opacity: !active ? 0:1,
//           background: "blue",
//         }}
//       >
//         Div 2
//       </div>
//     </div>
//   );
// }
// export default SwitchingDiv;
