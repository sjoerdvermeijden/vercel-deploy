import React from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

type Props = {
    id: number,
    name: string,
    description: string,
    image: {
        img: string,
        alt: string,
    }
    reviews:
    {
        id: number,
        description: string,
        rating: number
    }[]
}

function Restaurant({ name, description, image, reviews }: Props) {

    const ratingArray = reviews.map((item) => {
        return item.rating;
    }).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
    )

    const averageRrating = (ratingArray / reviews.length).toFixed(1);

    return (
        <>
            <div className="restaurant text-xl transition bg-gray-200 hover:bg-gray-300 flex">
                <figure className='restaurant__image' style={{ position: 'relative', width: '200px', minHeight: '120px' }}>
                    <Image
                        src={image.img}
                        alt="Picture of the author"
                        sizes="150px"
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </figure>
                <div className="restaurant__content p-4">
                    <h3 className="restaurant__name mb-3 font-bold">{name}</h3>
                    <p className="restaurant__description text-sm mb-3">{description}</p>
                    <p className='restaurant__rating text-sm flex items-center font-bold'>
                        <FontAwesomeIcon icon={faStar} color="orange" className='mr-1 -mt-1' />
                        <span className='rating mr-1 inline-block'>{averageRrating}</span>
                        <span className='font-normal inline-block text-sm'>({reviews.length})</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Restaurant