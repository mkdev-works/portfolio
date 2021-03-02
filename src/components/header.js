import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div className="container">
        <div id="site-title">
          <h1>
            <Link to="/">Negi's Portfolio</Link>
          </h1>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Top</Link>
            </li>
            <li>
              <Link to="/about">自己紹介</Link>
            </li>
            <li>
              <Link to="/skill">スキル</Link>
            </li>
            <li>
              <Link to="/works">ポートフォリオ</Link>
            </li>
            <li>
              <Link to="/contact">連絡先</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
