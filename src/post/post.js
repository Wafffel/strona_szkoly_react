import "./post.css";

function Post({ title, content, date }) {
  return (
    <div className="post">
      <div className="body">
        <h3 className="title">{title}</h3>
        <p className="content">{content}</p>
        <p className="date">{date}</p>
      </div>
    </div>
  );
}

export default Post;