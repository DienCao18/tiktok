import {  useEffect, useState, useRef} from 'react';



import HeadlessTippy from '@tippyjs/react/headless';
import { wrapper as PopperWrapper } from '~/poper';
import Accountitem from '~/accountItem';
import {
    faCircleXmark,
    faMagnifyingGlass, 
    faSpinner,
    } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './search.module.scss';

const cx= classNames.bind(styles)


function Search() {
    const [searchvalue,setsearchvalue]= useState('')
    const [searchResult, setsearchResult] = useState ([])
    const [showresult, setshowresult] = useState(true)


    const inputRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            setsearchResult([1,2])
        },0)
    }, [])

    const handleclear= () => {
        setsearchvalue("");
        inputRef.current.focus();
        setshowresult(false);
    }
  
    const handelHideresult= () => {
        setshowresult(false)
       
    }

    
    return (  
        <HeadlessTippy 
                    onClickOutside={handelHideresult}
                    interactive
                    visible={showresult && searchResult.length > 0}
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
                    <input type="text" 
                    ref={inputRef}
                    value={searchvalue}
                    placeholder='Tìm kiếm tài khoản và video' 
                    spellCheck={false} 
                    className={cx('input')}
                    onChange={(e) => setsearchvalue(e.target.value)}
                    onFocus={() => setshowresult(true)}
                     />
                     {!!searchvalue && 
                    <button className={cx('clear')} onClick={
                        handleclear
                        } >
                      <FontAwesomeIcon icon={faCircleXmark}/>
                    </button> }
              
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> */}
                
                    <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
                </HeadlessTippy>
    );
}

export default Search;