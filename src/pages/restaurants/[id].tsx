import React from 'react'

import Layout from '../../components/Layout/Layout'

import Cart from '../../components/Cart/Cart'

function RestaurantPage({ }) {

    return (
        <div>
            <Layout>
                <div className="container mx-auto px-4">

                    <h1 className='text-3xl mb-7'>Name</h1>
                    <ul className="menu flex flex-col gap-4">
                    </ul>
                </div>
                <Cart />
            </Layout>
        </div>
    )
}

export default RestaurantPage