import React from 'react'
import SHOP_DATA from '../../data/shopData.json'
const ShopPage = () => {
    console.log('SHOP_DATA', SHOP_DATA)
    return (
        <div>
            {SHOP_DATA.map(data =>
            (<div key={data.id}>
                {data.name}
            </div>)
            )}
        </div >
    )
}

export default ShopPage