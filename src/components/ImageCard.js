import React from 'react'

const ImageCard = ({image}) => {
  const tags = image.tags.split(',')

  return (
    <div className="max-w-sm max-h-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />

      {/* Image Details */}
      <div className=" px-6 py-4">
        <p className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </p>
        <ul>
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
      {/* End of Image Details */}

      <div className="px-6 py-4">
        {tags.map((tag, index) =>(
          <span key = {index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
          </span>

        ))}

      </div>

    </div>
  )
}

export default ImageCard
