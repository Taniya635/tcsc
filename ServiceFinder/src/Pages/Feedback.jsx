import React from 'react'
import FeedbackCard from '../components/feedbackCard'
import Footer from '../components/Footer'

function Feedback() {
  return (
    <>
    <div className='p-10 flex items-center justify-center flex-wrap gap-4 bg-gray-100'>
        <FeedbackCard/> 
        <FeedbackCard/> 
        <FeedbackCard/> 
        <FeedbackCard/> 
        <FeedbackCard/> 
    </div>

    <Footer/>
    </>
  )
}

export default Feedback