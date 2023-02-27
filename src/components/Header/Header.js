import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import imageAvatar from "../../assets/avatar/imageAvatar.jpg"
import { ProfileOutlined, SettingOutlined, HeartOutlined, KeyOutlined, LogoutOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
// import UserCard from '../UserCard/UserCard';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Trang cá nhân', 'sub1', <ProfileOutlined />),
  getItem('Đổi mật khẩu', 'sub2', <KeyOutlined />),
  getItem('Cài đặt', 'sub3', <SettingOutlined />),
  getItem('Đăng xuất', 'sub4', <LogoutOutlined />),
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];
const Header = () => {
  const [search, setSearch] = useState('')
  const [isSearch, setIsSearch] = useState(false)
  // const [checkLogout, setCheckLogout] = useState(false)
  // const [users, setUsers] = useState([])
  const [isShowProfile, setIsShowProfile] = useState(false)
  const [isShowNotification, setIsShowNotification] = useState(false)

  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handeSearch = (e) => {
    setSearch(e.target.value.toLowerCase())
    if (search) {
      setIsSearch(true)
    }
    else {
      setIsSearch(false)
    }
  }

  const handleFocus = () => {
    if (search) setIsSearch(true);
    setIsShowNotification(false)
    setIsShowProfile(false)
  }
  
  const handleLogo = () => {
    window.scrollTo({top: 0})
    window.location.reload();
    
  }

  const handleNotification = () => {
    setIsSearch(false)
    setIsShowProfile(false)
    setIsShowNotification(!isShowNotification);
  }

  const handleProfile = () => {
    setIsShowNotification(false);
    setIsSearch(false)
    setIsShowProfile(!isShowProfile)
  }
  
  
  // const handleLogout = () => {
    
  // }


  return (
    <div className='header'>
      <div className='logo'>
        <Link to="/" >
           <img
             src={process.env.PUBLIC_URL + "/icons/logo.svg"}
             alt="logo"
             height="50x"
             width="50px"
             onClick={handleLogo}
           />
        </Link>
      </div>
      <form class="search-form">          
        <input type="text" 
          className="form-control" 
          placeholder="Search" 
          onChange={e => handeSearch(e)}
          onFocus={handleFocus}
          onBlur={() => {setIsSearch(false)}}
        />
        {/* {isSearch && 
          users.map(user => {
            <UserCard 
              key={user.id}
              props={user}
            />
          })
        } */}
      </form>
      <div className='menu'>
        <button 
          className='btn-notification' 
          onClick={handleNotification}>
          <HeartOutlined 
            className='notification-icon' 
            style={{ fontSize: '24px', margin: "auto" }}
          />
        </button>
        <img 
          className="profile" 
          src={imageAvatar} 
          alt="avatar" 
          onClick={handleProfile}
        />
        {isShowProfile &&
          <Menu
            className='menu-profile'
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{
              width: 256,
            }}
            items={items}
          />
        };
        {isShowNotification &&
          <div className='notification'>
            <h1>Thông báo</h1>
          </div>
        };
        {isSearch && 
          <div className='search-user'></div>
        }
        {/* {checkLogout && 
          <div className="back-form">
            <div className="modal-form"></div>
            <div className="container-logout">
              <p>Bạn muốn đăng xuất ?</p>
              <div className="form-footer">
                <button className="confirm-logout" onClick={handleLogout}>Đồng ý</button>
                <button className="exit-logout" onClick={() => setCheckLogout(false)}>Hủy bỏ</button>
              </div>
            </div>
          </div>
        } */}
      </div>
    </div>
  );
}

export default Header;