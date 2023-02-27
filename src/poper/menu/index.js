import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from "./menu.module.scss";
import { wrapper as PopperWrappe } from '~/poper';
import MenuItem from './menuitem';
import Header from './header';
import { useState } from 'react';



const cx= classNames.bind(styles)



function Menu({children, items= [], onChange}) {
    const [history, setHistory] = useState([{data: items}])
    const current= history[history.length -1]

  const renderItems = () => {
      
      return current.data.map((item, index) => {

        const isParent = !!item.Children 
       
        return  <MenuItem 
        key={index} 
        data={item} 
        onClick={() => {
          if (isParent) {
                setHistory((prev) => [...prev, item.Children])}
                else {onChange(item)}
        }}  />
      }
       

      )
    }

    return ( 
                    <Tippy 
                    interactive
                   
                    placement='bottom-end'
                    render={attrs=> (
                        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                        <PopperWrappe className={cx('menu-poper')}>
                        {history.length >1 && < Header title="Language" 
                          onBack={() => {setHistory((prev) => prev.slice(0, prev.length -1))
                        }}/> }
                          {renderItems()}
                        </PopperWrappe>
                        </div>
                    )}>
                        {children}
                    </Tippy>
                
     );
}

export default Menu;