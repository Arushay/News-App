import React from 'react'
import loader from './loader.gif'

const Spiner = () => {
        return (
            <div className="text-center">
                <img className="my-3" src={loader} alt="Loading" />
            </div>
        )
}

export default Spiner