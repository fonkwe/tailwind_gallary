import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
       e.preventDefault(); 
       searchText(text);
    };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form onSubmit={onSubmit} className='w-full max-w-sm'>
            <div className='flex items-center border-b py-2 border-teal-500 border-b-2'>
                <input onChange={e => setText(e.target.value)} type="text" placeholder='Search Image Term...' className='appearance-none w-full bg-transparent border-none text-gray-700 mr-3 py-1 px-2'/>
                <button type="submit" className='py-1 px-2 rounded flex-shrink-0 text-sm border-4 text-white bg-teal-500 border-teal-500'>
                    Search
                </button>
            </div>
        </form>
    </div>
  )
}

export default ImageSearch;
 