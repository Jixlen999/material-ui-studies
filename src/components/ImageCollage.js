import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}

export default function ImageCollage() {
	return (
		<ImageList
			sx={{
				width: 300,
				height: 325,
				marginLeft: 1,
				OverflowStyle: "none",
			}}
			variant="quilted"
			cols={4}
			rowHeight={121}
		>
			{itemData.map((item) => (
				<ImageListItem
					key={item.img}
					cols={item.cols || 1}
					rows={item.rows || 1}
				>
					<img
						{...srcset(item.img, 121, item.rows, item.cols)}
						alt={item.title}
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
}

const itemData = [
	{
		img: "https://cairowestmag.com/wp-content/uploads/2021/05/7-Add-On-Benefits-You-Can-Get-On-Your-Travel-Insurance-1-1024x683.jpg",
		title: "Breakfast",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2022-05/f56990.jpg?itok=K9X5VFWf",
		title: "Burger",
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
		title: "Hats",
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		title: "Honey",
		author: "@arwinneil",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
		title: "Basketball",
	},
	{
		img: "https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg",
		title: "Fern",
	},
	{
		img: "https://www.traveloffpath.com/wp-content/uploads/2022/05/Travel-Demand-is-Back-to-Pre-Pandemic-Levels-and-What-it-Means-To-You-This-Summer.jpg",
		title: "Mushrooms",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://www.originaltravel.co.uk/img/en/header/mobile/plan-a-gratification.jpg",
		title: "Tomato basil",
	},
	{
		img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
		title: "Sea star",
	},
	{
		img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
		title: "Bike",
		cols: 2,
	},
];
