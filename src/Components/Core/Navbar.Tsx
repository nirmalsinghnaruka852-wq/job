import { useState } from "react"
import IsWhen from './Iswhen'
import SideBar from "./SideBar"

function Navbar(){
   const [isShow , setisShow ]= useState<boolean>(false)
  const Changer =()=>{

  }
    return <>
    <div>
        <div>
            <div>
                <div>
                {/*  here logo  */}
                </div>
                <div>
                    {/*  here we will map the data  */}
                </div>
            </div>
            <div>
                {/* here the all logo of the    navgation  */}
            </div>
        </div>
    </div>

    <IsWhen when={isShow}>
     {() => <SideBar/> }
    </IsWhen>
    </>
    
}