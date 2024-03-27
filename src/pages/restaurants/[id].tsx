import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";

import Layout from '../../components/Layout/Layout'
import MenuItem from '../../components/MenuItem/MenuItem'
import Cart from '../../components/Cart/Cart'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

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
    }[],
    reviews:
    {
        id: number,
        description: string,
        rating: number
    }[]
}

function RestaurantPage({ }: Restaurant) {
    const router = useRouter();
    const { id } = router.query;

    const [restaurantState, setRestaurantState] = useState<Restaurant>();

    const ratingArray = restaurantState?.reviews.map((item) => {
        return item.rating;
    }).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
    )

    const averageRrating = (ratingArray / restaurantState?.reviews.length).toFixed(1);

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
                <div className="container mb-11 lg:mb-0 mx-auto py-10 px-4">
                    <div className="restaurant-heading flex align-center mb-5">
                        <h1 className='text-2xl mr-3'>{restaurantState?.name}</h1>
                        <span className='text-sm inline-block leading-8'><FontAwesomeIcon icon={faStar} color="orange" className='-mt-1' /> {averageRrating}</span>
                    </div>
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