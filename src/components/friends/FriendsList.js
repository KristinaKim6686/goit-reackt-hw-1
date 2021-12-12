import PropTypes from "prop-types";
import FriendItem from "./FriendItem";
import style from "./friendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map((friend) => (
        <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default FriendList;
