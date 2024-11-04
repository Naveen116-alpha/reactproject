import React, { useState } from 'react';
import '../styles.css'; // Ensure this path points to your CSS file
import heroImage from 'C:/Users/navee/online-tutoring-app/src/components/pexels-pixabay-531880.jpg';

const Home = () => {
    const [showTutors, setShowTutors] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);
    const [showCourses, setShowCourses] = useState(false); // New state for course popup

    const tutors = [
        { name: 'John Doe', image: 'https://via.placeholder.com/150', details: 'Expert in Mathematics with 5 years of teaching experience.' },
        { name: 'Jane Smith', image: 'https://via.placeholder.com/150', details: 'Physics tutor with a Ph.D. and 10 years of experience.' },
        { name: 'Alice Johnson', image: 'https://via.placeholder.com/150', details: 'English Literature teacher and published author.' }
    ];

    const schedule = [
        'Monday - 9:00 AM to 11:00 AM',
        'Tuesday - 1:00 PM to 3:00 PM',
        'Wednesday - 10:00 AM to 12:00 PM',
        'Thursday - 4:00 PM to 6:00 PM',
        'Friday - 2:00 PM to 4:00 PM',
    ];

    const courses = [
        { 
            title: 'Introduction to Mathematics', 
            price: '$49.99', 
            image: 'https://via.placeholder.com/150', 
            details: 'Learn the fundamentals of Mathematics, covering algebra, geometry, and basic calculus.' 
        },
        { 
            title: 'Advanced Physics', 
            price: '$59.99', 
            image: 'https://via.placeholder.com/150', 
            details: 'Dive into the principles of advanced physics, including mechanics and thermodynamics.' 
        },
        { 
            title: 'English Literature Basics', 
            price: '$39.99', 
            image: 'https://via.placeholder.com/150', 
            details: 'Explore classic and modern literature, and improve analytical reading skills.' 
        },
        { 
            title: 'Chemistry Essentials', 
            price: '$45.99', 
            image: 'https://via.placeholder.com/150', 
            details: 'Get a comprehensive overview of chemical reactions, bonding, and periodic trends.' 
        },
        { 
            title: 'History of Art', 
            price: '$29.99', 
            image: 'https://via.placeholder.com/150', 
            details: 'Study art movements and famous artists from the Renaissance to modern times.' 
        },
        { 
            title: 'Intro to Programming', 
            price: '$55.99', 
            image: 'https://via.placeholder.com/150', 
            details: 'Learn programming basics with hands-on coding exercises in Python.' 
        },
        { 
            title: 'Data Science 101', 
            price: '$79.99', 
            image: 'https://via.placeholder.com/150', 
            details: 'An introduction to data science concepts, including data analysis and visualization.' 
        },
        { 
            title: 'Machine Learning Basics', 
            price: '$89.99', 
            image: 'https://via.placeholder.com/150', 
            details: 'Understand the fundamentals of machine learning algorithms and their applications.' 
        },
        { 
            title: 'Web Development for Beginners', 
            price: '$69.99', 
            image: 'https://via.placeholder.com/150', 
            details: 'Build your first website using HTML, CSS, and JavaScript.' 
        },
        { 
            title: 'Graphic Design Fundamentals', 
            price: '$35.99', 
            image: 'https://via.placeholder.com/150', 
            details: 'Master the basics of graphic design, including color theory and typography.' 
        },
    ];

    const handleViewTutors = () => {
        setShowTutors(true);
    };

    const handleViewSchedule = () => {
        setShowSchedule(true);
    };

    const handleViewCourses = () => {
        setShowCourses(true);
    };

    return (
        <div className="home-page">
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="logo">Skooli</div>
                <ul className="nav-links">
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><button className="login-btn">Login</button></li>
                    <li><button className="register-btn">Sign Up</button></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <div
                className="hero-section"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '500px' // Adjust the height as needed
                }}
            >
                <div className="hero-content">
                    <h1>Online Tutoring, Anytime, Anywhere</h1>
                    <p>Connect with professional tutors in seconds for help with your toughest assignments.</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </div>

            {/* Highlights Section */}
            <div className="highlights-section">
                <div className="highlight">
                    <h2>Expert Tutors</h2>
                    <p>Work with tutors who are experts in their field.</p>
                    <button className="view-tutors-button" onClick={handleViewTutors}>View Tutors</button>
                </div>
                <div className="highlight">
                    <h2>Courses</h2>
                    <p>Buy new courses and learn new things</p>
                    <button className="view-tutors-button" onClick={handleViewCourses}>View Courses</button>
                </div>
                <div className="highlight">
                    <h2>Flexible Scheduling</h2>
                    <p>Learn at your own pace, on your own schedule.</p>
                    <button className="schedule-btn" onClick={handleViewSchedule}>Schedule</button>
                </div>
                <div className="highlight">
                    <h2>Interactive Sessions</h2>
                    <p>Engage in real-time with our interactive whiteboard.</p>
                    {/* New Meet Button */}
                    <button className="meet-btn" onClick={() => window.location.href = "https://meet.google.com/"}>Meet</button>
                </div>
            </div>

            {/* Tutor Popup */}
            {showTutors && (
                <div className="tutor-popup">
                    <div className="tutor-popup-content">
                        <h2>Available Tutors</h2>
                        <button className="close-btn" onClick={() => setShowTutors(false)}>Close</button>
                        {tutors.map((tutor, index) => (
                            <div key={index} className="tutor-card">
                                <img src={tutor.image} alt={tutor.name} />
                                <h3>{tutor.name}</h3>
                                <p>{tutor.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Schedule Popup */}
            {showSchedule && (
                <div className="schedule-popup">
                    <div className="schedule-popup-content">
                        <h2>Learning Schedule</h2>
                        <button className="close-btn" onClick={() => setShowSchedule(false)}>Close</button>
                        <ul>
                            {schedule.map((time, index) => (
                                <li key={index}>{time}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Courses Popup */}
            {showCourses && (
                <div className="course-popup">
                    <div className="course-popup-content">
                        <h2>Available Courses</h2>
                        <button className="close-btn" onClick={() => setShowCourses(false)}>Close</button>
                        {courses.map((course, index) => (
                            <div key={index} className="course-card">
                                <img src={course.image} alt={course.title} />
                                <h3>{course.title}</h3>
                                <p>{course.details}</p>
                                <p>Price: {course.price}</p>
                                <button className="purchase-btn">Purchase</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2024 Skooli. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
