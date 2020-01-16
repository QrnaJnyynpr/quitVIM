function saveOptions(e) {
	e.preventDefault();
	browser.storage.sync.set({
		new_word: document.querySelector("#new_word").value
	});
}

function restoreOptions() {
	function setCurrentChoice(result) {
		document.querySelector("#new_word").value = result.new_word || "Vim";
	}

	var getting = browser.storage.sync.get("new_word");
	getting.then(setCurrentChoice);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);