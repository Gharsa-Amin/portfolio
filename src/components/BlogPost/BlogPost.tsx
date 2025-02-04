import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../../assets/data/Blog.json"; 

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
      <h1>{post.title}</h1>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Tags:</strong> {post.tags.join(", ")}</p>
      <p><strong>Date:</strong> {post.date}</p>
      {/* Render HTML content */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} /> 
    </div>
  );
};

export default BlogPost;
