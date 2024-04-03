import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function FeaturedProductSection() {

    return (
        <>
            <section className="featured-product-sec position-relative">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="featured-products-row">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <div className="d-flex product-images">
                                            <div className="product-thumbnail">

                                            </div>
                                            <div className="product-image-full">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col text-white">
                                        <div className="featured-product-content">
                                            <h1>Nuera - Snowy White</h1>
                                            <p>

                                                Our inaugural Nuera Shine 1.0 series offers comfort, style, and affordability.
                                            </p>
                                            <span className="d-block"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">KSh</span>3,999</bdi></span></span>
                                            <button className="btn featured-buy text-white w-100 woo-button">Buy on WhatsApp <i className="bi bi-whatsapp"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}