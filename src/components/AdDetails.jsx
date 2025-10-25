import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAds } from '../assets/ContextApi';
import PerAdCard from './PerAdCard';
import Navbar from './Navbar';
import MobileApp from './MobileApp';
import SubFooter from './SubFooter';
import AdPrice from './AdPrice';

const AdDetails = () => {
  const location = useLocation();
  const ad = location.state?.ad;
  const { mobileAds } = useAds();
  const navigate = useNavigate();

  if (!ad) return <p>No ad selected.</p>;

  // --- Find related products ---
  const relatedAds = mobileAds
    .filter(
      (item) =>
        item.id !== ad.id && // exclude current ad
        (item.brand === ad.brand || item.category === ad.category)
    )
    .slice(0, 6); // show top 6 related

  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mt-28 mx-auto p-4">
      {/* Main Ad Details */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img src={ad.image} alt={ad.brand} className="w-full h-96 object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2 flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{ad.brand} {ad.model}</h1>
          <p className="text-xl font-semibold">PKR {ad.price}</p>
          <p>Location: {ad.location}</p>
          <p>Views: {ad.views}</p>
          <p>Condition: {ad.condition}</p>
          <p>Storage: {ad.storage}</p>
          <p>Color: {ad.color}</p>
        </div>
      </div>
      <AdPrice/>

      {/* Related Products */}
      {relatedAds.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedAds.map((relAd) => (
              <PerAdCard
                key={relAd.id}
                img={relAd.image}
                place={relAd.location}
                price={relAd.price}
                views={relAd.views}
                category={relAd.brand}
                layout="grid"
                onClick={() => navigate(`/ad-details/${relAd.id}`, { state: { ad: relAd } })}
              />
            ))}
          </div>
        </div>
      )}
    </div>
    <MobileApp/>
    <SubFooter/>
    </>
  );
};

export default AdDetails;
