import React from 'react'

function feedbackCard() {
    return (
        <div className='h-40 rounded-lg   overflow-hidden flex   shadow-md hover:shadow-lg transition '>

            <div className='pt-4 px-2'>
                <div className='h-15 w-15  rounded-full overflow-hidden  '>
                    <img className='h-full w-full  object-cover' src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>


            <div className=' max-w-80 p-4 overflow-y-auto custom-scrollbar'>
                <p className='text-lg font-semibold'>John Doe</p>
                <p className='text-sm  leading-relaxed text-gray-700 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad, eius omnis, sint facere iure voluptatum tempora adipisci odio ex iusto alias in. Corporis labore.               
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad, eius omnis, sint facere iure voluptatum tempora adipisci odio ex iusto alias in. Corporis labore.                </p>
            </div>
        </div>


    )
}

export default feedbackCard