import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'; 
import './Navbar.css'; 

const Navbar = ({ authenticate, setAuthenticate }) => {
    const navigate = useNavigate();
    const [sideOpen, setSideOpen] = useState(false);

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

    const goHome = () => navigate('/');

    const handleAuthClick = () => {
        if (authenticate) {
            setAuthenticate(false);
            navigate("/");
        } else {
            navigate("/login");
        }
    };

    const search = e => {
        if (e.key === 'Enter') {
          navigate(`/?q=${e.target.value}`);
        }
      };
    

    return (
        <>
          <div className="login-button" onClick={handleAuthClick}>
            <FontAwesomeIcon icon={faUser} />
            <span>{authenticate ? '로그아웃' : '로그인'}</span>
          </div>
    
          <nav className="nav-section">
            <FontAwesomeIcon
              icon={faBars}
              className="hamburger"
              onClick={() => setSideOpen(true)}
            />
    
            <img
              width={100}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
              alt="logo"
              className="logo"
              onClick={goHome}
            />
    
            <ul className="menu-list">
              {menuList.map(menu => (
                <li key={menu}>{menu}</li>
              ))}
            </ul>
    
            <div className="search-bar">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                className="search-input"
                onKeyPress={search}
              />
            </div>
          </nav>
    
          <div
            className={`side-overlay ${sideOpen ? 'show' : ''}`}
            onClick={() => setSideOpen(false)}
          />
          <aside className={`side-menu ${sideOpen ? 'open' : ''}`}>
            <ul className="side-menu-list">
              {menuList.map(menu => (
                <li key={menu} onClick={() => setSideOpen(false)}>
                  {menu}
                </li>
              ))}
            </ul>
          </aside>
        </>
      );
    };

export default Navbar