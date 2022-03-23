import React, { useState } from 'react';
import Destination1 from '../../assets/Destination1.png'
import Destination2 from '../../assets/Destination2.png'
import Destination3 from '../../assets/Destination3.png'
import Destination4 from '../../assets/Destination4.png'
import Destination5 from '../../assets/Destination5.png'
import Destination6 from '../../assets/Destination6.png'
import RecommendDetail from '../RecommendDetail/RecommendDetail';
import './Recommend.css'

const data = [
  {
    image: Destination1,
    title: "Singapore",
    subTitle: "Singapore, officially thr Republic of Singapore, is a",
    cost: "38,800",
    duration: "Approx 2 night trip",
  },
  {
    image: Destination2,
    title: "Thailand",
    subTitle: "Thailand is a Southeast Asia country. It's known for",
    cost: "54,200",
    duration: "Approx 2 night trip",
  },
  {
    image: Destination3,
    title: "Paris",
    subTitle: "Paris, France's capital, is a major European city and a",
    cost: "45,500",
    duration: "Approx 2 night trip",
  },
  {
    image: Destination4,
    title: "New Zealand",
    subTitle: "New Zealand is an island country in the",
    cost: "24,100",
    duration: "Approx 1 night trip",
  },
  {
    image: Destination5,
    title: "Bora Bora",
    subTitle: "Bora Bora is a small South Pacific island northwest of",
    cost: "95,400",
    duration: "Approx 2 night 2 day trip",
  },
  {
    image: Destination6,
    title: "London",
    subTitle: "London, the capital of England and the United",
    cost: "38,800",
    duration: "Approx 3 night 2 day trip",
  },
];

const packages = [
  "The Weekend Break",
  "The Package Holiday",
  "The Group Tour",
  "Long Term Slow Travel",
];

const Recommend = () => {
  const [active, setActive] = useState(1);
  return (
    <section id='recommend' className='recommend-container'>
      <div className="recommend-title">
        <h2>Recommend Destinations</h2>
      </div>
      <div className="packages">
        <ul>

          {
            packages.map((pkg, index) => <li
              className={active === index + 1 ? "active" : ""}
              onClick={() => setActive(index + 1)}
            >
              {pkg}
            </li>)
          }
        </ul>
      </div>
      <div className="destinations">
        {
          data.map((destination) => <RecommendDetail destination={destination} />)
        }
      </div>
    </section>
  );
};

export default Recommend;