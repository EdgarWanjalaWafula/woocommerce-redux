const initialState = {
    location: ""
}

const LOCATION_REDUCER = (state = initialState, action) => {
    switch (action.type) {
        case "HOME_PAGE":
            return {
                ...state,
                location: 'homepage'
            }
        case "SHOP_PAGE":
            return {
                ...state,
                location: 'shop page'
            }
        case "INNER_PAGES":
            return {
                ...state,
                location: 'inner page'
            }
        default:
            return state
    }
}