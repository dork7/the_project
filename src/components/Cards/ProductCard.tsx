import React, { useContext } from 'react'
import './categories.styles.scss'
const categories = [
    {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://www.irreverentgent.com/wp-content/uploads/2021/02/Types-of-Mens-Hats-Banner.jpg",

        "price": 2222
    },
    {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://allensolly.abfrl.in/blog/wp-content/uploads/2022/07/Jacket.jpg",
        "price": 2222
    },
    {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://media.vogue.fr/photos/5d40515bc93b83000833392f/16:9/w_1280,c_limit/020-Sneakers-Encyclopaedia-Vogueint-Jul24-Getty-Images.jpg",
        "price": 2222
    },
    {
        "id": 4,
        "title": "women",
        "imageUrl": "https://images.ctfassets.net/wl6q2in9o7k3/4YlnKlAdosi3v4dwNTz372/174a1a4997f002c29854edb1ace3aa29/GY79418_LCY-002_Web_Banner_Desktop_3800x1700px_6.jpg?w=3840&q=90",
        "price": 2222
    },
    {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://static.wixstatic.com/media/045ee3_41d3828863364f46a3f5aa268330b4cf~mv2.jpg/v1/fill/w_1480,h_1168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/045ee3_41d3828863364f46a3f5aa268330b4cf~mv2.jpg",
        "price": 2222
    }
]


const ProductCard = (props: any) => {



    return (
        <>
            <div className="categories-container">
                {categories.map(({ title, price, imageUrl, id }) => {
                    return (
                        <div key={id} className="category-container">
                            <div className={'background-image'} style={{
                                backgroundImage: `url(${imageUrl})`
                            }} />
                            <div className="category-body-container">
                                <h1>{title}</h1>
                                <p>Shop Now</p>
                                <p>$ {price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ProductCard 