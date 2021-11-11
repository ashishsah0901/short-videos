import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = (props) => {
    const { url, channel, description, song, likes, messages, shares } = props;
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="video">
            <video
                onClick={handleVideoPress}
                ref={videoRef}
                className="video_player"
                loop
                src={url}
            />
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    );
};

export default Video;
