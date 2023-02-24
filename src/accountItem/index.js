import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./accountItem.moudle.scss"

const cx=classNames.bind(styles)
function Accountitem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx("avatar")} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1664108571037697.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1677308400&x-signature=epruY5NI8P9Pctiv6rCApRc8fWM%3D" alt="Hoaa">

            </img>
            <div className={cx("info")}>
                <h4 className={cx("name")}> 
                    <span>
                        Nguyễn Văn An 
                        <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
                    </span>
                </h4>
                <span className={cx("username")}> nguyen van a </span>
            </div>
        </div>
      );
}

export default Accountitem;