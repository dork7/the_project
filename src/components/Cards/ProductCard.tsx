import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/product.context'
import './categories.styles.scss'
import { getProductSelector } from '../../store/product/product.selector'
import Hamster from '../../components/Loaders/Hamster'

const ProductCard = () => {

    // const { categoriesMap }: any = useContext(CategoriesContext)

    const categoriesMap = getProductSelector()

    const navigate = useNavigate()
    const handleClick = (item: string) => {
        navigate(`/shop/${item}`)
    }
    if (!categoriesMap) {
        return <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh'
        }}>

            <Hamster />
        </div>
    }

    return (
        <>
            <div className="categories-container">
                {Object.keys(categoriesMap).map((title) => {
                    return (
                        <div key={categoriesMap[title][0]?.id} className="category-container">
                            <div className={'background-image'} style={{
                                backgroundImage: `url(${categoriesMap[title][0]?.imageUrl})`
                            }} />
                            <div className="category-body-container" onClick={() => handleClick(title)}>
                                <h1>{title.toUpperCase()}</h1>
                                <p >Shop Now</p>
                                <p>$ {categoriesMap[title][0]?.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ProductCard 