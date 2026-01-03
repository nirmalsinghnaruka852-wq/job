import { Route } from "react-router-dom";



type NavigaterProps ={
    title: string ; 
    route :string ; 
    onClick: ()=> void 

}


function  Navigater({title , route ='/' , onClick,}:NavigaterProps){
  return <>
  <div   onClick={()=>onClick(Route)} className="w-full p-1">
    <div className="flex-col ">
        <div className="flex-row justify-end align-items-center">
      
        </div>
    <div>
     {NavLink.map(()=>{
        
     })}

    </div>
    <div>
        {/*  here the title  */}
    </div>
    </div>
    </div></>



}


export  default Navigater