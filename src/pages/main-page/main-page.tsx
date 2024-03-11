import OfferCardComponent from '../../components/offer-card-component';
import Locations from './locations';
import { CityName } from '../../types/city-name';
import { Offer } from '../../types/offer';
import { useState } from 'react';

type MainPageProps = {
  placeCount: number;
  offers: Offer[];
  cities: CityName[];
}

function MainPage({placeCount, offers, cities}: MainPageProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState();

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <Locations cities={cities}/>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placeCount} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">

              {offers.map((offer) => <OfferCardComponent offer={offer} key={offer.id} setActiveCardId={setActiveCardId}/>)}

            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
