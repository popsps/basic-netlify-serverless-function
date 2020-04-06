exports.handler = function (event, context, callback) {
  const {a, b} = context.clientContext
  console.log(context)
  callback(null, {
    statusCode: 200,
    body: a + b
  });
}