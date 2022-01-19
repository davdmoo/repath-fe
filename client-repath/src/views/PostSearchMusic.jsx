import React, { useState, Component } from "react";
import Navbar from "../components/Navbar";
import { Avatar } from "@mui/material/";
import { Card } from "react-bootstrap";
import CardSearchMusic from "../components/CardSearchMusic";

function PostSearchMusic() {
	return (
		<>
			<Navbar />
			<div className="friendlist-page" style={{ height: "100vh", backgroundColor: "#fef2f2", paddingTop: "95px" }}>
				<div className="d-flex justify-content-center">
					<div class="input-group my-3" style={{ width: "300px", height: "50px" }}>
						<input type="search" class="form-control rounded" placeholder="Find music..." aria-label="Search people..." aria-describedby="search-addon" />
						<button type="button" class="btn btn-outline-danger">
							Search
						</button>
					</div>
				</div>
				<CardSearchMusic></CardSearchMusic>
				<CardSearchMusic></CardSearchMusic>
				<CardSearchMusic></CardSearchMusic>
			</div>
		</>
	);
}

export default PostSearchMusic;
