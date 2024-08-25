import Image from 'next/image';

export default function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Left side (Image) */}
      <div className="flex justify-center items-center">
        <Image
          src="/path/to/your/image.jpg" // Replace with your image path
          alt="Description of the image"
          width={500} // Adjust the width as needed
          height={500} // Adjust the height as needed
          className="rounded-lg shadow-lg"
        />
      </div>
      
      {/* Right side (Text) */}
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-3xl font-bold mb-4">Your Title Here</h2>
        <p className="text-lg text-gray-600">
          Your text content goes here. You can include as much text as you need, and it will align
          nicely next to the image.
        </p>
      </div>
    </div>
  );
}
