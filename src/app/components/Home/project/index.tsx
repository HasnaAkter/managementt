"use client"
import React from 'react';

const Project = () => {
  const cards = [
    { title: 'Project 1', description: 'Description for project 1', imgSrc: '/assets/image/photo-1483058712412-4245e9b90334.avif' },
    { title: 'Project 2', description: 'Description for project 2', imgSrc: '/assets/image/photo-1484417894907-623942c8ee29.avif' },
    { title: 'Project 3', description: 'Description for project 3', imgSrc: '/assets/image/photo-1722316805351-d5a56965f926.avif' },
    { title: 'Project 4', description: 'Description for project 4', imgSrc: '/assets/image/premium_photo-1681487178876-a1156952ec60.avif' },
    { title: 'Project 5', description: 'Description for project 5', imgSrc: '/assets/image/premium_photo-1682126146612-2c98770adc1d.avif' },
    { title: 'Project 6', description: 'Description for project 6', imgSrc: '/assets/image/premium_photo-1682432239007-42aa47cf65ee.avif' },
    { title: 'Project 7', description: 'Description for project 7', imgSrc: '/assets/image/premium_photo-1682123970943-a9808436a232.avif' },
    { title: 'Project 8', description: 'Description for project 8', imgSrc: '/assets/image/premium_photo-1682433104883-cfde56c3a83b.avif' }
  ];

  return (
    <div>
      <section id="projects" className="bg-_base dark:bg-base py-10 px-12 max-w-[1320px] mx-auto">
        <h1 className="text-22 font-bold mb-6">Projects</h1>
        <div id="tags">
          {["Featured", "All", "HTML/CSS", "JS/jQuery", "ReactJS", "NextJS", "NodeJS", "MERN"].map(tag => (
            <p key={tag} className="inline-block bg-_white p-2 mx-2 my-1 text-12 cursor-pointer rounded-xl hover:bg-_gray hover:text-_white duration-300">
              {tag}
            </p>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="relative bg-white p-4 rounded-lg shadow-lg transition-shadow duration-300 overflow-hidden">
              <img 
                src={card.imgSrc} 
                alt={card.title} 
                className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-110 hover:shadow-xl duration-300" 
              />
              <h2 className="text-xl font-semibold mb-2 mt-4">{card.title}</h2>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
