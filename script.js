function vim_replace(item) {
	var new_word = "Vim";
	if (item.new_word) {
		new_word = item.new_word;
	}
	document.body.innerHTML = document.body.innerHTML.replace(/Vim|vim|VIM/g, new_word);
}

var search = browser.storage.sync.get("new_word");
search.then(vim_replace);