import React, { useEffect, useState } from 'react';
import { getValueImages } from '../../Api';

const ValueImage = () => {
  const [latestImage, setLatestImage] = useState(null);

  useEffect(() => {
    loadImage();
  }, []);

  const loadImage = async () => {
    try {
      const data = await getValueImages();

      if (Array.isArray(data) && data.length > 0) {
        setLatestImage(data[0].image);
      }
    } catch (error) {
      console.error('Error fetching value image:', error);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
      {latestImage ? (
        <img
          src={latestImage}
          alt="Value Image"
          className="w-full h-auto object-cover"
        />
      ) : (
        <div className="w-full h-64 flex items-center justify-center bg-gray-200">
          Loading image...
        </div>
      )}
    </div>
  );
};

export default ValueImage;
