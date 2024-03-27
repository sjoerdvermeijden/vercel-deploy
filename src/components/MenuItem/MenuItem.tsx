import React, { useContext } from 'react'
import Image from 'next/image'

import { CartContext } from '@/context/CartContext'
import { TotalContext } from '@/context/TotalContext'

type Props = {
    id: number,
    title: string,
    description: string,
    image: {
        img: string,
        alt: string,
    }
    price: number,
    count: number
}

function MenuItem({ id, title, description, price, image, count }: Props) {
    const [cartItems, setCartItems] = useContext(CartContext);
    const { total, setTotal } = useContext(TotalContext);

    const orderButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.preventDefault();

        const idArray = cartItems.map((item) => item.id);

        if (!idArray.includes(id)) {
            setCartItems([...cartItems, { id, title, description, price, image, count: 1 }])

            setTotal(total + price)
        }

        if (idArray.includes(id)) {

            const cartArray = cartItems.map((item) => {
                if (item.id === id) {
                    item.count++;
                    setTotal(total + item.price)
                    return item;
                } else {
                    return item;
                }
            })

            setCartItems(cartArray);
        }
    }

    return (
        <div className='bg-gray-200 relative flex'>
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
            <div className='flex flex-col p-4'>
                <h1 className='text-xl mb-2 font-bold'>{title}</h1>
                <p className='font-light text-sm mb-2'>{description}</p>
                <p className='font-bold text-sm'>€{price}</p>
                <button className="bg-gray-300  transition absolute right-0 top-0 text-black py-2 px-4 hover:bg-gray-500 hover:text-white" onClick={(e) => orderButton(e, id)}>
                    +
                </button>
            </div>
        </div>
    )
}

export default MenuItem;