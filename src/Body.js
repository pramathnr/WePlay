import  MoreHorizIcon  from "@material-ui/icons/MoreHoriz";
import  FavoriteIcon  from "@material-ui/icons/Favorite";
import  PlayCircleFilledIcon  from "@material-ui/icons/PlayCircleFilled";
import React  from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";


function Body(spotify){
    const [{ valentines_day_special }, dispatch] = useDataLayerValue();

    return(
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body_info">
                <img src={valentines_day_special?.images[0].url} alt=""/>
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Valentine's Day Special</h2>
                    <p>{valentines_day_special?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                </div>
                {valentines_day_special?.tracks.items.map(item=>(
                    <SongRow track={item.track}/>
                ))}
            </div>
        </div>
    )
}

export default Body;