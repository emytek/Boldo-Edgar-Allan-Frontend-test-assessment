import React from 'react';

const BlogPost = ({ image, category, date, title, author, authorImage }) => {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-10">
        <img loading="lazy" src={image} alt={title} className="object-contain w-full rounded-xl aspect-[1.43]" />
        <div className="flex flex-col self-start mt-6">
          <div className="flex flex-col max-w-full w-[300px]">
            <div className="flex gap-3 items-start self-start text-base leading-7">
              <div className="font-bold text-sky-950">{category}</div>
              <div className="text-neutral-500">{date}</div>
            </div>
            <h3 className="mt-3 text-xl leading-8 text-black">{title}</h3>
          </div>
          <div className="flex gap-3 items-start mt-5 text-base leading-7 text-black">
            <img loading="lazy" src={authorImage} alt={author} className="object-contain shrink-0 w-8 rounded-full aspect-square" />
            <div className="w-[300px]">{author}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;