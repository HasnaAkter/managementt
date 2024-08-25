"use client";
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 py-20 ">
      {/* Left side (Image) */}
      <div className="flex justify-center items-center animate-zoomIn">
        <Image
          src="/assets/image/hena.jpg" 
          alt="Banner Image"
          className="dark:invert rounded-full px-2"
          width={800}
          height={800}
          priority
        />
      </div>
      
      {/* Right side (Text) */}
      <div className="flex flex-col justify-center items-start p-2">
        <h2 className="lg:text-22 text-14 text-_gray font-bold px-2">Hasna Hena</h2>
        <h3 className="lg:text-16 text-14 text-_gray px-2"> I am a passionate</h3>
        <p className="text-12 text-_black text-justify p-2">
          frontend developer specializing in React and Next.js. With a keen eye for design and a knack for creating intuitive user interfaces, I bring projects to life with dynamic and responsive web applications. My expertise includes crafting scalable and performant applications, leveraging modern JavaScript libraries, and optimizing user experiences. I am always eager to take on new challenges and continuously enhance my skills.
        </p>
      </div>
    </div>
  );
}
