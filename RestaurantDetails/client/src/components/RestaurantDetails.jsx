import React from 'react'

// const RestaurantDetails = () => {

//   return (
//     <div>RestaurantDetails</div>
//   )
// }

// export default RestaurantDetails

function RestaurantDetails ({ 
    image:url,
    name: title,
    cost,
    rating,
    votes,
    reviews,
    cuisine: tags
    
}){
      return (
    <div style={{display:"flex", gap:"2rem", border:"1px solid green", padding:"1rem", margin:".5rem"}}>
        <div>
            <img width="50px" src={url} alt={title} />
        </div>
        <div>
            <div>{title}</div>
            <div>{tags}</div>
            <div>Cost ₹${cost} for one </div>
        </div>
        <div>
            <div>{rating}</div>
            <div>{votes}</div>
            <div>{reviews}</div>
        </div>
    </div>
  )
}
export default RestaurantDetails