import Profile from "./components/profile/Profile";
import FriendList from "./components/friends/FriendsList";
import Stastistics from "./components/statistics/Statistics";
import TransactionHistory from "./components/transaction-history/TransactionHistory";

import friends from "./data/friends.json";
import user from "./data/user.json";
import data from "./data/data.json";
import stats from "./data/data.json";
import transaction from "./data/transaction.json";

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Stastistics title="Upload stats" stats={stats} />
      <TransactionHistory items={transaction} />
    </div>
  );
}
