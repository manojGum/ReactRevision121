
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
  {/* sorting */}
  const [ratingOrder, setRatingOrder]= useState("asc");
  {/* end sorting */}

  useEffect(()=>{
    fetchData({page,ratingOrder})
  },[page,ratingOrder])
  const fetchData=async ({page,ratingOrder})=>{
    setLoading(true)
    axios({
      method:'get',
      url:"http://localhost:3000/food" ,params:{
        _page:page,
        _limit:5,
        _sort:"rating",
        _order: ratingOrder
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
    {/* sorting */}
    <div>
    <button disabled={ratingOrder==="desc"} onClick={()=>setRatingOrder("desc")}>
            RATING SORT BY DESC
            </button>
          <button disabled={ratingOrder==="asc"} onClick={()=>setRatingOrder("asc")}>
            RATING SORT BY ASC
            </button>
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
