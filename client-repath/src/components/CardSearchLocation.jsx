import React, { useState, Component } from "react";
import { LocationOn } from "@mui/icons-material/";
import { red, blue } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import { Card } from "react-bootstrap";

export default function CardSearchLocation() {
	return (
		<Card style={{ border: "0px" }} role="button">
			<Card.Body style={{ backgroundColor: "#fef2f2", padding: "0px" }}>
				<div className="card-container-search-location">
					<div>
						<div className="dot-card-search-location">
							<LocationOn sx={{ color: red[50], fontSize: 40 }} />
						</div>
					</div>
					<Stack className="card-right-side d-flex flex-row align-items-center">
						<div
							className="content-search-location"
							style={{
								width: "250px",
								textAlign: "left",
								marginLeft: 20,
							}}
						>
							<div className="search-location-city">Bandung</div>
							<div className="search-location-province">Jawa Barat</div>
							<div className="search-location-country">Indonesia</div>
						</div>
					</Stack>
				</div>
			</Card.Body>
		</Card>
	);
}
