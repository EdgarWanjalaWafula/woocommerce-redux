import { useEffect, useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import { useFetch } from "../../custom-hooks/customHooks";
import API from "../../utilities/api";
import Alert from 'react-bootstrap/Alert';

export default function RecentProductsSection() {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState(null)

    useEffect(() => {
        (async function () {
            try {
                const response = await fetch('https://localhost/nuera/wp-json/wc/v3/products/?consumer_key=ck_902cfc29b79796a94812a1645d6f0e93394d0388&consumer_secret=cs_4bfaae37bb9ea7acb9fea8a0b5161fcbd425c4b7')
                if (!response.ok) {
                    return //
                }

                setProducts(await response.json())
                setLoading(false)
            } catch (error) {
                console.log('There is an issue fetching products: ', error.message);
            }
        })()
    }, [])

    return (
        <section className="theme-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3 text-center">
                        <h1>All Products</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        loading ?
                            <div className="col-md-4 offset-4">
                                <Alert variant="info">Loading products. Please wait..</Alert>
                            </div>
                            : products.map((product, index) =>
                                <ProductCard key={index} prop={product} />
                            )
                    }
                </div>
            </div>
        </section>
    )
}