import { useState } from "react";
import styles from "./ContactCard.module.css"

function ContactCard(props){
    const {name,email,id,phone,image}=props
   const [isActive,setIsActive]=useState(false)

//    if(isActive)
//    {
//        return <div onClick={()=>setIsActive(false)}>check</div>
//    }

    return (
        <div onClick={()=>setIsActive(!isActive)} className={styles.container}>
            <div>  
                 <img style={{
                     width:"60px"
                 }}
                src={image}
                alt="example"
                />
             </div>
            <div>
                <div>{name}</div>
                <div>{email}</div>
            </div>
            {isActive && <div> {phone} </div>}
          
        </div>
    )
}
export default ContactCard;