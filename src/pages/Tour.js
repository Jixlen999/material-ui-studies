import {
	BottomNavigation,
	BottomNavigationAction,
	Box,
	Paper,
	Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import CustomizedAccordions from "../components/Accordian";
import ImageCollage from "../components/ImageCollage";
import ModalComponent from "../components/Modal";

const Tour = () => {
	return (
		<Container sx={{ width: 900 }}>
			<Typography variant="h3" component="h1" mt={3}>
				Explore the World
			</Typography>
			<Box mt={3} sx={{ display: "flex" }}>
				<img
					src="https://globalholidaylocations.com/wp-content/uploads/2022/05/Travel.jpg"
					alt="travel"
					height={325}
				/>
				<ImageCollage />
			</Box>
			<Box>
				<Typography variant="h6" component="h4" mt={3}>
					About this trip
				</Typography>
				<Typography variant="paragraph" component="p" mt={3}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Labore nisi eaque tenetur fuga impedit odio esse voluptas
					ipsum voluptate nobis, iusto repudiandae voluptatibus animi
					illo modi tempore autem nam a consectetur eius facere!
					Delectus quo atque itaque aperiam consequuntur in?
				</Typography>
			</Box>
			<Box mb={10}>
				<Typography variant="h6" component="h4" mt={3} mb={2}>
					Frequently Asked Question
				</Typography>
				<CustomizedAccordions />
			</Box>
			<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
				<BottomNavigation>
					<ModalComponent />
				</BottomNavigation>
			</Paper>
		</Container>
	);
};

export default Tour;
