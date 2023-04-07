import React from 'react'
import styles from "../.././pages/ResponsiveHomePageFrame.module.css";
import {useState} from 'react'
const Weather = () => {
  const [city,setCity] = useState("ramgarh");
  // const apiKey = "58304785abc172bba35d099489432508";
  function showWeatherData(data){
  //  console.log(data.name);
      // setCity(data.name);
      setCity(data.name);
   
  }
  //jj
  const getWeatherData=async()=>{
    navigator.geolocation.getCurrentPosition(async (success)=>{
     let {latitude,longitude} = success.coords;
     console.log(latitude+" "+longitude);
    //  let data =await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=58304785abc172bba35d099489432508`);
    let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=58304785abc172bba35d099489432508`)
    data=await data.json().then(console.log("HELLo"));
     console.log(data);
     showWeatherData(data);
    })
  }
  return (
    // const [search,setSearch] = useState("");
  
    <>
    <div className={styles.weatherandtipsframe}>
              <div className={styles.weather}>
                <div className={styles.weatherbox} />
                <div className={styles.day2forcast}>
                  <img
                    className={styles.day2degreeicon}
                    alt=""
                    src="/day2degreeicon.svg"
                  />
                  <div className={styles.day2celcius}>C</div>
                  <img
                    className={styles.day2tempimgIcon}
                    alt=""
                    src="/day2tempimg@2x.png"
                  />
                  <div className={styles.day2tempvalue}>31</div>
                  <div className={styles.day2date}>Sat, 18 Mar</div>
                </div>
                <div className={styles.day3forcast}>
                  <img
                    className={styles.day3tempimgIcon}
                    alt=""
                    src="/day2tempimg@2x.png"
                  />
                  <img
                    className={styles.day3degreeicon}
                    alt=""
                    src="/day3degreeicon.svg"
                  />
                  <div className={styles.day3celcius}>C</div>
                  <div className={styles.day3tempvalue}>31</div>
                  <div className={styles.day3date}>Sun, 19 Mar</div>
                </div>
                <div className={styles.day4forcast}>
                  <img
                    className={styles.day4tempimgIcon}
                    alt=""
                    src="/day2tempimg@2x.png"
                  />
                  <img
                    className={styles.day4degreeicon}
                    alt=""
                    src="/day4degreeicon.svg"
                  />
                  <div className={styles.day4celcius}>C</div>
                  <div className={styles.day4tempvalue}>31</div>
                  <div className={styles.day3date}>Mon, 20 Mar</div>
                </div>
                <div className={styles.day1forcast}>
                  <img
                    className={styles.currenttempimgIcon}
                    alt=""
                    src="/currenttempimg@2x.png"
                  />
                  <div className={styles.currenttempvalue}>31</div>
                  <img
                    className={styles.currenttempdegreeicon}
                    alt=""
                    src="/currenttempdegreeicon.svg"
                  />
                  <div className={styles.cuuenttempcelsius}>C</div>
                  <div className={styles.highlowtemp}>
                    <div className={styles.highertemp}>
                      <div className={styles.hightemp}>35</div>
                      <img
                        className={styles.hightempdegreeicon}
                        alt=""
                        src="/hightempdegreeicon.svg"
                      />
                      <div className={styles.hightempcelsius}>C</div>
                    </div>
                    <div className={styles.lowertemp}>
                      <div className={styles.lowtempvalue}>20</div>
                      <img
                        className={styles.lowtempdegreeicon}
                        alt=""
                        src="/lowtempdegreeicon.svg"
                      />
                      <div className={styles.lowtempcelcius}>C</div>
                      <div className={styles.div}>/</div>
                    </div>
                  </div>
                </div>
                <button onClick={getWeatherData} className={styles.locationforforcast}>
                  <img
                    className={styles.materialSymbolslocationOnIcon}
                    alt=""
                    src="/materialsymbolslocationon.svg"
                  />
                   <div className={styles.weatherlocation}>{city}</div>
                </button>
             
                <div className={styles.weathercommenttext}>
                  It’s a sunny day.
                </div>
                <button className={styles.weatherseemoretext}>See more</button>
                <div className={styles.humidity}>
                  <img
                    className={styles.humidityicon}
                    alt=""
                    src="/humidityicon.svg"
                  />
                  <div className={styles.humidityvalue}>1%</div>
                </div>
                <div className={styles.todaydate}>Today, 17 Mar</div>
                <div className={styles.airquality}>
                  <div className={styles.windspeedvalue}>191</div>
                  <img
                    className={styles.windstreamicon}
                    alt=""
                    src="/windstreamicon.svg"
                  />
                </div>
                <div className={styles.weatherline} />
              </div>
              <div className={styles.protips}>
                <div className={styles.protipsbox} />
                <div className={styles.proTipsheading}>Pro Tips</div>
                <div className={styles.tipscontent}>
                  <ul className={styles.todayWouldBeTheBestDayFo}>
                    <li className={styles.pmroCoder}>
                      Today would be the best day for : APPLYING SEEDS
                    </li>
                    <li>
                      Saturday would be the best day for : APPLYING PESTICIDES
                    </li>
                  </ul>
                </div>
              </div>
            </div>
         
        </>
  )
}

export default Weather