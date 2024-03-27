import React from 'react'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

type Props = {
    children: React.ReactNode
}

function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export default Layout