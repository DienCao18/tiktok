import classNames from "classnames/bind";
import { Link } from "react-router-dom"; 
import styles from "./button.module.scss";


const cx= classNames.bind(styles)
function Button({to, href,
    text= false, 
    outline= false,
    small= false, 
    large=false, 
    disabled= false,
    rounded= false,
    primary= false, children,className,leftIcon,rightIcon, onClick, ...passProps}) {
    
    let Comp = "button";
    const props = {onClick, ...passProps}
// remove event listeners
    if(disabled) {
                Object.keys(props).forEach(key => {
            if (key.startsWith("on") && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }


    if (to) {
        props.to = to
        Comp = Link
    } else if (href) { 
        props.href = href
        Comp = "a"
    }
    const classess = cx('wrapper' ,{primary, outline, small, large, text,disabled,
        [className]: className,
        rounded })

    return (  
        <Comp className={classess} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}> {children} </span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}

        </Comp>
    )
}

export default Button;