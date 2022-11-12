import papajohns from "../../assets/images/banner-papa-johns.png";
import kfc from "../../assets/images/banner-kfc.png";
import mcdonalds from "../../assets/images/banner-mcdonalds.png";
import burgerking from "../../assets/images/banner-burger-king.png";
import starbucks from "../../assets/images/banner-starbucks.png";
import pizzahut from "../../assets/images/banner-pizza-hut.png";
import subway from "../../assets/images/banner-subway.png";
import './home.scss'

export const Home = () => {
    const banners = [
        {
          id: 1,
          img: papajohns,
        },
        {
          id: 2,
          img: kfc,
        },
        {
          id: 3,
          img: starbucks,
        },
        {
          id: 4,
          img: burgerking,
        },
        {
          id: 5,
          img: pizzahut,
        },
        {
          id: 6,
          img: subway,
        },
        {
          id: 7,
          img: mcdonalds,
        },
      ];

    return (
        <div className="banner">
          {banners.map((banner) => {
            return (
              <div className="banner__item" key={banner.id}>
                <img src={banner.img} alt={banner.title} loading="lazy"/>
              </div>
            );
          })}
        </div>
    );
  };