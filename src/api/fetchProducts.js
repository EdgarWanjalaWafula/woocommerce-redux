export async function fetchProducts(dispatch, getState) {
    const response = await fetch('https://localhost/nuera/wp-json/wc/v3/products/?consumer_key=ck_902cfc29b79796a94812a1645d6f0e93394d0388&consumer_secret=cs_4bfaae37bb9ea7acb9fea8a0b5161fcbd425c4b7')
    
    if (response.ok) {
        dispatch({
            type: "SET_PRODUCTS",
            payload: await response.json()
        })
    }
}