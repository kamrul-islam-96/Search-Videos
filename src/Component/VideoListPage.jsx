import { useState, useEffect } from 'react';
import { Database } from '../pages/Database'; 
import './VideoList.css'


function VideoListPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      const category = 'featured';
      const data = await Database.Videos.findAll({ category, limit: 6 });
      setVideos(data);
      setLoading(false);
    }
    fetchVideos();
  }, []);

  return (
    <VideoPageLayout>
      {loading ? <VideoListLoading /> : <VideoList videos={videos} />}
    </VideoPageLayout>
  );
}

function VideoList({ videos }) {
  return <SearchableVideoList videos={videos} />;
}

function VideoPageLayout({ children }) {
  return (
    <div className="video-page">
      <header>
        <h1>Featured Videos</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

function VideoListLoading() {
  return <div>Loading videos...</div>;
}

function SearchableVideoList({ videos }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="video-list-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search videos by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="video-list">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video, index) => (
            <div key={index} className="video-item">
              <h3>{video.title}</h3>
              <video width="320" height="240" controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))
        ) : (
          <div>No videos found.</div>
        )}
      </div>
    </div>
  );
}

export default VideoListPage;