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
                <div className="nav">
                    <h1>RENTIFY</h1>
                </div>
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
                            {/* <label htmlFor="fname">Category</label>
                            <br />
                            <input
                                className="input"
                                type="text"
                                id="fname"
                                name="category"
                                value={Category}
                                onChange={((e) => { setCategory(e.target.value) })}
                                defaultValue="John"
                            /> */}
                            <br />
                            <label for="cars">Category:</label>
                            
                            <select name="Category" id="Category">
                                <option value="Car">Car</option>
                                <option value="Home">Home</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Appliances">HomeAppliances</option>
                                <option value="powerTools">powerTools</option>
                                <option value="Computeprs">Computers</option>
                                <option value="Mobile">Mobile Phones</option>
                                <option value="Other">Other</option>
                            </select>
                            <br />
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