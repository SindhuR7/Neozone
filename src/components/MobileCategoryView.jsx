import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAds } from '../assets/ContextApi';
import PerAdCard from './PerAdCard';

const MobileCategoryView = ({ layout }) => {
  const { mobileAds, filters } = useAds();
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 9;
  const navigate = useNavigate();

  const filteredAds = mobileAds.filter(ad => {
    if (!filters.mobiles) return true;

    const brandMatch =
      filters.mobiles.brands.length === 0 ||
      filters.mobiles.brands.includes(ad.brand);

    const priceMatch =
      (!filters.mobiles.minPrice || ad.price >= filters.mobiles.minPrice) &&
      (!filters.mobiles.maxPrice || ad.price <= filters.mobiles.maxPrice);

    return brandMatch && priceMatch;
  });

  const totalPages = Math.ceil(filteredAds.length / adsPerPage);
  const startIndex = (currentPage - 1) * adsPerPage;
  const endIndex = startIndex + adsPerPage;
  const paginatedAds = filteredAds.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePass = () => {
    navigate('/ad-details')
  }
  const handleAdClick = (ad) => {
    navigate(`/ad-details/${ad.id}`, { state: { ad } });
  };

  return (
    <div className="flex flex-col items-center " onClick={handlePass}>
      {/* Ads */}
      <div className={`w-full gap-3 ${layout === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'flex flex-col'}`}>
        {paginatedAds.length > 0 ? (
          paginatedAds.map((ad) => (
            <PerAdCard
              key={ad.id}
              img={ad.image}
              place={ad.location}
              price={ad.price}
              views={ad.views}
              category={ad.brand}
              layout={layout}
              onClick={() => handleAdClick(ad)}
            />
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-10">No ads found for this filter.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              page === currentPage
                ? 'bg-[#1F999A] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-[#1F999A] hover:text-white'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileCategoryView;
