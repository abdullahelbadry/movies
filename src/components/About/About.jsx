import React from 'react';
import abdullah from './../../abdo2.jpg'

export default function About() {
  return (
    <>
        <div className='mt-5'>
        <div className='row mt-5 justify-content-center align-items-center'>
          <div className='col-md-3'>
            <div><img className='w-100 rounded-circle' src={abdullah} alt="myPhoto" /></div>
          </div>
          <div className='col-md-8'>
            <h3 className='fw-bold'>Abdullah Ahmed Mohamed Elbadry</h3>
            <h5>Front-End Developer (React JS)</h5>
            <p className='text-muted'>Graduated from faculty of computer and informtics zagazig university with a 4 years of experience in IT field and ERP administration seeking to a new challenge in software development field trying to build modern and dynamic websites using React js as a frontend framework that built and established from facebook.</p>
          </div>
        </div>
        </div>
        
    </>
  );
}
