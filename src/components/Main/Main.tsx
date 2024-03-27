import React from 'react'

type Props = {
    children: React.ReactNode
}

function Main({ children }: Props) {
    return (
        <main className='h-full'>
            <div className="main-inner h-full relative flex">
                {children}
            </div>
        </main>
    )
}

export default Main