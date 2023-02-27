import Button from "~/button";
import classNames from 'classnames/bind';
import styles from "./menu.module.scss";


const cx= classNames.bind(styles)

function MenuItem( {data, onClick}) {
  const classes = cx("menu-item", {
    separate: data.separate,
  })
    return (  
      <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title }
      </Button>
    );
}

export default MenuItem;