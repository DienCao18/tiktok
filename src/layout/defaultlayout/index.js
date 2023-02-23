import classNames from "classnames/bind";
import styles from "./defaultlayout.module.scss"

import Header from "./header";
import Sidebar from "./sidebar";

const cx = classNames.bind(styles);
function Defaultlayout({children}) {
    return (  
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}> 
                <Sidebar/> 
                <div className={cx('content')}>
                    {children} 
                </div>
            </div>
        </div>
    );
}

export default Defaultlayout;