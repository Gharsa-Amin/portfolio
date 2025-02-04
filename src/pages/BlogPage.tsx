// src/components/BlogPage/BlogPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../assets/data/Blog.json";
import  "./BlogPage.scss"; 
const BlogPage: React.FC = () => {
	return (
		<div className="blog-page">
			
			<div className="blog-list">
				{blogPosts.map((post) => (
					<div key={post.id} className="blog-item">
						<h2>
							<Link to={`/blog/${post.id}`}>{post.title}</Link>
						</h2>
						<p>
							<strong>Author:</strong> {post.author}
						</p>
						<p>
							<strong>Date:</strong> {post.date}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogPage;
