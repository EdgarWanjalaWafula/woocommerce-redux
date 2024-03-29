import { Link } from "react-router-dom"

export default function ProductCard(props) {
    const { slug, name, regular_price } = props.prop
    return (
        <div className="col-lg-4 col-md-4 col-6">
            <div class="product-card">
                <div class="product-thumbnail-cart position-relative">
                    <Link to={`/product/${slug}`} class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <img width="2100" height="1500" src="https://localhost/nuera/wp-content/uploads/2024/02/Nuera-01-1.webp" class="attachment-product-thumbnail size-product-thumbnail" alt="" decoding="async" fetchpriority="high" srcset="https://localhost/nuera/wp-content/uploads/2024/02/Nuera-01-1.webp 2100w, https://localhost/nuera/wp-content/uploads/2024/02/Nuera-01-1-300x214.webp 300w, https://localhost/nuera/wp-content/uploads/2024/02/Nuera-01-1-1024x731.webp 1024w, https://localhost/nuera/wp-content/uploads/2024/02/Nuera-01-1-768x549.webp 768w, https://localhost/nuera/wp-content/uploads/2024/02/Nuera-01-1-1536x1097.webp 1536w, https://localhost/nuera/wp-content/uploads/2024/02/Nuera-01-1-2048x1463.webp 2048w" sizes="(max-width: 2100px) 100vw, 2100px" />
                        <img class="product-hover-image position-absolute w-100" src="https://localhost/nuera/wp-content/uploads/2024/02/Nuera-03.webp" />
                    </Link>
                    <div class="product-title-price"><Link to={`/product/${slug}`} class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <h2 class="woocommerce-loop-product__title">{name}</h2>
                        <div class="d-flex justify-content-center align-items-center">
                            <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">KSh</span>{regular_price}</bdi></span></span>

                        </div>
                    </Link>
                        <Link to={`/product/${slug}`} class="add_to_cart_button" >View Product</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}