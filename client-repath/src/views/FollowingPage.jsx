import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CardFriendList from "../components/CardFriendList";

function FollowingPage() {
	return (
		<>
			<Navbar />
			<div style={{ height: "100vh", backgroundColor: "#fef2f2", paddingTop: "95px" }}>
				<h1 className="pt-2 pb-3">Following</h1>
				<CardFriendList />
				<CardFriendList />
				<CardFriendList />
				<CardFriendList />
				<CardFriendList />
				<CardFriendList />
				<CardFriendList />
				<CardFriendList />

				<CardFriendList />
				<CardFriendList />
				<CardFriendList />
				<CardFriendList />
				<CardFriendList />
				<CardFriendList />
				<CardFriendList />
				<CardFriendList />
				<CardFriendList />
				<CardFriendList />
			</div>
		</>
	);
}

export default FollowingPage;
