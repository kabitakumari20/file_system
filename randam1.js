const fs = require('fs')

fs.readFile('README.md', (err, data) => {
	if (err) {
		console.error(err)
		return
	}

	console.log(data.toString())
})