import React from 'react'
import post6 from "../assets/post6.jpeg"
import post7 from "../assets/post7.jpeg"
import post8 from "../assets/post8.jpeg"
import post3 from "../assets/post3.jpeg"
import post4 from "../assets/post4.jpeg"
import post1 from "../assets/post1.jpeg"
import post2 from "../assets/post2.jpeg"


function Events() {
    return (
        <>
            <h2>News & Events</h2>
            <img alt="" className="post" src={post6} />
            <img alt="" className="post" src={post7} />
            <img alt="" className="post" src={post8} />
            <a href="https://forms.gle/LJRR9L5ymhMNnL1W8" target="_blank" rel='noreferrer'><img alt="" className="post" src={post4} /></a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdRiu7H6ADfT3i-XlN5xnx8KoEHHr03abui2p0izb0G8SV3iw/viewform" target="_blank" rel='noreferrer'><img alt="" className="post" src={post3} /></a>
            <img alt="" className="post" src={post1} />
            <img alt="" className="post" src={post2} />
        </>
    )
}

export default Events