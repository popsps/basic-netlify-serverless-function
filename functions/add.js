exports.handler = function (event, context, callback) {
  console.log(context)
  const {a, b} = context.clientContext
  const c = parseInt(a) + parseInt(b)
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      c: c
    })
  });
}