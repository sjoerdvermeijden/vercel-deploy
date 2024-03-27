import React from 'react'

import Link from 'next/link'

type Props = {}

function Header({ }: Props) {
    return (
        <header className='bg-slate-700 text-white py-5'>
            <div className="header-inner px-5">
                <Link href="/" className='text-3xl'>
                    Bestellen
                </Link>
            </div>
        </header>
    )
}

export default Header