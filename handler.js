'use strict';

module.exports.hello = async (event, context, callback) => {
  const { first, second } = event;
  const added = first + second;
  const response =  {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello there!"
    }),
  };

  callback(null, response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
