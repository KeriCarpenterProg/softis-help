import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export class NavBar extends React.Component {
    render() {
        return(
            <div>
                <nav>
                <div class="nav-wrapper">
                <a href="#1" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
                </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;