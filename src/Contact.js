import React, { useState } from 'react'
import { Await } from 'react-router-dom';

const Contact = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",

    });
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
        // Console.log(postUserData);

    };
    // Connect with Firebase
    const submitData = async (event) => {
        event.preventData();
        const { firstName, lastName, phone, email, address, message } = userData;
        if (firstName && lastName && phone && email && address && message) {


            const res = await fetch(
                "https://reactfirebasewebsite-1a281-default-rtdb.firebaseio.com/userDataRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phone,
                        email,
                        address,
                        message,

                    }),
                }

            );
            if (res) {
                setUserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",
                });
                alert("Your form has been Submitted");
            }
            else {
                alert("Please fill the fields");
            }
        }
        else {
            alert("Please fill the fields");
        }
    };

    return (
        <>
            <section className='contactus-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className='row'>
                                <div className='contact-leftside col-12 col-lg-5'>
                                    <h1 className='main-heading fw-bold'>
                                        Connect with us
                                    </h1>
                                    <p className='main-hero-para'>
                                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum

                                    </p>
                                    <figure>
                                        <img src='./images/hero1.jpg' alt='' className='img-fluid'></img>
                                    </figure>
                                </div>
                                <div className='contact-rightside col-12 col-lg-7'>
                                    <form method='POST'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact'>
                                                <input
                                                    type='text'
                                                    name='firstName'
                                                    id=''
                                                    className='form-control'
                                                    placeholder='First Name'
                                                    value={userData.firstName}
                                                    onChange={postUserData} />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                                <input
                                                    type='text'
                                                    name='lastName'
                                                    id=''
                                                    className='form-control'
                                                    placeholder='Last Name'
                                                    value={userData.lastName}
                                                    onChange={postUserData} />
                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                                <input
                                                    type='text'
                                                    name='phone'
                                                    id=''
                                                    className='form-control'
                                                    placeholder='Phone Number'
                                                    value={userData.phone}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                                <input
                                                    type='text'
                                                    name='email'
                                                    id=''
                                                    className='form-control'
                                                    placeholder='Email address'
                                                    value={userData.email}
                                                    onChange={postUserData}
                                                />
                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='col-12 contact-input-field'>
                                                <input type='text' name='address' id='' className='form-control' placeholder='Enter yourdress'
                                                    value={userData.address}
                                                    onChange={postUserData} />
                                            </div>
                                            <div className='col-12 contact-input-field'>
                                                <input type='textarea' name='message' id='' className='form-control' placeholder='Enter your message'
                                                    value={userData.message}
                                                    onChange={postUserData} />
                                            </div>
                                            <div className='form-check form-checkbox-style'>
                                                <input type='checkbox' class='form-check-input'
                                                    id='flexCheckChecked' />
                                                <label class='form-check-label' className='main-hero-para'>I agree that with the Terms and Conditions </label>
                                            </div>
                                        </div>
                                        <button type='submit' className='btn btn-style w-100' onClick={submitData}>Submit</button>

                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contact
