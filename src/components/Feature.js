import React from 'react'
import "../css/feature.css";

import bathing from "../img/icon/bathing.png";
import bowl from "../img/icon/bowl.png";
import love from "../img/icon/love.png";
import medical from "../img/icon/medical.png";
import toy from "../img/icon/toy.png";

export default function Feature() {
  return (
    <div>
        <div className='featureIntro'>
        <h3>Feature</h3>
        <p>In our facilities, our four-legged 
            friends are provided with the following
             services:
        </p>
        </div>

        <div className='feature'>
        <img src={medical} alt=''/>
        <p>
        First, after entering the facilities, our 
        friends are checked out in order to check 
        their state of health, and in case we need 
        to provide promptly.
        </p>
        </div>

        <div className='feature reverse'>
        <img src={bowl} alt=''/>
        <p>
        All dogs, as soon as they arrive in the 
        structure, are fed gradually, as they 
        arrive often and willingly in a condition 
        of strong dehydration and malnutrition.  
        </p>
        </div>

        <div className='feature'>
        <img src={bathing} alt=''/>
        <p>
        In order to ensure an excellent 
        level of cleanliness of the dogs is 
        performed a sanitizing bath, this way 
        you avoid the spread of parasites.
        </p>
        </div>

        <div className='feature reverse'>
        <img src={love} alt=''/>
        <p>
        After curing the body of our 
        friends it is time to cure their 
        soul with a healthy and pure dose of 
        affection.
        </p>
        </div>

        <div className='feature'>
        <img src={toy} alt=''/>
        <p>
        Last but not least, a bit of fun 
        for our puppies and our volunteers, with 
        many activities carried out in our green 
        areas.
        </p>
        </div>
    </div>
  )
}
