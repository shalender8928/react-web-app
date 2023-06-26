const BlogListSingleNews = (props) => {
	return (
	<div className="col-lg-4 col-md-6 col-12">
      <div className="single-news">
        <div className="image">
          <a href="#blog1"><img className="thumb" src={props.postImg} alt="Blog" /></a>
          <div className="meta-details">
            <img className="thumb" src={props.postAuthorImg} alt="Author" />
            <span>{props.postAuthor}</span>
          </div>
        </div>
        <div className="content-body">
          <h4 className="title">
            <a href={props.postLink}> {props.postTitle} </a>
          </h4>
          <p>{props.postDesc}</p>
        </div>
      </div>

    </div>
   );
};

export default BlogListSingleNews;