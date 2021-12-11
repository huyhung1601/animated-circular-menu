import React from 'react'
import { useState } from 'react'
import './menu.scss'
const Menu = () => {
    const [toggle,setToggle] = useState(true)
    const items= ['profile','jobs','projects', 'contact']
    return (
        <div className='menu '>
            <div className={`toggle ${toggle && 'active'}`} >
                <img src="./images/setting.png" alt="" onClick={()=>setToggle(!toggle)}/>
            </div>
            {items.map((item,index)=>(
                <li key={index} className={toggle && 'active'} onClick={()=>setToggle(!toggle)} >
                    <img src={`./images/${item}.png`} alt=""  />
                </li>
            ))}
            
        </div>
    )
}

export default Menu
