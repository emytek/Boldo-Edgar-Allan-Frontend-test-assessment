import React from "react";
import BlogPost from "../../ui/BlogPost";

const Blog = () => {
  const blogPosts = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/77753821dfdb784a4627d093736697d0c07bdad15f662fd60475e758ab85f83f?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf",
      category: "Category",
      date: "November 22, 2021",
      title: "Pitch termsheet backing validation focus release.",
      author: "Chandler Bing",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ae6f7ca540f1d732ddf8c63854ce6e56449d1462f2e58807a0d252f9116eb948?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/80216807486e5168d3b1eb1989318bf4c6d583efd5227b59c8020b643ec7ea8c?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf",
      category: "Category",
      date: "November 22, 2021",
      title:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      author: "Rachel Green",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8ee3b816e90283260f3e809b3be7240e44eef99dd162a6d964f1e8af6d42f60c?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/735c6bea2e9e2c093a54444a53868c49668cb235fb7291070c52ffe8536445a7?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf",
      category: "Category",
      date: "November 22, 2021",
      title:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
      author: "Monica Geller",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dbf3bfde8384e2e01eb82a7407c6cbf18acd358e1cb4318c7737ab2104f16dcf?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf",
    },
  ];

  return (
    <section className="mt-40 lg:w-10/12 max-md:mt-10 xl:pl-44">
    <h2 className="text-xl leading-relaxed text-neutral-500 text-center">
      Our Blog 
    </h2>
    <div className="mt-3 text-5xl text-center text-black leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
      Value proposition accelerator product <br />management venture
    </div>
    <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-14 max-md:flex-col">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
    <button className="gap-2 self-stretch px-14 py-4 mt-20 text-xl font-bold leading-snug border-2 border-solid border-sky-950 rounded-[56px] text-sky-950 max-md:px-5 max-md:mt-10">
      Load more
    </button>
  </section>
  );
};

export default Blog;
