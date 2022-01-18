import React, { useState, Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import { red } from "@mui/material/colors";

function Register() {
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
							height: 200,
							width: 200,
							justifyContent: "center",
							alignItems: "center",
							alignSelf: "center",
						}}
					></img>
				</div>
				<div style={{ marginBottom: 20 }}>
					<text
						style={{
							color: "#f5f5f5",
							fontSize: 24,
							fontWeight: "bolder",
						}}
					>
						Register Account
					</text>
				</div>
				<Box
					component="form"
					sx={{
						"& > :not(style)": { m: 1, width: "25ch" },
					}}
					noValidate
					autoComplete="off"
				>
					<div
						style={{
							flexDirection: "column",
							margin: "auto",
							marginBottom: 1,
							width: "100%",
						}}
					>
						<TextField
							id="outlined-basic"
							label="first name"
							variant="filled"
							margin="normal"
							size="small"
							sx={{
								input: {
									color: red[50],
								},
							}}
						></TextField>{" "}
						<TextField
							id="outlined-basic"
							label="last name"
							variant="filled"
							margin="normal"
							size="small"
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
							marginBottom: 10,
							width: "70%",
						}}
					>
						<TextField
							id="outlined-basic"
							label="username"
							variant="filled"
							margin="normal"
							fullWidth="300 px"
							size="small"
							sx={{
								input: {
									color: red[50],
								},
							}}
						/>
						<TextField
							id="outlined-basic"
							label="email"
							variant="filled"
							margin="normal"
							fullWidth="300 px"
							size="small"
							sx={{
								input: {
									color: red[50],
								},
							}}
						/>
						<TextField
							id="outlined-basic"
							label="password"
							variant="filled"
							margin="normal"
							fullWidth="300 px"
							size="small"
							sx={{
								input: {
									color: red[50],
								},
							}}
						/>
						<TextField
							id="outlined-basic"
							label="phone number"
							variant="filled"
							margin="normal"
							fullWidth="300 px"
							size="small"
							sx={{
								input: {
									color: red[50],
								},
							}}
						/>
						<TextField
							id="outlined-basic"
							label="city"
							variant="filled"
							margin="normal"
							fullWidth="300 px"
							size="small"
							sx={{
								input: {
									color: red[50],
								},
							}}
						/>
						<TextField
							id="outlined-basic"
							label="address"
							variant="filled"
							margin="normal"
							fullWidth="300 px"
							size="small"
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
							marginTop: 10,
						}}
					>
						Create Account
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
						Have an account ?
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
						Back to Login
					</Button>
				</div>
			</div>
		</>
	);
}

export default Register;
