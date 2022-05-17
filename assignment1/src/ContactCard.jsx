import styles from "./ContactCard.module.css"

function ContactCard(props){
    const {name,email,id,phone,image}=props
    return (
        <div className={styles.container}>
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
          
        </div>
    )
}
export default ContactCard;