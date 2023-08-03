import styles_main from "../styles/main.module.scss";

import MAP_ICON_SMALL from "../assets/icons/map-pin-small.svg";

const InfoPanel = () => { 

    return (
        <div className={styles_main.cityInfoContainer}>
            {/* weather section */}
            <div className={styles_main.bannerWeather}>
                <div className={styles_main.cityTitle}>
                    <img src={MAP_ICON_SMALL} alt="map_icon"/>
                    <span className="mx-2">Matola, <span className={styles_main.fadedText}>Maputo</span></span>
                </div>
                <div className={styles_main.cityWeatherInfo}>
                    
                </div>
            </div>

        </div>
    )
}

export default InfoPanel;