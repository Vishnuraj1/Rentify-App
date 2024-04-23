import React, { Fragment, useContext, useState } from 'react';
import './Create.css';

import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [Name, setName] = useState('');
    const [Category, setCategory] = useState('');
    const [Price, setPrice] = useState('');
    const [Image, setImage] = useState('');
    const date = new Date()

    const handleSubmit = (e) => {
        e.preventDefault()
     
    
      }
    return (
        <div>
            <div className="CreateContainer">
           
                <card>
                    <div className="centerDiv">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="fname">Name</label>
                            <br />
                            <input
                                className="input"
                                type="text"
                                id="fname"
                                name="Name"
                                value={Name}
                                onChange={((e) => { setName(e.target.value) })}
                                defaultValue="John"
                            />
                            <br />
                            <label htmlFor="fname">Category</label>
                            <br />
                            <input
                                className="input"
                                type="text"
                                id="fname"
                                name="category"
                                value={Category}
                                onChange={((e) => { setCategory(e.target.value) })}
                                defaultValue="John"
                            />
                            <br />
                            <label htmlFor="fname">Price</label>
                            <br />
                            <input className="input" type="number" id="fname" name="Price"
                                value={Price}
                                onChange={(e) => { setPrice(e.target.value) }}
                            />

                            <br />

                            <br />
                            <img alt="Posts" width="200px" height="200px" src={Image ? URL.createObjectURL(Image) : ''} ></img>

                            <br />
                            <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" />
                            <br />
                            <button className="uploadBtn">upload and Submit</button>

                        </form>
                    </div>
                </card>

                </div>
            
        </div>
    )
}

export default Create