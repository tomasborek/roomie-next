import React from 'react';
import Image from 'next/image';

const AboutSection = ({heading, image, left, x, y, children}) => {
  return (
    <section className={`about-section`}>
        <div className='section-heading'>
            <div className="heading-line"></div>
            <h2>{heading}</h2>
        </div>
        <div className={`section-content mid-container ${left && "left"}`}>
            <p className='content-text'>   
                {children}
            </p>
            <div style={{minWidth: x, minHeight: y}} className='content-image'>
                <Image src={image} layout='fill' objectFit='cover'/>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;
