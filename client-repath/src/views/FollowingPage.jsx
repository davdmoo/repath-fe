import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardFriendList from "../components/CardFriendList";
import { useEffect } from "react";
import { fetchFollowing } from "../store/actionCreators/followCreator";

function FollowingPage() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(fetchFollowing())
	}, [])
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
			</div>
		</>
	);
}

export default FollowingPage;
