import React from "react";
import Layout from "./components/Layout";
import { useRouter } from "next/router";
import ActionAreaCardMenu from "./components/ActionAreaCardMenu";

function Settings() {
	const router = useRouter();
	console.log(process.env.SUPERYETI_API);

	return (
		<Layout>
			<div className="m-3 flex flex-wrap justify-center gap-5">
				<ActionAreaCardMenu
					title={"Show your build"}
					link={
						"https://c4.wallpaperflare.com/wallpaper/310/317/123/starcraft-ii-4k-hd-latest-wallpaper-preview.jpg"
					}
					toDo={() => {
						router.push({
							pathname: "/settings/Show",
							query: {},
						});
					}}
				/>
				<ActionAreaCardMenu
					title={"Create your build"}
					link={
						"https://wallpapers.com/images/featured/tbrha3aoagau52xz.jpg"
					}
					toDo={() => {
						router.push({
							pathname: "/settings/Create",
							query: {},
						});
					}}
				/>

				<ActionAreaCardMenu
					title={"Import your build"}
					link={
						"https://www.s-ge.com/sites/default/files/styles/sge_header_lg/public/publication/images/e-commerce.jpg?itok=2T87UuIH"
					}
					toDo={() => {}}
				/>
			</div>
		</Layout>
	);
}

export default Settings;
