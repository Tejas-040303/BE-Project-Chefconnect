import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Landing.css'; // Ensure this path matches your project

function Landing() {
    const navigate = useNavigate();

    // Redirect functions for buttons
    const handleOrderNow = () => {
        navigate('/login'); // Redirect to user login page
    };

    const handleJoinUs = () => {
        navigate('/chef-login'); // Redirect to chef login page
    };

    // Redirect to home page after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/'); // Replace '/home' with your actual home route
        }, 5000); // 5000ms = 5 seconds

        return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }, [navigate]);

    return (
        <div className="container">
            <img className="bg-image" src="bg-image.jpg" alt="bg" />
            <div className="row">
                <div className="col-5 my-5 py-5 mx-3 px-3">
                    <h1 className="display-4" style={{ fontWeight: "400" }}>
                        Welcome to
                        <h1 className="display-4" style={{ fontWeight: "400", color: "#FFC107" }}>
                            ChefConnect
                        </h1>
                    </h1>
                    <p className="lead my-3" style={{ fontSize: '20px', fontWeight: "400" }}>
                        Your one-stop solution for all your culinary needs.
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <button
                                className="btn btn-primary btn-lg mt-4"
                                style={{ backgroundColor: "#FFC107", borderColor: "#FFC107" }}
                                onClick={handleOrderNow}
                            >
                                Order Now
                            </button>
                        </div>
                        <div className="col-6">
                            <button
                                className="btn btn-primary btn-lg mt-4"
                                style={{ backgroundColor: "#FFC107", borderColor: "#FFC107" }}
                                onClick={handleJoinUs}
                            >
                                Join Us
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-5 my-5 py-5 mx-3 px-3">
                    <img className="landing-image float-animation" src="landing-image.jpg" alt="landing" />
                </div>
            </div>
        </div>
    );
}

export default Landing;
