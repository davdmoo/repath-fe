import React, { useState, Component } from "react";
import NavbarContent from "../components/NavbarContent";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";

function EditProfile() {
	return (
		<>
			<div style={{ height: "125vh" }}>
				<NavbarContent />
				<Stack spacing={1} className="edit-profile-container">
					<div
						className="edit-profile-picture"
						style={{
							flex: 1,
							flexDirection: "column",
						}}
					>
						<Avatar
							alt="Remy Sharp"
							src="/static/images/avatar/1.jpg"
							sx={{
								mt: 5,
								width: 100,
								height: 100,
								mx: "auto",
							}}
						/>
					</div>
					<Stack
						spacing={1}
						direction="column"
						className="edit-profile-field"
						style={{
							marginTop: "20px",
							height: "90vh",
						}}
					>
						<Box
							sx={{
								"& > :not(style)": { m: 1, width: "25ch" },
								flexDirection: "column",
								alignSelf: "center",
							}}
							noValidate
							autoComplete="off"
						>
							<TextField
								name="firstName"
								label="first name"
								variant="filled"
								size="small"
								sx={{
									input: {
										color: red[50],
									},
								}}
							></TextField>

							<TextField
								name="lastName"
								label="last name"
								variant="filled"
								size="small"
								sx={{
									input: {
										color: red[50],
									},
								}}
							></TextField>
							<Box
								sx={{
									"& > :not(style)": { width: "52ch" },
									flexDirection: "column",
									alignSelf: "center",
								}}
								noValidate
								autoComplete="off"
							>
								<TextField
									name="imageUrl"
									label="profile picture url"
									variant="filled"
									margin="normal"
									size="small"
									sx={{
										input: {
											color: red[50],
										},
									}}
								></TextField>
								<TextField
									name="headerUrl"
									label="header background url"
									variant="filled"
									margin="normal"
									size="small"
									sx={{
										input: {
											color: red[50],
										},
									}}
								></TextField>
								<TextField
									name="username"
									label="username"
									variant="filled"
									margin="normal"
									size="small"
									sx={{
										input: {
											color: red[50],
										},
									}}
								/>
								<TextField
									type="email"
									name="email"
									label="email"
									variant="filled"
									margin="normal"
									size="small"
									sx={{
										input: {
											color: red[50],
										},
									}}
								/>
								<TextField
									name="password"
									type="password"
									label="password"
									variant="filled"
									margin="normal"
									size="small"
									sx={{
										input: {
											color: red[50],
										},
									}}
								/>
								<TextField
									name="phoneNumber"
									label="phone number"
									variant="filled"
									margin="normal"
									size="small"
									sx={{
										input: {
											color: red[50],
										},
									}}
								/>
								<TextField
									name="city"
									label="city"
									variant="filled"
									margin="normal"
									size="small"
									sx={{
										input: {
											color: red[50],
										},
									}}
								/>
							</Box>
							<Button
								variant="contained"
								color="error"
								style={{
									width: 200,
								}}
							>
								Edit
							</Button>
						</Box>
					</Stack>
				</Stack>
			</div>
		</>
	);
}

export default EditProfile;
