const app = require('express')()
const ethers = require('ethers')
const utils = ethers.utils

const possibleStatuses = [200, 404, 500]
const id = 1

app.get('/status', (req,res) => {

		console.log(req.headers.host)
		// console.log(req.socket)

		const index = Math.floor(Math.random() * possibleStatuses.length)

		const status = `${req.headers.host},${possibleStatuses[index]}`

		console.log(status)

		const bytes32 = utils.formatBytes32String(status)

		console.log(`bytes: ${bytes32}`)

		res.send({STATUS: status}) 

	})
	.listen(80, () => console.log('listening'))