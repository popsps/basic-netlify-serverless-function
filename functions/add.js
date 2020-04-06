exports.handler = function (event, context, callback) {
  console.log(context)
  // const {a, b} = context.clientContext
  const data = JSON.parse(event.body)
  const {a, b} = data
  const c = parseInt(a) + parseInt(b)
  console.log('-----------------',c,'-----------------')
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      c: c
    })
  });
}