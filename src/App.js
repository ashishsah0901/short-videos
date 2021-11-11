import "./App.css";
import Video from "./componenets/Video";

function App() {
    return (
        <div className="app">
            <div className="app_videos">
                <Video
                    url="https://zippy.gfycat.com/BruisedPerkyFlyingsquirrel.mp4"
                    channel="ashish"
                    description="This is just a description"
                    song="Come & get it"
                    likes={100}
                    messages={200}
                    shares={50}
                />
                <Video
                    url="https://zippy.gfycat.com/BruisedPerkyFlyingsquirrel.mp4"
                    channel="ashish"
                    description="This is just a description"
                    song="Come & get it"
                    likes={100}
                    messages={200}
                    shares={50}
                />
                <Video
                    url="https://zippy.gfycat.com/BruisedPerkyFlyingsquirrel.mp4"
                    channel="ashish"
                    description="This is just a description"
                    song="Come & get it"
                    likes={100}
                    messages={200}
                    shares={50}
                />
            </div>
        </div>
    );
}

export default App;
