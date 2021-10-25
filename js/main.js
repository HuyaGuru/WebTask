function handleAddOnClick() {
	let classListX = document.getElementById("addPage").classList;
    let classListY = document.getElementById("showList").classList;

	if (classListX.contains("hidden")) {
		classListX.replace("hidden", "visible");
        document.getElementById("addButtonText").innerHTML = "Browse Movies"
        if (classListY.contains("d-f")) {
            classListY.replace("d-f", "hidden")
        }
	} else if (classListX.contains("visible")) {
		classListX.replace("visible", "hidden");
        document.getElementById("addButtonText").innerHTML = "Add a Movie"
        if (classListY.contains("hidden")) {
            classListY.replace("hidden", "d-f")
        }
	}

	document.getElementById("addPage").classList = classListX;
    document.getElementById("showList").classList = classListY;
}
