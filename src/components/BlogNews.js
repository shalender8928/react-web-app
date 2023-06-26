import React, {useState, useEffect} from 'react';
import BlogListSingleNews from './PageComponents/BlogListSingleNews';

const BlogNews = () => {

	const [data,setData] = useState([]);
	// const posts_url = './jsonFiles/blogs.json';
	const posts_url = 'http://localhost/lara945/public/api/v1/posts?limit=3';

	const getData = () => {
		fetch(posts_url,{
			headers : {
				'Content-Type' : 'application/json',
				'Accept' : 'application/json' 
			}
		})
		.then(function(res){
			return res.json();
		})
		.then(function(resp){
			setData(resp);
		});
	}
	useEffect(()=>{
		getData();
	},[]);

	if(data)
	{
		// const blogTitle = (data.title) ? data.title : null;
		const blogTitle = 'Latest News & Blog'; 
		// const blogDesc = (data.desc) ? data.desc : null; 
		const blogDesc = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'; 
		const blogData = (data.data) ? data.data : null;
		const blogItems = (blogData) ? (blogData.map((blog,indx) =>
			    <BlogListSingleNews 
			    	key={indx}
			  		postImg = {(blog.thumbnail_url) ? blog.thumbnail_url :'assets/images/blog/1.jpg'}
			  		postAuthorImg = {(blog.author_img) ? blog.author_img : 'assets/images/blog/b6.jpg'}
			  		postAuthor = {(blog.author) ? blog.author : 'BY TIM NORTON' }
			  		postLink = {blog.slug}
			  		postTitle = {blog.title}
			  		postDesc = {blog.content}
			  	/>
			)
		) : null;

		
		return (
			<div id="blog" className="latest-news-area section">
			    <div className="section-title-five">
			      <div className="container">
			        <div className="row">
			          <div className="col-12">
			            <div className="content">
			              <h6>latest news</h6>
			              <h2 className="fw-bold">{blogTitle}</h2>
			              <p> {blogDesc} </p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>

			    <div className="container">
			      <div className="row">

			        {blogItems}

			      </div>
			    </div>
			</div>
		);
	}
	return null;
}

export default BlogNews;