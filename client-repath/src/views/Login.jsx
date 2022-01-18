import React, { useState, Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import { red } from "@mui/material/colors";

function Login() {
	return (
		<>
			<div
				style={{
					className: "container",
					background: "#DC2626",
					flex: 1,
					flexDirection: "row",
					height: 982,
					width: 640,
				}}
			>
				<div>
					<img
						src="https://ik.imagekit.io/hanakar/Re-Path_D2YBYxVuS2I.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642490213261"
						style={{
							marginTop: 100,
							height: 200,
							width: 200,
							justifyContent: "center",
							alignItems: "center",
							alignSelf: "center",
						}}
					></img>
				</div>
				<div style={{ marginBottom: 50 }}>
					<text
						style={{
							color: "#f5f5f5",
						}}
					>
						Share your wonderful moments with us
					</text>
				</div>
				<Box
					component="form"
					sx={{
						"& > :not(style)": { m: 1, width: "25ch" },
						defaultValue: {
							color: red[50],
						},
					}}
					noValidate
					autoComplete="off"
				>
					<div
						style={{
							flexDirection: "column",
							margin: "auto",
							marginBottom: 1,
							width: "70%",
						}}
					>
						<TextField
							id="outlined-basic"
							label="username"
							variant="filled"
							defaultValue="small"
							margin="normal"
							fullWidth="300 px"
							sx={{
								input: {
									color: red[50],
								},
							}}
						></TextField>
					</div>
					<div
						style={{
							flexDirection: "column",
							margin: "auto",
							marginBottom: 20,
							width: "70%",
						}}
					>
						<TextField
							id="outlined-basic"
							label="password"
							variant="filled"
							margin="normal"
							fullWidth="300 px"
							sx={{
								input: {
									color: red[50],
								},
							}}
						/>
					</div>
					<Button
						style={{
							backgroundColor: "#FEE2E2",
							color: "#B91C1C",
							fontWeight: "bold",
							border: "1px solid blue",
							borderColor: "#FEE2E2",
						}}
					>
						Login
					</Button>
				</Box>
				<div
					style={{
						marginTop: 10,
					}}
				>
					<text
						style={{
							color: "#f5f5f5",
							fontWeight: "bold",
						}}
					>
						Doesn’t have an account yet ?
					</text>
				</div>
				<div
					style={{
						marginTop: 20,
					}}
				>
					<Button
						variant="outline-light"
						style={{
							backgroundColor: "#DC2626",
							outlineColor: "#ffffff",
							color: "#ffffff",
							fontWeight: "bold",
							width: 230,
						}}
					>
						Register
					</Button>
				</div>
			</div>
		</>
	);
}

export default Login;
