
const Card = ({ title, description, image ,url}) => {
  return (
  <>
    <div className="relative w-100% sm:w-100% bg-white shadow-lg rounded-lg overflow-hidden sticky top-0">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} className="w-full h-100% sm:h-100% object-cover" />
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
      </a>
    </div>
    
    </>
  );
};

export default Card;

