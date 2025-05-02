import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'; 

const Navbar = () => {
    const navigate = useNavigate();
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "지속가능성",
    ];
  return (
    <div>
        <div>
            <div className="login-button" onClick={() => navigate('/login')} >
                <FontAwesomeIcon icon={faUser} />
                <span>로그인</span>
            </div>
        </div>
        <div className="nav-section">
            <img width={100}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png" alt="logo"/>
        </div>
        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map(menu=> (
                <li>{menu}</li>
                ))}
            </ul>
            <div className="search-bar">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input type="text" className="search-input"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar