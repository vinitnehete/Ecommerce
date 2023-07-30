import { useState } from "react"
import { useEffect } from "react"
import "./Navbar.css"
const Navbar = ({handleSelect , handleSearch , value}) =>{

    const [categories , setCategories] = useState([])
    const category = async() =>{
        const response = await fetch("https://fakestoreapi.com/products/categories")
        const result  =  await response.json()
        console.log(result)
        setCategories(result)
    }

    useEffect(()=>{
        category();
    } , [])


    return(
       <div className="navb">
        
        <select onChange={handleSelect}>
            <option selected>All Categoery</option>
        {categories.map((item)=>{
            return  <option value={item}>{item}</option>
        })}
         </select>


         <input onChange={handleSearch}  value = {value}></input>
        
        <div>
        <button>Login</button>
         <button>Register</button>
        </div>
        

       </div>
    )
}


export default Navbar