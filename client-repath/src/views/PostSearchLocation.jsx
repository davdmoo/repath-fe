import React, { useState, Component } from "react";
import Navbar from "../components/Navbar";
import { Avatar } from "@mui/material/";
import { Card } from "react-bootstrap";
import CardSearchLocation from "../components/CardSearchLocation";

function PostSearchLocation() {
	return (
		<>
			<Navbar />
			<div style={{ height: "100vh", backgroundColor: "#fef2f2", paddingTop: "95px" }}>
				<div className="d-flex justify-content-center">
					<div class="input-group my-3" style={{ width: "300px", height: "50px" }}>
						<input type="search" class="form-control rounded" placeholder="Find location..." aria-label="Search location..." aria-describedby="search-addon" />
						<button type="button" class="btn btn-outline-danger">
							Search
						</button>
					</div>
				</div>
				<CardSearchLocation></CardSearchLocation>
				<CardSearchLocation></CardSearchLocation>
				<CardSearchLocation></CardSearchLocation>
				<CardSearchLocation></CardSearchLocation>
			</div>
		</>
	);
}

export default PostSearchLocation;
