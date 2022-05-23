
import { useEffect , useState} from 'react';
import './App.css';
import axios from 'axios'
import RestaurantDetails from './components/RestaurantDetails';
// import RestaurantDetails from "./components/RestaurantDetails"
function App() {
  const [loading , setLoading]=useState(true);
  const [error , setError]=useState(false);
  const [data,setData]=useState([]);
  const [page,setPage]=useState(1);
  {/* rating sorting */}
  const [ratingOrder, setRatingOrder]= useState("asc");
  {/* end rating sorting */}
    {/* cost sorting */}
    const [costOrder, setCostOrder]= useState("asc");
    {/* end cost  sorting */}
    const [filterRating,setFilterRating]=useState(0);
    const [q,setQ]=useState("");
    const [text,setText]=useState("")

  useEffect(()=>{
    fetchData({page,ratingOrder,costOrder,filterRating,q})
  },[page,ratingOrder,costOrder,filterRating,q])
  const fetchData=async ({page,ratingOrder,costOrder,filterRating,q})=>{
    setLoading(true)
    axios({
      method:'get',
      url:"http://localhost:3000/food" ,params:{
        _page:page,
        _limit:5,
        _sort: "rating,cost",
        _order: `${ratingOrder},${costOrder}`,
        rating_gte:filterRating,
        q:q
      }
    })
    .then(res=>{
      setData(res.data);
      setLoading(false);
    })
    .catch(err=>{
      setError(true);
      setLoading(false);
    })
  }

  console.log(data)
  return (
    <div className="App">
    <h1>Restaurant Details</h1>
    {loading && <div> loading </div>}

    <div>
      <h1>Search</h1>
      <input value={text} onChange={(e)=>setText(e.target.value)} />
      <button onClick={()=>setQ(text)}>Search</button>
    </div>

        {/* start rating order sorting */}
        <div>
    <button disabled={costOrder==="desc"} onClick={()=>setCostOrder("desc")}>COST SORT BY DESC </button>
          <button disabled={costOrder==="asc"} onClick={()=>setCostOrder("asc")}>  COST SORT BY ASC </button>
    </div>
    {/* end rating order sorting */}

    {/* start rating order sorting */}
    <div>
    <button disabled={ratingOrder==="desc"} onClick={()=>setRatingOrder("desc")}>RATING SORT BY DESC </button>
          <button disabled={ratingOrder==="asc"} onClick={()=>setRatingOrder("asc")}>  RATING SORT BY ASC </button>
    </div>
    {/* end rating order sorting */}
<div>
<h4>Filter rating</h4>
<button onClick={()=>setFilterRating(4)}>greater than 4 </button>
<button onClick={()=>setFilterRating(3)}>greater than 3 </button>
<button onClick={()=>setFilterRating(2)}>greater than 2 </button>
<button onClick={()=>setFilterRating(1)}>greater than 1 </button>
<button onClick={()=>setFilterRating(0)}>All </button>
</div>


    <div>
    {
      data.map(item =>
        <RestaurantDetails key={item.id} {...item} />)
    }
    </div>
<div>
  {/* pagination */}
  <button disabled={page===1} onClick={()=>setPage(page-1)}> prev </button>
<PaginationComponent currentPage={page} lastPage={5} onPageChange={setPage}/>
  <button onClick={()=>setPage(page+1)}> next </button>
  
</div>
    </div>
  );
}



// GIVEN THE CURRENT PAGE
const PaginationComponent = ({
  currentPage,
  lastPage,
  onPageChange
}) => {
  const arr = new Array(lastPage).fill(0);
  return (
    <div>
      {
        arr.map( (item, page)=> <button onClick={()=>onPageChange(page+1)}
         disabled={(page+1)===currentPage}> {page+1} </button> )
      }
    </div>
  )
}



export default App;




