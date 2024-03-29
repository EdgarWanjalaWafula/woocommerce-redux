import { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom";
import { useFetch, slugify } from "../../custom-hooks/customHooks";
import { BASEURL, WP_API_ENDPOINTS, WP_REST_VERSION } from "../../config/constants";
import { FALLBACK_MENU } from "./menuFallback";

export default function Navigation() {
    const [menu, setMenu] = useState(null)
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null)

    const { PRIMARY_MENU } = WP_API_ENDPOINTS
    const url = `${BASEURL}wp-json/wp${WP_REST_VERSION + PRIMARY_MENU}`

    useEffect(() => {
        (async function () {

            try {
                const response = await fetch(url);
                if (response.ok) {
                    setMenu(await response.json())
                }
            } catch (error) {
                setMenu(FALLBACK_MENU)
                console.log('There has been a problem with your fetch operation: ', error.message);
            }
        })()
    }, [])

    return (
        <nav>
            <ul className="header__product-categories d-flex justify-content-between text-uppercase">
                {
                    !menu ?
                        null :
                        menu.map(({ title }, index) =>
                            <li className="menu-item" key={index}>
                                <Link to={index == 0 ? '/' : slugify(title)}>
                                    {title}
                                </Link>
                            </li>
                        )
                }
            </ul>
        </nav>
    )
}