import React, { useContext, useState, useEffect } from 'react'

import { CartContext } from '@/context/CartContext';
import { TotalContext } from '@/context/TotalContext'

import { useRouter } from 'next/router'

type Props = {}

function Cart({ }: Props) {
    const [cartItems, setCartItems] = useContext(CartContext);
    const { total, setTotal } = useContext(TotalContext);

    const [responsiveState, setResponsiveState] = useState<Boolean>(true);

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

    const cartView = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        setResponsiveState(true)
    }

    const orderButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        setResponsiveState(false)
    }

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
        <div className={`${responsiveState ? 'bottom-0' : 'h-full top-0'}  absolute left-0 w-full lg:relative lg:w-80  bg-gray-200 p-5`}>
            <div className={`${responsiveState ? '' : 'mb-5'} cart-heading justify-center items-center flex`}>
                {
                    responsiveState
                        ?
                        ''
                        : (
                            <>
                                <h3 className='text-2xl text-center mr-auto lg:mr-0'>Winkelmandje</h3>
                                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden" onClick={(e) => cartView(e)}>
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </>
                        )
                }
            </div>

            <ul className={`${responsiveState ? 'hidden' : 'block'} lg:block cart-items mb-4`}>
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
            <button className="px-2 py-1 bg-red-600 rounded text-white w-full disabled:opacity-50" disabled={(cartItems.length <= 0 ? true : false)} onClick={(e) => orderButton(e)}> Bestellen</button>
        </div >
    )
}

export default Cart