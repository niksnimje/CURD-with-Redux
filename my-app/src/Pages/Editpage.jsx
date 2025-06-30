import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct } from '../Redux/Action/productAction'



function Editpage() {

    const {id}=useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {filteredProducts}=useSelector(state=>state.ProductState)

     const [form,setform]=useState({
        title:'',
        price:'',
        discription:'',         
        image:''
    })

    useEffect(()=>{
        const updateData=filteredProducts.find(p=>p._id===id)
        if(updateData)
        {
            setform(updateData)
        }
    },[id,filteredProducts])


    const handleChange=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(updateProduct(id,form))
        navigate('/product')
    }

  
  return (
    <>
    <div className="container mt-4">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} className="form-control mb-2" placeholder="Title" />
        <input name="price" value={form.price}  onChange={handleChange} className="form-control mb-2" placeholder="Price" />
        <textarea name="description" value={form.description} onChange={handleChange} className="form-control mb-2" placeholder="discription" />
        <input name="image" value={form.image} onChange={handleChange} className="form-control mb-2" placeholder="Image URL" />
        <button className="btn btn-success" type="submit">Update Product</button>
      </form>
    </div>
    </>
  )
}

export default Editpage