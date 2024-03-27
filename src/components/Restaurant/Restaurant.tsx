import React from 'react'

type Props = {}

function Restaurant({ }: Props) {
    return (
        <div className="restaurant text-xl transition bg-gray-200 hover:bg-gray-300 flex">
            <div className="restaurant__content p-4">
                <h3 className="restaurant__name mb-3 font-bold">Name</h3>
                <p className="restaurant__description text-sm mb-3">Description</p>
                <p className='restaurant__rating text-sm flex items-center font-bold'>
                    <span className='rating mr-1 inline-block'>Rating</span>
                    <span className='font-normal inline-block text-sm'>(3)</span>
                </p>
            </div>
        </div>
    )
}

export default Restaurant