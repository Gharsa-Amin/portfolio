import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../../assets/data/Blog.json"; 
import "./BlogPost.scss"; 
const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>(); 
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    console.log("postId from URL:", postId);

    if (postId) {
      console.log("Available blog posts:", blogPosts);

      const selectedPost = blogPosts.find(
        (post) => post.id.toString() === postId 
      );

      setPost(selectedPost);

      if (!selectedPost) {
        console.warn(`No post found for id: ${postId}`);
      }
    }
  }, [postId]);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="blog-post-detail">
      <h1 className="blog-post-header">{post.title}</h1>
      <p className="blog-post-paragraph"><strong>Author:</strong> {post.author}</p>
      <p className="blog-post-paragraph"><strong>Tags:</strong> {post.tags.join(", ")}</p>
      <p className="blog-post-paragraph"><strong>Date:</strong> {post.date}</p>
      {/* Render HTML content */}
      <div className="blog-post-text" dangerouslySetInnerHTML={{ __html: post.content }} /> 
    </div>
  );
};

export default BlogPost;
