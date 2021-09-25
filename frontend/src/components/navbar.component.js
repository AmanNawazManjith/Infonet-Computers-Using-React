import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return(
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><h3>INFONET COMPUTERS</h3></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="navbar-item">
                            <Link to="/laptops" className="nav-link">Laptops</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/desktops" className="nav-link">Desktops</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/printers" className="nav-link">Printers</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/storagedevices" className="nav-link">Storage Devices</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/networkingproducts" className="nav-link">Networking</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/accessories" className="nav-link">Accessories</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/contactUs" className="nav-link">Contact</Link>
                        </li>
                        <li>
                        <div>
                            <form className="search-form ">
                                <input className="search-bar searchBox" type="text" placeholder="Enter text here"/>
                                    <button className="search-button btn btn-dark" type="submit">
                                        Search
                                    </button>
                            </form>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        );
    }
}