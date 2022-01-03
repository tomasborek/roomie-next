import React, {useEffect} from 'react'

const AdSense = () => {
    const loadAds = () => {
        try {
          if (typeof window !== "undefined") {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        } catch (error) {
          console.log("adsense error", error.message);
        }
      };
    
      useEffect(() => {
        loadAds();
      }, []);
    
      return (
        <ins className="adsbygoogle"
        style={{display:"block"}}
        data-ad-format="fluid"
        data-ad-layout-key="-gv-1g+3m-92+ee"
        data-ad-client="ca-pub-9969104196645961"
        data-ad-slot="3730875804"></ins>
      );
}

export default AdSense
