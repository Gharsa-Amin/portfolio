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
						<h2 className="blog-item__header">
							<Link to={`/blog/${post.id}`}>{post.title}</Link>
						</h2>
						<p>
							<strong>Date Published:</strong> {post.date}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogPage;
