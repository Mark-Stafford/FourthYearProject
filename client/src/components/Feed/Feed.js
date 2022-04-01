import Avatar from "../Avatar/Avatar";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed">
      {/* date */}
      <div className="feed_date">
        <Avatar />
        <p>2/22/2008</p>
      </div>
      {/* img */}
      <div className="feed_img">
        <img src="https://source.unsplash.com/random" alt="feed_image" />
      </div>
      {/* content */}
      <div className="feed_content">
        <h2>
          Welcome to your home page edit your profile
          
        </h2>
      </div>
    </div>
  );
};

export default Feed;
