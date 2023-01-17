import './Assform.css';
import { useState } from "react"

export default function Myform() {

    const [data, setData] = useState({
        name:"",
        email:"",
        number:"",
        add:""
    })

    const handleChange = (e) =>{
        const new_name = e.target.name;
        const value = e.target.value;
        console.log(new_name, value)
        setData((pre)=>{
            return{
                ...pre, [new_name]:value
            }    
        })
    }
    const submitform = (e)=>{
        e.preventDefault()
        console.log(data);
    }
    return (
        <>
            <form onSubmit={submitform}>
                <div>
                    <label>Enter Name:</label>
                    <input type="text" value={data.name} onChange={handleChange} name="name" placeholder="Enter your name..."></input>
                </div>
                
                <div>
                    <label>Enter Email:</label>
                    <input type="email" value={data.email} onChange={handleChange} name="email" placeholder="Enter your email..."></input>
                </div>
                
                <div>
                    <label>Enter Number:</label>
                    <input type="number" value={data.number} onChange={handleChange} name="number" placeholder="Enter your Number..."></input>
                </div>
                
                <div>
                    <label>Enter Address:</label>
                    <input type="text" value={data.add} onChange={handleChange} name="add" placeholder="Enter your Address..."></input>
                </div>
                
                <input type="submit"/>
            </form>
        </>
    )

}