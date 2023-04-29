import React from 'react';
import { isEmpty } from 'lodash';
import MovieCard from './MovieCard';

interface MovieListProps {
  data: Record<string, any>[];
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if(isEmpty(data)){
    return null;
  }

  return (
    <div className='px-4 md:px-12 mt-4 space-y-8'>
      <div className='flex justify-center items-center'>

      <div className='w-[90%] '>
        <p className='text-white text-md md:text-xl lg:text-2xl font-semibold pb-3'>
          {title}
        </p>
        {/* <hr className='p-4'/> */}
        <div className='grid
        md:grid-cols-4
        sm:grid-rows-4
        gap-2
        scroll-smooth
        '>
          {data.map((movie) =>(
            <MovieCard key={movie.id} data={movie}/>
            ))}
        </div>
            </div>
      </div>
    </div>
  )
}

export default MovieList