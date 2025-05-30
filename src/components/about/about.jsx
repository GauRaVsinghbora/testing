import React, { useEffect, useRef } from "react";

const About = () => {
    const boxesRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
            });
        },
        { threshold: 0.2 }
        );

        boxesRef.current.forEach(box => {
        if (box) observer.observe(box);
        });

        // Cleanup
        return () => {
        boxesRef.current.forEach(box => {
            if (box) observer.unobserve(box);
        });
        };
    }, []);

    return (
        <section className="about" id="about">
        <h1>About us</h1>
        <div className="aboutBox" ref={el => (boxesRef.current[0] = el)}>
            <h2>Who We Are?</h2>
            <div></div>
            <p>
            We are a dedicated team committed to simplifying the flat-hunting process. With years of expertise in real estate and technology, we bridge the gap between renters and their dream homes.
            </p>
        </div>
        <div className="aboutBox" ref={el => (boxesRef.current[1] = el)}>
            <p>
            Our platform offers a seamless experience for browsing, booking, and moving into flats. We provide verified listings, affordable pricing, and secure transactions to make your journey hassle-free.
            </p>
            <div></div>
            <h2>What We Do?</h2>
        </div>
        <div className="aboutBox" ref={el => (boxesRef.current[2] = el)}>
            <h2>Our Vision & Mission</h2>
            <div></div>
            <p>
            Our mission is to make finding and booking a flat seamless and hassle-free. We aim to become the leading flat booking platform, offering trust and convenience globally.
            </p>
        </div>
        </section>
    );
};

export default About;
