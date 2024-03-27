import React from 'react'

import Link from 'next/link'

type Props = {}

function Header({ }: Props) {
    return (
        <header className='bg-slate-700 text-white py-5'>
            <div className="header-inner container mx-auto px-4">
                <Link href="/" className='text-3xl'>
                    Header
                </Link>
            </div>
        </header>
    )
}

export default Header