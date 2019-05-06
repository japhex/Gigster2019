import React from 'react'
import GigList from "../../../gigs/components/GigList/GigList"
import StatsHeader from "../../components/User/StatsHeader/StatsHeader"
import './UserBlock.scss';

const UserBlock = ({user}) => (
	<>
		<div className="user-sidebar">
			<h1 className="user-username">{user.username}</h1>
			<StatsHeader user={user} />
		</div>
		<GigList gigs={user.gigs} withoutCrud={true} />
	</>
);

export default UserBlock;