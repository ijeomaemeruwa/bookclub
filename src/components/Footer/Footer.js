import React from 'react'
import '../Footer/Footer.css'

export const Footer = () => {
    return (
    <div className="footer">
    <div className="footer_container text-center">
    <h3>Subscribe to our newsletter</h3> 
    <input type="email" placeholder="Enter email.." />
    <button className="footer_btn">Submit</button>
    <p className="text-muted">Get updates on exciting new books on the bestsellers list</p>     
    </div>
    </div>
)
}
