import React, { useState } from "react";
import "./videosidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const VideoSidebar = (props) => {
    const { likes, shares, messages } = props;
    const [liked, setLiked] = useState(false);
    return (
        <div className="videosidebar">
            <div className="videosidebar_button">
                {liked ? (
                    <FavoriteIcon
                        fontSize="large"
                        onClick={() => {
                            setLiked(false);
                        }}
                    />
                ) : (
                    <FavoriteBorderIcon
                        fontSize="large"
                        onClick={() => {
                            setLiked(true);
                        }}
                    />
                )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videosidebar_button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videosidebar_button">
                <SearchIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    );
};

export default VideoSidebar;
