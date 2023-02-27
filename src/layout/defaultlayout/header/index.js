import { Children, useEffect, useState } from 'react';
import styles from './header.module.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faMagnifyingGlass, faSpinner,faEarthAsia,
    faCircleQuestion,faKeyboard, faCloudUpload, faUser, faCoins, faGear, faSignOut,  } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css'; 

import { wrapper as PopperWrapper } from '~/poper';

import classNames from 'classnames/bind';


import Button from '~/button';
import { image } from '~/assets/images';
import Accountitem from '~/accountItem';
import Menu from '~/poper/menu';
const cx= classNames.bind(styles)

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: "English",
        Children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code:"en",
                    title: "English",
                },{
                    code:"vi",
                    title: "Vietnamese",
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: "Feelback and help",
        to: "feelback"
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: "keyboard shortcuts ",
       
    }
]



function Header() {
    const [searchResult, setsearchResult] = useState ([])
    const currentUser= true

    useEffect(() => {
        setTimeout(() => {
            setsearchResult([1,2,3])
        },0)
    }, [])
// handle logic
    const handelMenuchange= (MenuItem) => {
        console.log(MenuItem)
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}/>,
            title: "View profile",
            to: "/@Hoaa"
        }, {
            icon: <FontAwesomeIcon icon={faCoins}/>,
            title: "Get coins",
            to: "/coin"
        }, {
            icon: <FontAwesomeIcon icon={faGear}/>,
            title: "Setting",
            to: "/setting"
        },
        ...MENU_ITEM, {
            icon: <FontAwesomeIcon icon={faSignOut}/>,
            title: "Log out",
            to: "/logout",
            separate: true,
        },

    ]

    return (  
        <header className={cx('wrapper')}> 
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="Tiktok"/>
                </div>
                <HeadlessTippy 
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
                </HeadlessTippy>

                <div className={cx('actions')}>
                { currentUser ? (
                    <> 
                    <Tippy content="Upload video" placement='bottom' delay={[0,200]} >
                        <button className={cx('action-btn')}> 
                            <FontAwesomeIcon icon={faCloudUpload}/>
                        </button>
                    </Tippy>
                    </>
                ): (

                    <div>
                    <Button  text> Upload </Button>
                 
                    <Button  primary  > 
                        Log in 
                    </Button>
                    
                   </div>
                  
                )}
                   <Menu items= { currentUser ? userMenu : MENU_ITEM} onChange={handelMenuchange}>
                   {currentUser ? (
                     <img 
                     src="https://lh3.googleusercontent.com/ogw/AAEL6si8rF5H4W4NBfP1NM548Wh_o96NpdJsWlkmGGuM=s32-c-mo" 
                     className={cx("user-avatar")} 
                     alt="Nguyễn Văn A"  />
                   ) : (

                   <button className={cx("more-btn")}> 
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                   )
                   }
                   </Menu>
               
               
                </div>

                </div>
        </header>
    );
}

export default Header;