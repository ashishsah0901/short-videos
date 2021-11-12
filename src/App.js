import { useEffect, useState } from "react";
import "./App.css";
import Video from "./componenets/Video";
import axios from "./axios/axios";

function App() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const getVideos = async () => {
            const response = await axios.get("/v1/posts");
            setVideos(response.data);
            return response;
        };
        getVideos();
    }, []);
    return (
        <div className="app">
            <div className="app_videos">
                {videos.map((video) => (
                    <Video
                        url={video.url}
                        channel={video.channel}
                        description={video.description}
                        song={video.song}
                        likes={video.likes}
                        messages={video.messages}
                        shares={video.shares}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
