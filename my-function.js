exports.handler = async (event) => {
    // TODO implement
    if(event.httpMethod === 'GET') {
        if(event && event.queryStringParameters && event.queryStringParameters.keyword){
            key = event.queryStringParameters.keyword
            let responseBody = {
                message: "Ankit Kejriwal says " + key
            };
            return {
                statusCode :200,
                body: JSON.stringify(responseBody)
            }
        } else {
            return {
                statusCode:400,
                body:JSON.stringify({error:"Keyword is missing, Please add keyword"})
           }
        }
        
        
    }
};
