import React, {useState} from 'react'
import VideoPageTitle from "./VideoPageTitle";
import './VideoPage.css'

export const VideoPage = () => {

    const [inputText, setInputText] = useState("")

    const [videos] = useState([
        {'url': 'https://www.youtube.com/embed/-NodDRTsV88'},
        {'url': 'https://www.youtube.com/embed/7CgtIgSyAiU'},
        {'url': 'https://www.youtube.com/embed/77kRK20tyg4'},
        {'url': 'https://www.youtube.com/embed/p6-hVDcz3zQ'},
        {'url': 'https://www.youtube.com/embed/MWUM7LIXDeA'},
        {'url': 'https://www.youtube.com/embed/XMcab1MFaLc'},
        {'url': 'https://www.youtube.com/embed/x_GKr-fVg7Y'},
        {'url': 'https://www.youtube.com/embed/kZnJ-oPuYE0'},
        {'url': 'https://www.youtube.com/embed/rxD321l2svE'},
        
    ])

    const [filter] = useState("All")

    const inputHandler = (e) => {
        setInputText(e.target.value) 
    }



    const getVideos = () => {
        if(filter === "All") {
            return videos;
        }
        else {
            return videos.filter(video => {return video.type=== filter})
        }
    }

    return (
        <div>
            <VideoPageTitle/>
            <div className="header">Tutorial/Training
            
                <input 
                    className="input-text" 
                    type="text" 
                    name="inputText" 
                    placeholder="Search for video"
                    value={inputText}
                    onChange={inputHandler}
                />
            
                <button className="search-button">
                    Search
                </button>

            </div>
        
            <div className="video-grid">
                 {getVideos().map((video) => (
                    <div className="video-container">
                        <iframe
                            width="350"
                            height="220"
                            src={video.url}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
            ))}
                   
            </div>
        </div>
    )
}

export default VideoPage