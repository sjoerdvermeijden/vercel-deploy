import React, { useContext, useEffect } from 'react'

import { CartContext } from '@/context/CartContext';
import { TotalContext } from '@/context/TotalContext'

import { useRouter } from 'next/router'

type Props = {}

function Cart({ }: Props) {
    const [cartItems, setCartItems] = useContext(CartContext);
    const { total, setTotal } = useContext(TotalContext);

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            console.log(
                `App is changing to ${url}`
            )
            setCartItems([])
            setTotal(0)
        }

        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.preventDefault();

        const cartArray = cartItems.map((item) => {
            if (item.id === id) {
                item.count++;
            }
            setTotal(total + item.price)
            return item;
        });

        setCartItems(cartArray);
    }

    const subtractItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.preventDefault();

        const cartArray = cartItems.map((item) => {
            if (item.id === id) {
                item.count--;
            }
            setTotal(total - item.price)
            return item;
        });
        setCartItems(cartArray);

        const newArray = cartArray.filter((item) => item.count > 0);
        setCartItems(newArray);
    }

    return (
        <div className='h-full w-full lg:w-80  bg-gray-200 p-5'>
            <ul className="cart-items mb-4">
                {
                    cartItems.map((item) => {
                        return (
                            <li className="cart-items__item py-4 border-b border-gray-300" key={item?.id}>
                                <div className="item flex flex-col items-end">
                                    <div className="item__content w-full">
                                        <div className="item__heading flex">
                                            <p className="item__count mr-1">({item.count})</p>
                                            <p className="item__title mb-3 mr-auto">{item.title}</p>
                                            <p className="item__price font-bold">€{(item.price * item.count).toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="item__button-group">
                                        <button className='px-2 bg-gray-500 text-white font-light rounded mr-1' onClick={(e) => subtractItem(e, item.id)}>-</button>
                                        <button className='px-2 bg-gray-500 text-white font-light rounded' onClick={(e) => addItem(e, item.id)}>+</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            {/* <p className='mb-1'>Subtotaal: €0</p>
            <p className='mb-1'>Bezorgkosten: €{total >= 1 && total <= 12.99 ? 2.50 : 0}</p> */}
            <p className='mb-3 font-bold'>Totaal: €{Math.abs(total).toFixed(2)}</p>
            <button className="px-2 py-1 bg-red-600 rounded text-white w-full disabled:opacity-50" disabled={(cartItems.length <= 0 ? true : false)}> Bestellen</button>
        </div >
    )
}

export default Cart