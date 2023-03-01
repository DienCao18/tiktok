import styles from './header.module.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical,faEarthAsia,
    faCircleQuestion,faKeyboard, faCloudUpload, faUser, faCoins, faGear, faSignOut, faPlane,  } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css'; 


import classNames from 'classnames/bind';


import Button from '~/button';
import { image } from '~/assets/images';
import Menu from '~/poper/menu';
import { Message } from '~/assets/icon';
import Search from '../search';
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
    const currentUser= true

   
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
                {/* // Search */}
                <Search/>

                <div className={cx('actions')}>
                { currentUser ? (
                    <> 
                    <Tippy content="Upload video" placement='bottom' delay={[0,200]} >
                        <button className={cx('action-btn')}> 
                            <FontAwesomeIcon icon={faCloudUpload}/>
                            <Message />
                        </button>
                    </Tippy>
                    <Tippy content="Mở tin nhắn" placement='bottom' delay={[0,50]} >
                        <button className={cx('action-btn')}> 
                            <FontAwesomeIcon icon={faPlane}/>
                            <Message />
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