import React, { useState, useEffect } from 'react';

function Portfolio() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/api/services')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching service data:', error));
    }, []);

    return (
        <div>
            <div className="portfolio_section layout_padding">
                <div className="container">
                    <h1 className="what_text">Our Work Portfolio</h1>
                </div>
                <div className="container-fluid">
                    <div className="images_section">
                        <div className="row">
                            {services.map(service => (
                                <div key={service.id} className="col-sm-4 padding_0">
                                    <div className="container_1">
                                        <img
                                            src={`/images/${service.image_filename}`} 
                                            alt="Avatar"
                                            className="image"
                                            style={{ width: '100%' }}
                                        />
                                        <div className="middle">
                                            <div className="text">
                                                <img src="static/images/search-icon.png" alt="search icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="portfolio_section_2 layout_padding">
                    <div className="container">
                        <h1 className="best_taital">We Are Providing Best Business Service</h1>
                        <p className="best_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className="get_bt">
                            <a href="#">Get A Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
