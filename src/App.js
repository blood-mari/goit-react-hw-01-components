import Profile from 'components/Profile/Profile'
import user from './dataBase/user.json'

import Statistics from './components/Statistics/Statistics'
import statisticalData from './dataBase/stats.json'

import FriendList from './components/FriendsList/FriendsList'
import friends from './dataBase/friends.json'

import TransactionHistory from './components/Transactions/TransactionHistory'
import transactions from './dataBase/ transactions.json'

import s from './App.module.css'

function App() {
    return (<>

        <div>
        {<h1 className={s.sectionTitle}>Task 1</h1>}
            <Profile {...user} />

        </div>
        <div className={s.statsContainer} >
            {<h2 className={s.sectionTitle}>Task 2</h2>}

            <div className={s.listContainer}>
                <Statistics title="Upload stats" stats={statisticalData} />
                <Statistics stats={statisticalData} />
            </div>
        </div>
        <div className={s.friendsContainer}>
            {<h2 className={s.sectionTitle}>Task 3</h2>}
            <FriendList friends={friends} />
        </div>
        <div>
            {<h2 className={s.sectionTitle}>Task 4</h2>}
        <TransactionHistory items={transactions} />;
        </div>

    </>);

}

export { App };