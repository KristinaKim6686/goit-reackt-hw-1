import PropTypes from "prop-types";
import style from "./FriendItem.module.css";

const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={style.friend} id={id}>
      <span className={style[isOnline]}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
