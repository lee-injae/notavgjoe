import React from 'react';

import { Link } from 'react-router-dom'

import '../Home/home.css'

function Cache () {
    return (
        <div className="cache">
            <h1 className='fs-600'>In case the website does not work as expected...</h1>
            <h2 className='fs-500'>Please follow the steps below</h2>
            <br />
            <p>Chrome/Firefox and Mac: Hold down Command, Shift and click the 'R' key. </p>
            <p>Chrome/Firefox and Windows: Hold down Ctrl and press F5.</p>
            <br />
            <p>Safari: Hold down the option and command key then press the 'E' key. </p>
            <br />
            <p>Internet Explorer: Hold the Control key, press the F5 key. </p>
            <br />
            <hr />
            <h2 className='fs-500'>If the above step of hard refreshing your browser does not work,</h2>
            <h2 className='fs-500'>Please go to your browser settings, delete your cache the last hour.</h2>
            <h2 className='fs-500'>And try again</h2>
            <br />
            <p>Thank you!</p>


        </div>

    )
}

export default Cache;