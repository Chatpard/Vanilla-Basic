const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: '{name}',
    handler: async (request, context) => {
        //context.log(`Http function processed request for url "${request.url}"`);

        //const name = request.query.get('name') || await request.text() || 'world';

        return {
            jsonBody: { "message": `Helllo, ${request.params.name}` }
        };
    }
});
