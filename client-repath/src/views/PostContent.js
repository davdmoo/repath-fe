import React, { useState, Component } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import NavbarContent from "../components/NavbarContent";

const Input = styled("input")({
	display: "none",
});

function PostContent() {
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
				<form>
					<Box
						sx={{
							marginTop: 1,
							border: 3,
							borderColor: "#f5f5f5",
							height: "34vh",
							backgroundColor: "#f5f5f5",
						}}
					>
						<TextField id="outlined-multiline-static" multiline fullWidth rows={10} label="Write something here..." />
						<label htmlFor="icon-button-file">
							<Input accept="image/*" id="icon-button-file" type="file" />
							<IconButton color="default" component="span">
								<PhotoCamera />
							</IconButton>
						</label>
					</Box>
				</form>
				<Stack direction="row" justifyContent="center">
					<Button
						variant="contained"
						color="error"
						style={{
							marginTop: 40,
							width: 200,
						}}
					>
						Post
					</Button>
				</Stack>
			</div>
		</>
	);
}

export default PostContent;
