import Navbar from "../components/Navbar";
import CardAddPeople from "../components/CardAddPeople";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {fetchUsers} from '../store/actionCreators/userCreator'

function SearchPeoplePage() {
	const dispatch = useDispatch();
	const {users} = useSelector((state) => state.userReducer)
	const [peopleName, setPeopleName] = useState({name: ""})

	useEffect(() => {
		console.log(users, `AAAAAAAAAAAAAAAAAA`)
	  dispatch(fetchUsers());
	}, []);
	
	const changeSearch = (e) => {
		const value = e.target.value
		const field = e.target.name
		setPeopleName ({
			...peopleName,
			[field]: value
		})
		console.log(field, value);
	}

	const getSearchPeople = () => {
		dispatch(fetchUsers(peopleName.name))
	}

	const userSearchExist = () => {
	if (users.length > 0) {
		return users.map((user, idx) => {
			return <CardAddPeople key={user.id} user={user} />
		});
	} else {
		return (
		<div>
			<h3 className="mt-3">Sorry... </h3>
			<h4>User not found.</h4>
		</div>
		);
	}
	};
	
	return (
		<>
			<Navbar />
			<div style={{ height: "100vh", backgroundColor: "#fef2f2", paddingTop: "95px" }}>
				<div className="d-flex justify-content-center">
					<div className="input-group my-3"
					style={{ width: "300px", height: "50px" }}>
						<input name="name" onChange={changeSearch} type="search" class="form-control rounded" placeholder="Find people..." aria-label="Search people..." aria-describedby="search-addon" />
						<button onClick={() => getSearchPeople()} type="button" class="btn btn-outline-danger">
							Search
						</button>
					</div>
				</div>
				{userSearchExist()}
				{/* {users.map((user) => {
					return <CardAddPeople key={user.id} user={user} />
       			})} */}
			</div>
		</>
	);
}

export default SearchPeoplePage;
