import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";

import Layout from '../../components/Layout/Layout'
import MenuItem from '../../components/MenuItem/MenuItem'
import Cart from '../../components/Cart/Cart'

import { restaurants } from '../../../data'

type Restaurant = {
    id: number;
    name: string;
    description: string;
    menu: {
        id: number,
        title: string,
        description: string,
        image: {
            img: string,
            alt: string
        }
        price: number,
        count: number
    }[]
}

function RestaurantPage({ }: Restaurant) {
    const router = useRouter();
    const { id } = router.query;

    const [restaurantState, setRestaurantState] = useState<Restaurant>();

    useEffect(() => {
        if (id) {
            restaurants.map((item) => {
                if (item.id === Number(id)) {
                    setRestaurantState(item);
                }
            });
        }
    }, [id]);

    return (
        <div>
            <Layout>
                <div className="container mx-auto px-4">

                    <h1 className='text-3xl mb-7'>{restaurantState?.name}</h1>
                    <ul className="menu flex flex-col gap-4">
                        {restaurantState?.menu.map((item) => {
                            return (
                                <li
                                    className="menu__item"
                                    key={restaurantState?.id}
                                >
                                    <MenuItem
                                        {...item}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <Cart />
            </Layout>
        </div>
    )
}

export default RestaurantPage