import { List } from "@phosphor-icons/react"
import "./Header.css"

function Header() {
  return (
    <header>
        <div className="mobile">
            <div className="menu">
                <button>
                    <List size={32} />
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header