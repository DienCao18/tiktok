import Button from "~/button";
import classNames from 'classnames/bind';
import styles from "./menu.module.scss";


const cx= classNames.bind(styles)

function MenuItem( {data, onClick}) {
    return (  
      <Button className={cx("menu-item")} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title }
      </Button>
    );
}

export default MenuItem;