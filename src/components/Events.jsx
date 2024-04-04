import React from 'react'
import post6 from "../assets/post6.jpeg"
import post7 from "../assets/post7.jpg"
import post8 from "../assets/post8.jpg"
import post3 from "../assets/post3.jpeg"
import post4 from "../assets/post4.jpeg"
import post1 from "../assets/post1.jpeg"
import post5 from "../assets/post5.jpg"
import post9 from "../assets/post9.jpg"
import post10 from "../assets/post10.jpg"
import post11 from "../assets/post11.jpg"



function Events() {
    return (
        <>
            <h2>News & Events</h2>
            <img alt="" className="post" src={post11} />
            <img alt="" className="post" src={post5} />
            <img alt="" className="post" src={post7} />
            <img alt="" className="post" src={post9} />
            <img alt="" className="post" src={post8} />
            <img alt="" className="post" src={post10} />
            <img alt="" className="post" src={post6} />
            <a href="https://forms.gle/LJRR9L5ymhMNnL1W8" target="_blank" rel='noreferrer'><img alt="" className="post" src={post4} /></a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdRiu7H6ADfT3i-XlN5xnx8KoEHHr03abui2p0izb0G8SV3iw/viewform" target="_blank" rel='noreferrer'><img alt="" className="post" src={post3} /></a>
            <img alt="" className="post" src={post1} />
        </>
    )
}

export default Events