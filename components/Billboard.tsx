import React, { useCallback } from 'react';
import useBillboard from '@/hooks/useBillboard';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import PlayButton from './PlayButton';
import useInfoModal from '@/hooks/newInfoModal';

const Billboard = () => {
    const { data } = useBillboard();
    const { openModal } = useInfoModal();
    const handleOpenModal = useCallback(() => {
        openModal(data?.id)
    },
        [openModal, data?.id],
    )


    return (
        <div className='relative h-[56.25vw'>
            <video
                className='
            w-full
            h-[56.25vw]
            object-cover
            brightness-[60%]
            '
                autoPlay
                muted
                loop
                poster={data?.thumbnailUrl}
                src={data?.videoUrl}>
            </video>
            <div className='absolute  md:top-[40%] md:ml-16 ml-8 sm:top-[50%] top-[30%]'>
                <p className='
                text-white
                text-2xl
                md:text-5xl
                h-full
                w-[70%]
                sm:w-[50%]
                lg:text-6xl
                font-bold
                drop-shadow-xl
                sm:text-4xl'>
                    {data?.title}
                </p>
                <p className='
                text-white
                text-[8px]
                md:text-lg
                mt-3
                md:mt-8
                w-[90%]
                md:w-[80%]
                lg:w-[50%]
                drop-shadow-xl
                '>
                    {data?.description}
                </p>
                <div className='flex flex-row items-center mt-3 md:mt-4 gap-3 h-[6vw]'>
                    <PlayButton movieId={data?.id} />

                    <button
                        onClick={handleOpenModal}
                        className='
                    text-white
                    bg-white
                    bg-opacity-30
                    rounded-md
                    py-1 md:py-2
                    px-2 md:px-4
                    text-xs lg:text-lg
                    font-semibold
                    flex
                    flex-row
                    items-center
                    hover:bg-opacity-20
                    transition
                    w-auto
                    '>
                        <AiOutlineInfoCircle className='mr-1' />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Billboard