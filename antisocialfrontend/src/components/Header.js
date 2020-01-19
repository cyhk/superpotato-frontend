import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navlink from './Nav.js';
import CTA from './CTA.js';

class Header extends Component {

    render() {
        return (
            <div>
                <header >
                    <Navlink />
                    <main role="main">
                        <div className="container">
                            <div class="row">
                                <div class="col">
                                    <section>
                                        <h1 className='cover-heading col-centered display-linebreak'>
                                            Better friendships, stress-free.
                                        </h1>
                                    </section>
                                    <section>
                                        <h3 className=" col-centered  display-linebreak" > Superpotato is a personal assistant that helps you remember, manage, and grow your social network.
                                        Stop messing with spreadsheets and chillax like a real potato.
                                         </h3>
                                    </section>
                                </div>
                                <div class="col">

                                </div>
                            </div>
                            <CTA />
                        </div>

                    </main>

                </header>
            </div>
        )
    }

}
export default Header;