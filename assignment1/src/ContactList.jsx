import { useState } from "react";
import ContactCard from "./ContactCard";

const initdata=[
    {
        Id:1,
        name:"manoj",
        email:"manojgum@gmail.com",
        phone:"+91-7909012986",
        image:"https://im.indiatimes.in/content/itimes/blog/2016/Jul/22/1469162215-how-to-read-faces.jpg"
    },
    {
        Id:2,
        name:"Rajesh",
        email:"Rajeshgum@gmail.com",
        phone:"+91-4509012986",
        image:"https://im.indiatimes.in/content/itimes/blog/2016/Jul/22/1469162215-how-to-read-faces.jpg"
    },
    {
        Id:3,
        name:"Rohan",
        email:"Rohangum@gmail.com",
        phone:"+91-8709012986",
        image:"https://im.indiatimes.in/content/itimes/blog/2016/Jul/22/1469162215-how-to-read-faces.jpg"
    },
    {
        Id:4,
        name:"Neha",
        email:"Nehagum@gmail.com",
        phone:"+91-8979012986",
        image:"https://im.indiatimes.in/content/itimes/blog/2016/Jul/22/1469162215-how-to-read-faces.jpg"

    },

];
function ContactList(){

    const [data, setData]=useState(initdata);
    return(
        <div>
            {data.map((item)=>(
                <ContactCard name={item.name} email={item.email} phone={item.email} image={item.image}/>
            ))}
        </div>
    );
}

export default ContactList;