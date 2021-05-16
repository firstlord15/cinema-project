import React from 'react';
import './css/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="bg-dark d-flex justify-content-around mt-5 black-div">
				<div className="Corporate pt-5">
					<h2 className="h4" style={{color: "grey"}}>Corporate</h2>
					<Link to="/" style={{fontSize: "13px"}} className="unline-none">About the company</Link><br />
					<Link to="/" style={{fontSize: "13px"}}className="unline-none">Company offices</Link><br />
					<Link to="/" style={{fontSize: "13px"}}className="unline-none">Partners</Link><br />
					<Link to="/" style={{fontSize: "13px"}}className="unline-none">Tearms of use</Link><br />
					<Link to="/" style={{fontSize: "13px"}}className="unline-none">Privacy</Link><br />
					<Link to="/" style={{fontSize: "13px"}}className="unline-none">Contact us</Link><br />
				</div>
				<div className="Explore pt-5">
					<h2 className="h4" style={{color: "grey"}}>Explore</h2>
				 	<Link className="unline-none" to="/">Courses</Link><br />
				 	<Link className="unline-none" to="/">Tutuors</Link><br />
				 	<Link className="unline-none" to="/">Pricing</Link><br />
				 	<Link className="unline-none" to="/">Become Tutor</Link><br />
				 	<Link className="unline-none" to="/">Sing Up</Link><br />
				</div>
				<div className="Newsletter col-6 pt-5">
					<h2 className="h4" style={{color: "grey"}}>Newsletter</h2>
					<form className="form-group pt-2 d-flex">
						<input type="email" className="pad-l bg-dark custom-control-input" name="mail"  placeholder="Enter email here..." />
						<Link className="text-uppercase btn btn-outline-success">Subscribe</Link>
					</form>
					<div className="pt-2">
						<p style={{fontSize: "12px"}} className="text-secondary">©2015 Learning App by mosaicrop.</p>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Footer;