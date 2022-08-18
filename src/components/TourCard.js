import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";
import styles from "./TourCard.module.css";
import { Link } from "react-router-dom";

const theme = createTheme({
	components: {
		MuiTypography: {
			variants: [
				{
					props: {
						variant: "body2",
					},
					style: {
						fontSize: 11,
					},
				},
				{
					props: {
						variant: "body3",
					},
					style: {
						fontSize: 9,
					},
				},
			],
		},
	},
});

const TourCard = ({ tour }) => {
	return (
		<Grid item xs={3} className={styles.tourCard}>
			<Link to={"/about"} style={{ textDecoration: "none" }}>
				<ThemeProvider theme={theme}>
					<Paper elevation={3}>
						<img
							className="img"
							src={tour.image}
							alt="niagara falls"
						/>
						<Box px={1}>
							<Typography variant="subtitle2" component="h2">
								{tour.name}
							</Typography>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<AccessTime sx={{ width: 13 }} />
								<Typography
									variant="body2"
									component="p"
									ml={0.5}
								>
									{tour.duration} hours
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
								}}
								mt={3}
							>
								<Rating
									name="read-only"
									size="small"
									value={tour.rating}
									precision={0.5}
									readOnly
								/>
								<Typography
									variant="body2"
									component="p"
									ml={0.5}
								>
									{tour.rating}
								</Typography>
								<Typography
									variant="body3"
									component="p"
									ml={1.5}
								>
									({tour.numberOfReviews} reviews)
								</Typography>
							</Box>
							<Box>
								<Typography variant="h6" component="h3">
									From ${tour.price}
								</Typography>
							</Box>
						</Box>
					</Paper>
				</ThemeProvider>
			</Link>
		</Grid>
	);
};

export default TourCard;
