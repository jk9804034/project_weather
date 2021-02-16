export const imageType = type => {
    let src = "";
    if( type === "CLEAR" ){
        src = "/image/sun.png";
    } else if( type === "CLOUDS" ){
        src = "/image/cloud.png";
    } else if( type === "RAIN" ){
        src = "/image/rain.png";
    } else if( type === "SNOW" ){
        src = "/image/snow.png";
    }
    
    return src;
}