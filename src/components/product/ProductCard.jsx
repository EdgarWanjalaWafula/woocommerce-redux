import { Link } from "react-router-dom"

export default function ProductCard(props) {
    const { slug, name, regular_price } = props.prop
    return (
        <div className="col-lg-4 col-md-4 col-6">
            <div className="product-card">
                <div className="product-thumbnail-cart position-relative">
                    <Link to={`/product/${slug}`} className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <img width="2100" height="1500" src="https://localhost/nuera/wp-content/uploads/2024/02/Nuera-01-1.webp" className="attachment-product-thumbnail size-product-thumbnail" alt="" decoding="async" fetchpriority="high" srcset="https://localhost/nuera/wp-content/uploads/2024/02/Nuera-01-1.webp 2100w, https://localhost/nuera/wp-content/uploads/2024/02/Nuera-01-1-300x214.webp 300w, https://localhost/nuera/wp-content/uploads/2024/02/Nuera-01-1-1024x731.webp 1024w, https://localhost/nuera/wp-content/uploads/2024/02/Nuera-01-1-768x549.webp 768w, https://localhost/nuera/wp-content/uploads/2024/02/Nuera-01-1-1536x1097.webp 1536w, https://localhost/nuera/wp-content/uploads/2024/02/Nuera-01-1-2048x1463.webp 2048w" sizes="(max-width: 2100px) 100vw, 2100px" />
                        <img className="product-hover-image position-absolute w-100" src="https://localhost/nuera/wp-content/uploads/2024/02/Nuera-03.webp" />
                    </Link>
                    <div className="product-title-price"><Link to={`/product/${slug}`} className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <h2 className="woocommerce-loop-product__title">{name}</h2>
                        <div className="d-flex justify-content-center align-items-center">
                            <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">KSh</span>{regular_price}</bdi></span></span>

                        </div>
                    </Link>
                        <Link to={`/product/${slug}`} className="add_to_cart_button" >View Product</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}