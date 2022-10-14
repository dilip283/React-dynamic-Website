import React, { useState } from 'react';
import Workapi from './API/WorkAPI';


const HowitWorks = () => {
    const [workData, setWorkData] = useState(Workapi);
    console.log(workData);
    return (
        <>
            <section>
                <div className='work-container container'>
                    <h1 className='main-heading text-center'>How does it Work</h1>
                    <div className='row'>
                        {
                            workData.map((curElem) => {
                                const {id, logo, title, info} = curElem; //used destructuring
                                return (
                                    <>
                                        <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                                             <i class={`fontawesome-style ${logo}`}></i>  {/*// Template literals */}
                                            <h2 className='sub-heading'>{title}</h2>
                                            <p className='work-content'>
                                                {info}
                                             </p>
                                             

                                        </div>
                                    </>
                                );
                            })
                        }

                    </div>

                </div>
            </section>
        </>
    )
}

export default HowitWorks
