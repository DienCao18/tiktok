import styles from './header.module.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { image } from '~/assets/images';
const cx= classNames.bind(styles)
function Header() {
    return (  
        <header className={cx('wrapper')}> 
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="Tiktok"/>
                </div>
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
                <div className={cx('actions')}>

                </div>
                
            </div>
        </header>
    );
}

export default Header;