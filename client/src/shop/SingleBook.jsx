import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { _id,title,description, book, imageURL,authorName } = useLoaderData();

  return (
    <div className='mt-10 md:mt-16 px-4 lg:px-24'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='col-span-2 lg:col-span-1'>
          <img src={imageURL} className='w-full rounded-lg shadow-lg' alt={title} />
        </div>
        <div className='col-span-1'>
          <h2 className='text-3xl font-semibold mb-4'>{title}</h2>
          <p className='text-gray-700 mb-2'>Author: {authorName}</p>
          <p className='text-gray-700'>Description:</p>
          <p className='text-gray-900'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
