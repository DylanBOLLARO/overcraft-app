import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ipcRenderer } from "electron";
import Image from "next/image";
import { colorName } from "../../constants/main";
import Layout from "./components/Layout";

function Home() {
	const router = useRouter();
	useEffect(() => {
		ipcRenderer.on("num7", () => {
			router.push({
				pathname: "/play/OpponentRace",
				query: { racePlayed: "t" },
			});
		});

		ipcRenderer.on("num8", () => {
			router.push({
				pathname: "/play/OpponentRace",
				query: { racePlayed: "z" },
			});
		});

		ipcRenderer.on("num9", () => {
			router.push({
				pathname: "/play/OpponentRace",
				query: { racePlayed: "p" },
			});
		});

		ipcRenderer.on("num5", () => {
			ipcRenderer.send("show-settings");
		});

		return () => {
			ipcRenderer.removeAllListeners("num7");
			ipcRenderer.removeAllListeners("num8");
			ipcRenderer.removeAllListeners("num9");
			ipcRenderer.removeAllListeners("num5");
		};
	}, []);

	const buildOrder = [
		{ name: "terran" },
		{ name: "zerg" },
		{ name: "protoss" },
	];

	return (
		<Layout title={"Sir, choose your race !"}>
			<div className="flex justify-between gap-2 overflow-hidden">
				{buildOrder.map((category, index) => (
					<div
						className="flew-row relative flex w-full cursor-default items-center justify-around rounded-lg bg-black/50 p-3"
						key={category.name}
					>
						<p className={`text-lg ${colorName[index]}`}>
							{category.name}
						</p>
						<Image
							src={`/images/${category.name}Logo.png`}
							width={32}
							height={32}
							alt={category.name}
						/>
						<div className="absolute -z-10 opacity-25 blur-lg">
							<Image
								src={`/images/${category.name}Logo.png`}
								width={128}
								height={128}
								alt={category.name}
							/>
						</div>
					</div>
				))}
			</div>
		</Layout>
	);
}

export default Home;
