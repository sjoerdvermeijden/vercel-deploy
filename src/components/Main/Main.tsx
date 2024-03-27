import React from 'react'

type Props = {
    children: React.ReactNode
}

function Main({ children }: Props) {
    return (
        <main className='h-full'>
            <div className="main-inner mx-auto py-10 h-full relative">
                {children}
            </div>
        </main>
    )
}

export default Main