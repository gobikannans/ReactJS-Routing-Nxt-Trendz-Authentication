import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="website-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="website-logo"
        alt="website logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="logout"
      />
      <ul className="heading-list-container">
        <li>
          <h1 className="header">Home</h1>
        </li>
        <li>
          <h1 className="header">Products</h1>
        </li>
        <li>
          <h1 className="header">Cart</h1>
        </li>
        <li>
          <button type="button" className="header-btn-style">
            Logout
          </button>
        </li>
      </ul>
    </div>
    <ul className="heading-list-min-container">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="min-logo"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="min-logo"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="min-logo"
        />
      </li>
    </ul>
  </nav>
)

export default Header
