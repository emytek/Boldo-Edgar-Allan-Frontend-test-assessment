import React from "react";
import BlogPost from "./ui/BlogPost";
import { blogPosts } from "../../../../data/BlogData";

const Blog = () => {
  return (
    <section className="mt-40 lg:w-10/12 max-md:mt-10 xl:pl-24">
      <h2 className="text-xl leading-relaxed text-neutral-500 text-center">
        Our Blog
      </h2>
      <div className="mt-3 text-5xl text-center leading-[72px] max-md:max-w-full max-md:text-3xl max-md:leading-[67px]">
        Value proposition accelerator product <br /> management venture
      </div>
      <div className="mt-10 lg:mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-14 max-md:flex-col max-md:gap-6">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-20 max-md:mt-10">
        <button className="gap-2 self-stretch px-14 py-4 text-xl font-bold leading-snug border-2 border-solid rounded-[56px] max-md:px-5">
          Load more
        </button>
      </div>
    </section>
  );
};

export default Blog;
