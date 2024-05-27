import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from "./Navigation.module.css"
export default function Navigation() {
    return (
        <div>
            <ul className={css.list}>
                <li>
                    <NavLink to="/" className={(params) => {
                        return clsx(css.link, params.isActive && css.active);
                    }}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies" className={(params) => {
                        return clsx(css.link, params.isActive && css.active);
                    }}>
                        Movies
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
