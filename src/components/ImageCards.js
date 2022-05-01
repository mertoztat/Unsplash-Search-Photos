import React from "react";

const ImageCards = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image.webformatURL} alt="" />
        <div className="py-5">
          <div className="font-bold text-teal-600 text-xl mb-2 text-center">
            Photo by {image.user}
          </div>
          <ul className="flex justify-around px-2">
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4 text-center">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-cyan-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCards;
