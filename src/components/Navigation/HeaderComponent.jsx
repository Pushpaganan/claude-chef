import cheflogo from '/public/chef-claude-icon.png'

export default function HeaderComponent(){
    return (
        <header>
            <div className="header__logo">
                <img src={cheflogo} alt="chef-claude-logo" className="header__logo-image">
                </img>
                <span className="header__logo-text">Chef Claude</span>
            </div>
        </header>
    )
}