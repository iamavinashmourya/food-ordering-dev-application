import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our Menu</h1>
            <p className='explore-menu-text'>Welcome to our food ordering platform! Browse our menu and order your favorite dishes for a delightful dining experience. </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                    <div key={index} className="explore-menu-list-items" onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}>
                        <img src={item.menu_image} alt="" className={`menu-image ${category === item.menu_name ? 'active' : ''}`} />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;
