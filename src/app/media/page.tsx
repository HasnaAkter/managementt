"use client"
import Link from 'next/link';

const MediaPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Media Page</h1>
      <p className="mb-4">Welcome to the Media page. Here you can find all media-related content.</p>
      <ul>
        <li>
          <Link href="/media/photo-gallery" className="text-blue-500">Photo Gallery</Link>
        </li>
        <li>
          <Link href="/media/video-library" className="text-blue-500">Video Library</Link>
        </li>
        <li>
          <Link href="/media/articles" className="text-blue-500">Articles</Link>
        </li>
      </ul>
    </div>
  );
};

export default MediaPage;
