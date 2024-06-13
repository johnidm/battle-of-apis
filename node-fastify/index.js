const os = require('os');

const hostname = os.hostname();


const fastify = require('fastify')({
    logger: true
})

const { HOST = '0.0.0.0', PORT = '8010' } = process.env;

fastify.get('/', async (request, reply) => {
    return {
        status: 'OK',
        hostname: hostname,
        application: 'node-fastify'
    }
})

fastify.listen({ host: HOST, port: parseInt(PORT, 10) }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})
