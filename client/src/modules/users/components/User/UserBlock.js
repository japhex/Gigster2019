import React from 'react'
import StatsHeader from "../../components/User/StatsHeader/StatsHeader"
import './UserBlock.scss';
import ViewUserGigs from "../../../gigs/pages/ViewUserGigs"
import {UserSidebar} from './UserBlockStyled'

const UserBlock = ({user}) => (
	<>
		<UserSidebar>
			<h1 className="user-username">{user.username}</h1>
			<StatsHeader user={user} />
		</UserSidebar>
		<ViewUserGigs user={user} />
	</>
);

export default UserBlock;