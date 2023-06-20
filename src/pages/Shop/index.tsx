import React from 'react'
import SHOP_DATA from '../../data/shopData.json'
const ShopPage = () => {
    return (
        <div>
            {SHOP_DATA.map(data => {
                <div>
                    {data.name}
                </div>
            })}
        </div>
    )
}

export default ShopPage