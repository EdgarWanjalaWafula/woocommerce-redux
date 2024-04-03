export default function ShopFilter() {
    return <div className="product-sort-filter text-uppercase heading">
        <div className="container-fluid">
            <div className="row justify-content-between align-items-center text-uppercase">
                <div className="col-lg-2">
                    <i data-target="shop-filter" title="Filter" className="bi bi-sliders"></i>
                </div>
                <div className="col-lg-7">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="woocommerce-result-count m-0">
                            Showing all 3 results</p>
                        <form className="woocommerce-ordering" method="get">
                            <select name="orderby" className="orderby form-control text-uppercase rounded-0 border-0" aria-label="Shop order">
                                <option value="menu_order" selected="selected">Default sorting</option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="date">Sort by latest</option>
                                <option value="price">Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>
                            </select>
                            <input type="hidden" name="paged" value="1" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}