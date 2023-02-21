function Header() {
    return (
        <nav className='cyan darken-3 white-text'>
            <div className='nav-wrapper'>
                <a href='!#' className='brand-logo'>
                    React Shop
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/Lday-creator/react-shop' target='_blank'>
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
