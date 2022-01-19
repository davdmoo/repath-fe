import React, { useState, Component } from "react";
import { Avatar } from "@mui/material/";
import { Card } from "react-bootstrap";

export default function CardSearchMusic() {
	return (
		<Card style={{ border: "0px" }} role="button">
			<Card.Body style={{ backgroundColor: "#fef2f2", padding: "0px" }}>
				<div className="card-container-search-music">
					<div className="card-left-side-search-music d-flex">
						<Avatar
							className="avatar-card"
							alt="BrunoMars"
							src="https://images.unsplash.com/photo-1630590613173-b01fdb40a1eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJ1bm8lMjBtYXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							sx={{ width: 75, height: 75 }}
							variant="rounded"
						></Avatar>
					</div>
					<div className="card-right-side d-flex flex-row align-items-center">
						<div className="content-search-music" style={{ width: "250px", textAlign: "left" }}>
							<div className="search-music-title">Grenade</div>
							<div className="search-music-artist">BrunoMars</div>
							<div className="search-music-albums">Albums On Fire - 2016</div>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
