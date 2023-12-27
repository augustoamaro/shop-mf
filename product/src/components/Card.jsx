import React from 'react';

const Card = ({ title, description, imageUrl, footerContent, onClick }) => {
  return (
    <div className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/5" onClick={onClick}>
      <div className="border rounded shadow p-2 flex flex-col cursor-pointer h-full">
        {imageUrl && (
          <div className="flex-shrink-0">
            <img src={imageUrl} alt={title} loading="lazy" className="w-full object-cover h-52" />
          </div>
        )}
        <div className="flex-grow">
          {title && <h2 className="font-bold text-sm">{title}</h2>}
          {description && <p className="text-sm truncate-2-lines overflow-hidden">{description}</p>}
        </div>
        {footerContent && <div className="text-gray-800 font-bold mt-2">{footerContent}</div>}
      </div>
    </div>
  );
};

export default Card;
