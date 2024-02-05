import { useEffect, useState } from "react";



const App = () => {
    //const [data1 ,setData1]=useState([])
    const [data, setData]=useState([])
    useEffect(()=>{
    fetch('http://localhost:8081/user')
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err=>console.log(err))
    },[])
  return (
    <div>
     <table className="table ">
     <tr><th>Name</th><th>Address</th><th>Email</th></tr>
       {data.map((item,i)=>(
        <tr key={i}>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.email}</td></tr>
        ))}
        </table>

       
     
            
      
    </div>
  )
}

export default App
