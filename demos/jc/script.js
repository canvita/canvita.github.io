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
					const [_lng, _lat] = position;
					console.log(_lng, _lat);
					const placeText = document.createElement("a-box");

					placeText.setAttribute("material", "color: rgba(0,0,0,0)");
					placeText.setAttribute("height", featrue.properties.height * 0.05);
					placeText.setAttribute("change-color-on-hover", "color: blue");
					// placeText.setAttribute("scale", "15 15 15");

					placeText.setAttribute(
						"gps-entity-place",
						`longitude: ${_lng}; latitude: ${_lat};`,
					);

					scene.appendChild(placeText);
					// });
				});
		});
};
