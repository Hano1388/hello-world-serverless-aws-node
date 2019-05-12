'use strict';

module.exports.hello = async (event, context, callback) => {

  // const response =  {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: "Hello there!"
  //   }),
  // };

  // callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

  // console.log(event.pathParameters);

  const reply = `Hello ${event.pathParameters.name}`;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: reply
    })
  };

  callback(null, response);
  
};
