import { useEffect, useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import { useFetch } from "../../custom-hooks/customHooks";
import API from "../../utilities/api";
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from "react-redux";

export default function RecentProductsSection() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    // const { products } = useSelector((state) => state.productsReducer)

    return (
        <section className="theme-padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 offset-3 text-center">
                        <h1>All Products</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        // loading ?
                        //     <div className="col-md-4 offset-4">
                        //         <Alert variant="info">Loading products. Please wait..</Alert>
                        //     </div>
                        //     : products.map((product, index) =>
                        //         <ProductCard key={index} prop={product} />
                        //     )
                    }
                </div>
            </div>
        </section>
    )
}