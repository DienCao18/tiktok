import { useEffect, useState } from 'react';
import styles from './header.module.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { wrapper as PopperWrapper } from '~/poper';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import { image } from '~/assets/images';
import Accountitem from '~/accountItem';
const cx= classNames.bind(styles)
function Header() {
    const [searchResult, setsearchResult] = useState ([])
    useEffect(() => {
        setTimeout(() => {
            setsearchResult([1,2,3])
        },0)
    }, [])
    return (  
        <header className={cx('wrapper')}> 
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="Tiktok"/>
                </div>
                <Tippy 
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs=> (
                        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h3 className={cx('search-title')}>
                                Accounts 
                            </h3>
                            <Accountitem />
                            <Accountitem />
                            <Accountitem />

                        </PopperWrapper>
                        </div>
                    )}>
                <div className={cx('search')}>
                    <input type="text" placeholder='Tìm kiếm tài khoản và video' spellCheck={false} className={cx('input')} />
                    <button className={cx('clear')}> 
                      <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
              
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                
                    <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
                </Tippy>
                <div className={cx('actions')}>

                </div>
                
            </div>
        </header>
    );
}

export default Header;