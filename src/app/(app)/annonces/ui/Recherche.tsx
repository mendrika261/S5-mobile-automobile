"use client";

export default function Recherche() {
    return (
        <div className="widget search-area">
            <h5 className="sidebar-title">Recherche avancé</h5>
            <div className="search-area-inner">
                <div className="search-contents ">
                    <form method="GET">
                        <div className="form-group">
                            <label>Marque</label>
                            <select className="selectpicker search-fields" name="choose">
                                <option>Choose One</option>
                                <option>Brand</option>
                                <option>AUdi</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Pays de fabrication</label>
                            <select className="selectpicker search-fields" name="choose">
                                <option>Choose One</option>
                                <option>Location</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Année de mise en circulation</label>
                            <select className="selectpicker search-fields" name="Year">
                                <option>Choose One</option>
                                <option>2012</option>
                                <option>2013</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Select Category</label>
                            <select className="selectpicker search-fields" name="luxury">
                                <option>Choose One</option>
                                <option>Luxury Car</option>
                                <option>Minivan</option>
                                <option>Sports Car</option>
                                <option>Van</option>
                                <option>Wagon</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Boite de vitesse</label>
                            <select className="selectpicker search-fields" name="transmission">
                                <option>Choose One</option>
                                <option>Manual</option>
                                <option>Automatic</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <div className="range-slider">
                                <div data-min="0" data-max="150000" data-unit="USD" data-min-name="min_price"
                                     data-max-name="max_price" className="range-slider-ui ui-slider"
                                     aria-disabled="false"></div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <br/>
                            <h5 className="sidebar-title">Brands</h5>
                            <div className="form-group">
                                <div className="form-check checkbox-theme">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                        <label className="form-check-label">
                                            Audi
                                        </label>
                                </div>
                                ...
                            </div>
                            <br/>
                            <button className="search-button btn-md btn-color">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}