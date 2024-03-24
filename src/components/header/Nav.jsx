import { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom";
import { useFetch, slugify } from "../../custom-hooks/customHooks";

export default function Navigation() {
    const MENU_ARRAY = useFetch('http://localhost/nuera/wp-json/wp/v2/header-menu')

    return (
        <nav>
            <ul className="header__product-categories d-flex justify-content-between text-uppercase">
                {
                    !MENU_ARRAY ?
                        null :
                        MENU_ARRAY.map(({ title }, index) =>
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