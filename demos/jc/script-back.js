window.onload = () => {
	const scene = document.querySelector("a-scene");

	fetch("../../assets/build.json")
		.then((v) => {
			return v.json();
		})
		.then(({ data }) => {
			console.log(data);
			const _data = data
				.filter((v) => !!v.geometry)
				.forEach((featrue) => {
					// const { coords } = p;
					// const { longitude, latitude } = coords;
					const position = featrue.geometry.coordinates.flat(10);
					console.log(position);
					const [_lng, _lat] = position;
					// console.log(longitude, latitude);
					const placeText = document.createElement("a-box");
					// placeText.setAttribute(
					// 	"gps-projected-entity-place",
					// 	`latitude: ${latitude}; longitude: ${longitude};`,
					// );
					// placeText.setAttribute("position", "0 30 0");
					// placeText.setAttribute("title", featrue.properties.building_name);
					placeText.setAttribute("material", "color: yellow");
					placeText.setAttribute("height", featrue.properties.height * 0.05);
					placeText.setAttribute("change-color-on-hover", "color: blue");
					const text = document.createElement("a-text");
					text.setAttribute("id", featrue.properties.building_name);
					text.setAttribute("value", featrue.properties.building_name);
					text.setAttribute("align", "center");
					text.setAttribute("color", "#FFF");
					text.setAttribute("visible", "#false");
					text.setAttribute("position", "#0 -0.55 0.55");
					text.setAttribute("geometry", "primitive: plane; width: 1.75");
					text.setAttribute("material", "color: #333");

					// placeText.setAttribute("scale", "0.1 0.1 0.1");
					placeText.setAttribute(
						"position",
						`${(_lng - 121.62) * 2000} ${featrue.properties.height * 0.1 * 0.5} ${
							(_lat - 29.87) * 2000
						}`,
					);

					// placeText.addEventListener("loaded", () => {
					// 	window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
					// });

					scene.appendChild(placeText);
					// });
				});
		});
};
