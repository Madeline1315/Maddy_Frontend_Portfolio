import React, { useState } from "react";

function ProfileHeader({ projectCount }) {
  const [followers, setFollowers] = useState(1248);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    setFollowers((prev) => (isFollowing ? prev - 1 : prev + 1));
  };

  return (
    <div className="profile-header">
      <div className="profile-pic">ML</div> {}

      <div className="profile-info">
        <h1>Madeline Lobdell</h1>
        <p>Full Stack Developer</p>

        <div className="stats">
          <div
            className="stat"
            onClick={() =>
              alert(`You have ${projectCount} amazing projects!`)
            }
          >
            <span className="number">{projectCount}</span>
            <span className="label">projects</span>
          </div>
          <div
            className="stat"
            onClick={() => alert(`You have ${followers} followers!`)}
          >
            <span className="number">{followers.toLocaleString()}</span>
            <span className="label">followers</span>
          </div>
          <div
            className="stat"
            onClick={() => alert("Following amazing developers!")}
          >
            <span className="number">320</span>
            <span className="label">following</span>
          </div>
        </div>

        <button
          className={`follow-btn ${isFollowing ? "following" : ""}`}
          onClick={handleFollowClick}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
