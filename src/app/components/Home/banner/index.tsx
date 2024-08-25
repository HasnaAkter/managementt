"use client";
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16 px-4 sm:px-6 lg:p-8">
      {/* Left side (Image) */}
      <div className="flex justify-center items-center animate-zoomIn">
        <Image
          src="/assets/image/hena.jpg" 
          alt="Banner Image"
          className="rounded-full p-2"
          width={800}
          height={800}
          priority
        />
      </div>
      
      {/* Right side (Text) */}
      <div className="flex flex-col justify-center items-start p-4">
        <h2 className="text-xl lg:text-24 font-bold text-gray-700 mb-2">Hasna Hena</h2>
        <h3 className="text-lg lg:text-16 text-gray-600 mb-2">I am a passionate</h3>
        <p className="text-sm lg:text-12 text-gray-800 text-justify">
          Frontend developer specializing in React and Next.js. With a keen eye for design and a knack for creating intuitive user interfaces, I bring projects to life with dynamic and responsive web applications. My expertise includes crafting scalable and performant applications, leveraging modern JavaScript libraries, and optimizing user experiences. I am always eager to take on new challenges and continuously enhance my skills.
        </p>
      </div>
    </div>
  );
}
