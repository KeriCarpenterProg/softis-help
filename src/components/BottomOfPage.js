import React from 'react';
import { Footer } from "react-materialize";
import 'materialize-css/dist/css/materialize.min.css';

export class BottomOfPage extends React.Component {
    render() {
        return(
            <div>
                <nav>
                <Footer
                    className="Playstation 5 Games"
                    copyrights="Copyright 2024 Keri Carpenter All Rights Reserved"
                    links={<ul><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>}
                    moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
                    >
                    <h5 className="white-text">
                        Footer Content
                    </h5>
                    <p className="grey-text text-lighten-4">
                        You can use rows and columns here to organize your footer content.
                    </p>
                </Footer>
                </nav>
            </div>
        )
    }
}

export default BottomOfPage;