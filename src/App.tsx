import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="" alt="" />
      </header>
      <nav className="nav">
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Messages</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
        <div>
          <a href="">Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img
            src="https://static.scientificamerican.com/sciam/cache/file/5FE5FD06-AA07-43DE-9AF48B96EEDCF063_source.jpg"
            alt=""
          />
        </div>
        <div>ava</div>
        <div>
          My posts
          <div>New Post</div>
          <div>
            <div>Post 1</div>
            <div>Post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
