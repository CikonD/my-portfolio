import React from "react";
import { blogPosts } from "../constants";
import styles from "../style";

const BlogPosts = () => (
  <section className={`${styles.flexCenter} flex-col sm:mb-20 mb-6`}>
    <h2 className="font-poppins font-semibold text-[32px] text-white mb-6">
      Blog Posts
    </h2>
    {blogPosts.map((post) => (
      <div
        key={post.id}
        className={`flex flex-col justify-start items-start m-3 p-4 bg-gray-800 rounded-lg`}
      >
        <h3 className="font-poppins font-semibold text-[24px] text-white">
          {post.title}
        </h3>
        <p className="font-poppins font-normal text-[16px] text-dimWhite mt-2">
          {post.date}
        </p>
        <p className="font-poppins font-normal text-[16px] text-dimWhite mt-2">
          {post.summary}
        </p>
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-poppins font-normal text-[16px] text-blue-500 mt-2"
        >
          Read more
        </a>
      </div>
    ))}
  </section>
);

export default BlogPosts;
