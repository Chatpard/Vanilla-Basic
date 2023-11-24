const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
<<<<<<< HEAD
    route: '{name}',
    handler: async (request, context) => {
        //context.log(`Http function processed request for url "${request.url}"`);

        //const name = request.query.get('name') || await request.text() || 'world';

        return {
            jsonBody: { "message": `Hello, ${request.params.name}` }
        };
    }
});
=======
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
    }
});
>>>>>>> 08b252a1a803f77b19c16126ad6e7545123ef509
