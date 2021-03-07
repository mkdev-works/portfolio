import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div className="container">
        <div id="site-title">
          <h1>
            <Link to="/">KM's web</Link>
          </h1>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Top</Link>
            </li>
            <li>
              <Link to="/about">Profile</Link>
            </li>
            <li>
              <Link to="/skill">Skill</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <a href="https://mkdev.mtnk.work" target="blank">
                Blog(WP)
              </a>
            </li>
          </ul>
        </nav>
        {/* ハンバーガーメニュー：同じこと二回書いている。時間に余裕があればちゃんと調べて実装する。 */}
        <div className="hamburger-menu">
          <input type="checkbox" id="menu-btn-check"></input>
          <label htmlFor="menu-btn-check" className="menu-btn">
            <span></span>
          </label>
          <div className="menu-content">
            <ul>
              <li>
                <Link to="/">Top</Link>
              </li>
              <li>
                <Link to="/about">Profile</Link>
              </li>
              <li>
                <Link to="/skill">Skill</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <a href="https://mkdev.mtnk.work" target="blank">
                  Blog(WordPress)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
