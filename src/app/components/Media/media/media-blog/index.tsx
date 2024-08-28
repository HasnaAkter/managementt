import React from 'react';
import Image from 'next/image';

const blogPosts = [
    {
        id: 1,
        src: '/assets/image/welcome.jpeg',
        title: 'Test Post: Electric Boogaloo',
        date: '14 March 2011',
        timeToRead: '5 min read',
        excerpt: 'This is a test article, in a peculiar context, to see whether grid and flexbox work to make a blog...',
        tags: ['test', 'test']
    },
    {
        id: 1,
        src: '/assets/image/welcome.jpeg',
        title: 'Test Post: Electric Boogaloo',
        date: '14 March 2011',
        timeToRead: '5 min read',
        excerpt: 'This is a test article, in a peculiar context, to see whether grid and flexbox work to make a blog...',
        tags: ['test', 'test']
    }, {
        id: 1,
        src: '/assets/image/welcome.jpeg',
        title: 'Test Post: Electric Boogaloo',
        date: '14 March 2011',
        timeToRead: '5 min read',
        excerpt: 'This is a test article, in a peculiar context, to see whether grid and flexbox work to make a blog...',
        tags: ['test', 'test']
    }, {
        id: 1,
        src: '/assets/image/welcome.jpeg',
        title: 'Test Post: Electric Boogaloo',
        date: '14 March 2011',
        timeToRead: '5 min read',
        excerpt: 'This is a test article, in a peculiar context, to see whether grid and flexbox work to make a blog...',
        tags: ['test', 'test']
    }, {
        id: 1,
        src: '/assets/image/welcome.jpeg',
        title: 'Test Post: Electric Boogaloo',
        date: '14 March 2011',
        timeToRead: '5 min read',
        excerpt: 'This is a test article, in a peculiar context, to see whether grid and flexbox work to make a blog...',
        tags: ['test', 'test']
    }, {
        id: 1,
        src: '/assets/image/welcome.jpeg',
        title: 'Test Post: Electric Boogaloo',
        date: '14 March 2011',
        timeToRead: '5 min read',
        excerpt: 'This is a test article, in a peculiar context, to see whether grid and flexbox work to make a blog...',
        tags: ['test', 'test']
    },
    {
        id: 1,
        src: '/assets/image/welcome.jpeg',
        title: 'Test Post: Electric Boogaloo',
        date: '14 March 2011',
        timeToRead: '5 min read',
        excerpt: 'This is a test article, in a peculiar context, to see whether grid and flexbox work to make a blog...',
        tags: ['test', 'test']
    },
    {
        id: 1,
        src: '/assets/image/welcome.jpeg',
        title: 'Test Post: Electric Boogaloo',
        date: '14 March 2011',
        timeToRead: '5 min read',
        excerpt: 'This is a test article, in a peculiar context, to see whether grid and flexbox work to make a blog...',
        tags: ['test', 'test']
    }, {
        id: 1,
        src: '/assets/image/welcome.jpeg',
        title: 'Test Post: Electric Boogaloo',
        date: '14 March 2011',
        timeToRead: '5 min read',
        excerpt: 'This is a test article, in a peculiar context, to see whether grid and flexbox work to make a blog...',
        tags: ['test', 'test']
    }, {
        id: 1,
        src: '/assets/image/welcome.jpeg',
        title: 'Test Post: Electric Boogaloo',
        date: '14 March 2011',
        timeToRead: '5 min read',
        excerpt: 'This is a test article, in a peculiar context, to see whether grid and flexbox work to make a blog...',
        tags: ['test', 'test']
    },
];

const MediaBlog = () => {
    return (
        <div className="container mx-auto p-10">
            <h1 className="text-22 font-bold">Blog</h1>

            <section className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 ">
                {blogPosts.map(post => (
                    <article key={post.id} className="card flex flex-col">
                        <Image
                            className="card__img w-full h-auto"
                            src={post.src}
                            alt="Card Image"
                            width={256}
                            height={196}
                        />
                        <div className="card__content p-4">
                            <div className="card__type text-12 uppercase">article</div>
                            <div className="card__title font-bold text-16 mb-2">
                                {post.title}
                            </div>
                            <div className="card__date text-10 text-gray-500 mb-2">
                                {post.date} &middot; <span className="card__time-to-read">{post.timeToRead}</span>
                            </div>
                            <div className="card__excerpt mb-4 text-12">
                                {post.excerpt}
                            </div>
                            <div className="card__tags flex space-x-2">
                                {post.tags.map((tag, index) => (
                                    <div key={index} className="tag bg-gray-200 text-10 px-2 py-1 rounded">
                                        <i className="fa fa-tag"></i>{tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default MediaBlog;
