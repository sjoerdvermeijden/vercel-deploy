import React from 'react'
import Link from 'next/link'

import { restaurants } from '../../../data'

import Restaurant from '../Restaurant/Restaurant'

type Props = {}

function Restaurants({ }: Props) {
    return (
        <>
            <h1 className='text-2xl mb-5'>Restauranten</h1>
            <ul className='flex flex-col gap-4'>
                {
                    restaurants.map((item) => {
                        return <li key={item.id} className='restaurant'>
                            <Link href={`/restaurants/${item.id}`}>
                                <Restaurant {...item} />
                            </Link>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default Restaurants