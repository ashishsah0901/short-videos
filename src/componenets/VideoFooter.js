import React from "react";
import "./videofooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = (props) => {
    const { channel, description, song } = props;
    return (
        <div className="videofooter">
            <div className="videofooter_text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videofooter_ticker">
                    <MusicNoteIcon className="videofooter_icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
                className="videofooter_record"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt=""
            />
        </div>
    );
};

export default VideoFooter;
