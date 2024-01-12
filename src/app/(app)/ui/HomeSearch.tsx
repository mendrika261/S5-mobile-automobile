
export default function HomeSearch() {
    return (
        <>
            <div id="homesearch" style={{marginBottom: "100px"}}>
            </div>
            <div className="search-area" id="search-area-1">
                <div className="container">
                    <div className="search-area-inner">
                        <div className="search-contents ">
                            <form action="index.html" method="GET">
                                <div className="row">
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" name="brand">
                                                <option>Select Brand</option>
                                                <option>BMW</option>
                                                <option>Honda</option>
                                                <option>Nissan</option>
                                                <option>Toyoto</option>
                                                <option>Lamborghini</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" name="category">
                                                <option>Select Category</option>
                                                <option>Pickup Truck</option>
                                                <option>Minivan</option>
                                                <option>Sports Car</option>
                                                <option>Van</option>
                                                <option>Wagon</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" name="Year">
                                                <option>Select Year</option>
                                                <option>2012</option>
                                                <option>2013</option>
                                                <option>2014</option>
                                                <option>2015</option>
                                                <option>2016</option>
                                                <option>2017</option>
                                                <option>2018</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" name="location">
                                                <option>Select Location</option>
                                                <option>United States</option>
                                                <option>United Kingdom</option>
                                                <option>American Samoa</option>
                                                <option>Belgium</option>
                                                <option>Canada</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" name="bathrooms">
                                                <option>Select Transmission</option>
                                                <option>Automatic</option>
                                                <option>Manual</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" name="body">
                                                <option>Select Body</option>
                                                <option>Sedan</option>
                                                <option>Minivan</option>
                                                <option>Truck</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <div className="range-slider">
                                                <div data-min="0" data-max="150000" data-unit="USD"
                                                     data-min-name="min_price" data-max-name="max_price"
                                                     className="range-slider-ui ui-slider" aria-disabled="false"></div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <button className="search-button btn-md btn-color" type="submit">Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
