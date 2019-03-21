import React from 'react'
import GigList from "../../../users/components/User/GigList"
import StatsHeader from "../../components/User/StatsHeader/StatsHeader"
import './UserBlock.scss';

function UserBlock({user}) {
	return (
		<>
			<h1 className="user-username">{user.username}</h1>
			<StatsHeader user={user} />
			<GigList gigs={user.Gigs} />
		</>
	);
}

export default UserBlock;