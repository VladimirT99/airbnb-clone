import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 space-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>About</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Support</h5>
            <p>Help Center</p>
            <p>Safety</p>
            <p>Travel Ideas</p>
            <p>Bucketlist</p>
            <p>Top 100</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Community</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>It is a pretty awsome clone</p>
            <p>Refferals</p>
            <p>Blog</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Host</h5>
            <p>React</p>
            <p>NextJS</p>
            <p>Tailwind</p>
            <p>HTML</p>
            <p>CSS</p>
        </div>
    </div>
  )
}

export default Footer