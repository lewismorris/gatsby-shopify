import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useCartCount } from "gatsby-theme-shopify-manager"

const Header = ({ siteTitle }) => {
  const count = useCartCount()

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>

      <div style={{ padding: "0 24px", display: "flex", alignItems: "center" }}>
        <Link to="/cart">
          <span style={{ fontSize: 24, color: "#ffffff" }}>{count}</span>
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
