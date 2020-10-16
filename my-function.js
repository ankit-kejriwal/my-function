exports.handler = async (event) => {
    // TODO implement
    if(event.httpMethod === 'GET') {
        let key = "hello";
        if(event && event.queryStringParameters && event.queryStringParameters.keyword){
            key = event.queryStringParameters.keyword
        }
        let responseBody = {
            message: "Ankit Kejriwal says " + key
        };
        return {
            statusCode :200,
            body: JSON.stringify(responseBody)
        }
    }
};
