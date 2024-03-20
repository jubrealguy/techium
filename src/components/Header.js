const Header = () => {
    return (
        <header class="header" data-section-theme="dark">
            <div class="container">
                <div class="header-container">
                    <div class="header-logo">
                        <a href="#">
                            <img src={'#'} alt="Techium logo" width="160" height="40" />
                        </a>
                    </div>
                    <input class="menu-btn" id="menu-btn" type="checkbox" />
                    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                    <nav class="navbar-menu">
                        <ul class="nav">
                            <li class="nav-item">
                                <a href="##" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#services" class="nav-link">Services</a>
                            </li>
                            <li class="nav-item">
                                <a href="#works" class="nav-link">Works</a>
                            </li>
                            <li class="nav-item">
                                <a href="#about" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="#latest_news" class="nav-link">Latest news</a>
                            </li>
                            <li class="nav-item">
                                <a href="#testimonials" class="nav-link">Testimonials</a>
                            </li>
                            <li class="nav-item">
                                <a href="#contact" class="nav-link">Contact</a>
                            </li>
                            <li class="nav-item">
                                <form action="#" method="post" class="form-search">
                                    <input type="search" name="q" id="search-input" placeholder="Search..." aria-label="Search through site content" />
                                    <button class="search-button">
                                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="search-icon">
                                            <title>
                                                Search icon
                                            </title>
                                            <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
                                        </svg>
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header