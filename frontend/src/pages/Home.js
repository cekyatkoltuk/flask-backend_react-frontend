import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [blogs, setBlogs] = useState([]);
    const [about, setAbout] = useState([]);
    const [clients, setClients] = useState([]);
    const [services, setServices] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch blogs
        fetch('/api/blogs')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blog data:', error));

        // Fetch about
        fetch('/api/about')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setAbout(data))
            .catch(error => console.error('Error fetching about data:', error));

        // Fetch clients
        fetch('/api/client')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setClients(data))
            .catch(error => console.error('Error fetching client data:', error));

        // Fetch services
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

    useEffect(() => {
        console.log('isLoggedIn:', isLoggedIn);
        if (!isLoggedIn) {
            // Kullanıcı oturum açık değilse, login sayfasına yönlendir
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div>
            {/* Banner Section */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="padding_left_0">
                                <h1 className="retailer_text">We Are Provide Professional Consulting</h1>
                                <p className="search_text">It is a long established fact that a reader will be distracted by the
                                    readable content of a page </p>
                                <div className="btn_main">
                                    <div className="more_bt"><a href="/whatwedo">Read More </a></div>
                                    <div className="contact_bt"><a href="/contact">Get A Quote</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div><img src="/images/img-1.png" className="image_1" alt="Banner" /></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What We Do Section */}
            <div className="advisor_section layout_padding">
                <div className="container">
                    <h1 className="what_text">What We Do</h1>
                </div>
                <div className="advisor_section_2 layout_padding">
                    <div className="container">
                        <div className="box_section">
                            <div className="row">
                                {blogs.map(blog => (
                                    <div key={blog.id} className="col-lg-4 col-sm-12">
                                        <div className="box_main">
                                            <div className="image_3"></div>
                                            <h4 className="consultative_text">{blog.feedback}</h4>
                                            <p className="ipsum_text">{blog.blogname}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        {about.map((about, index) => (
                            <div key={index} className="col-sm-6">
                                <div><img src={`/images/${about.image_filename}`} alt="About" className="image_8" /></div>
                                <h1 className="about_taital">{about.feedback}</h1>
                                <p className="lorem_text">{about.aboutname}</p>
                                <div className="more_bt"><a href="/about">Read More</a></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Portfolio Section */}
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
                                        <img src={`/images/${service.image_filename}`} alt="Avatar" className="image" style={{ width: '100%' }} />
                                        <div className="middle">
                                            <div className="text"><img src="/images/search-icon.png" alt="search icon" /></div>
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
                        <p className="best_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <div className="get_bt"><a href="/contact">Get A Quote</a></div>
                    </div>
                </div>
            </div>

            {/* Consulting Section */}
            <div className="consulting_section layout_padding">
                <div className="container">
                    <h1 className="what_text">Why Our Consulting?</h1>
                    <div className="consulting_section_2">
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="lorem_text_1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                <div className="more_bt"><a href="/about">Read More</a></div>
                            </div>
                            <div className="col-sm-6">
                                <div className="image_8"><img src="/images/img-15.png" alt="Consulting" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client Section */}
            <div className="client_section layout_padding">
                <div className="container">
                    <h1 className="what_text">What Our Clients Say</h1>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {Array.from({ length: Math.ceil(clients.length / 3) }).map((_, index) => (
                                <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                            ))}
                        </ol>
                        <div className="carousel-inner">
                            {Array.from({ length: Math.ceil(clients.length / 3) }).map((_, chunkIndex) => (
                                <div key={chunkIndex} className={`carousel-item ${chunkIndex === 0 ? 'active' : ''}`}>
                                    <div className="client_section_2 layout_padding">
                                        <div className="row">
                                            {clients.slice(chunkIndex * 3, chunkIndex * 3 + 3).map((client, index) => (
                                                <div key={index} className="col-lg-4 col-sm-12">
                                                    <div className="client_card">
                                                        <p className="ipsum_text">{client.feedback}</p>
                                                        <div className="image_16">
                                                            <img src={`/images/${client.image_filename}`} alt={client.clientname} />
                                                        </div>
                                                        <div className="adipiscing_text">{client.clientname}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>


            {/* Footer Section */}
        </div>
    );
}

export default Home;
