import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Chip } from "@mui/material";
import { useRouter } from "next/router";
import { namesAndColors } from "../../../constants/main";

interface props {
	buildData: any;
}

export default function ActionAreaCardBuild({ buildData }: props) {
	const router = useRouter();

	return (
		<Card
			onClick={() => {
				console.log(
					"data of build data : " + JSON.stringify(buildData)
				);
				router.push({
					pathname: "/settings/Modify",
					query: {
						name: buildData.title,
						idBuild: buildData.id,
						buildData: JSON.stringify(buildData),
					},
				});
			}}
			sx={{
				width: 400,
				borderRadius: 2,
				padding: 1,
				color: "#e4e4e7",
				backgroundColor: "#09090b",
			}}
		>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={
						"https://img.freepik.com/premium-photo/abstract-mixed-shape-retro-vintage-color-style-background_176697-2700.jpg?w=360"
					}
					alt="green iguana"
					sx={{
						height: 150,
					}}
				/>
				<div className="m-2 flex flex-col">
					<div className="flex h-10 flex-row items-center justify-between">
						<h1 className="text-xl font-bold">
							{buildData?.title}
						</h1>
						<div className="flex items-center gap-2">
							<Chip
								sx={{
									color: "#18181b",
									fontSize: "18px",
									fontFamily: "arial",
									backgroundColor:
										namesAndColors[buildData?.playrace]
											?.color,
								}}
								label={
									namesAndColors[buildData?.playrace]?.name
								}
							/>
							<div className=" text-zinc-300">vs</div>
							<Chip
								sx={{
									color: "#18181b",
									fontSize: "18px",
									fontFamily: "arial",
									backgroundColor:
										namesAndColors[buildData?.versusrace]
											?.color,
								}}
								label={
									namesAndColors[buildData?.versusrace]?.name
								}
							/>
						</div>
					</div>
				</div>
			</CardActionArea>
		</Card>
	);
}
