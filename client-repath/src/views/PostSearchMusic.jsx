import React, { useState, Component } from "react";
import Stack from "@mui/material/Stack";
import NavbarContent from "../components/NavbarContent";

function PostSearchMusic() {
	return (
		<>
			<div
				style={{
					flex: 1,
					flexDirection: "row",
					height: "100vh",
					width: 640,
				}}
			>
				<NavbarContent></NavbarContent>
			</div>
		</>
	);
}

export default PostSearchMusic;
