import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className='home__container'>
          <div className="home__banner">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home__banner" />
          </div>
          <div className="home__row">
              <Product id="122939" title="Clean startup summary for product" image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                price={299.99} rating={3} />
              <Product id="22393400" title="Kenwood kMix Stand Mixer for Baking, STylish kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl" image="https://m.media-amazon.com/images/I/61UdeL7aO-L._AC_UL320_.jpg"
                price={49.99} rating={4} />

          </div>
          <div className="home__row">
            <Product id="494993" title="Samsung LC49RG0SSUXEN 40 Curved LED Gaming Monitor" image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                price={129.99} rating={3} />
            <Product id="30303032" title="Amazon Echo (3rd generation) Samrt speaker with Alexa, Charcoal Fabric" image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              price={98.99} rating={5} />
            <Product id="23939292" title="New Apple iPad Pro (12.9-inch, Wi-Fi,128GB) - Silver (4th Generation)" image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                price={129.99} rating={3} />
          </div>
          <div className="home__row">
          <Product id="3392939" title="Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)" image="https://m.media-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                price={129.99} rating={3} />
          </div>
      </div>
    </div>
  )
}

export default Home