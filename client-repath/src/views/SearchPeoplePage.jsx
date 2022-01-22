import Navbar from "../components/Navbar";
import CardAddPeople from "../components/CardAddPeople";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {fetchUsers} from '../store/actionCreators/userCreator'

function SearchPeoplePage() {
	const {users} = useSelector((state) => state.userReducer)
	const dispatch = useDispatch();
	useEffect(() => {
		console.log(users, `AAAAAAAAAAAAAAAAAA`)
	  dispatch(fetchUsers());
	}, []);
	
	return (
		<>
			<Navbar />
			<div style={{ height: "100vh", backgroundColor: "#fef2f2", paddingTop: "95px" }}>
				<div className="d-flex justify-content-center">
					<div class="input-group my-3" style={{ width: "300px", height: "50px" }}>
						<input type="search" class="form-control rounded" placeholder="Find people..." aria-label="Search people..." aria-describedby="search-addon" />
						<button type="button" class="btn btn-outline-danger">
							Search
						</button>
					</div>
				</div>
				{users.map((user) => {
					return <CardAddPeople key={user.id} user={user} />
       			})}
			</div>
		</>
	);
}

export default SearchPeoplePage;
