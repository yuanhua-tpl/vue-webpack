const Mock = require('mockjs')

module.exports = function(compiler, params) {
  const templates = params.templates || {}
  const middleware = function(req, res, next) {
    let template = '',
      _uri = '',
      timeout = 0
    // 匹配 url
    for (let uri in templates) {
      let re = new RegExp(uri)
      if (re.test(req.url)) {
        _uri = uri
        template = templates[uri]
        break
      }
    }
    //
    if (template) {
      let params = ''
      if (typeof template === 'function') {
        req.on('data', function(chunk) {
          params += chunk
        })
        req.on("end", function() {
          // if (params !== '') params = JSON.parse(params)
          template = template(params)
        })
      }

      if (typeof params.timeout === 'function') timeout = params.timeout()
      // 请求延时
      setTimeout(function() {
        res.json(Mock.mock(template))
        next()
      }, timeout)
    } else {
      next()
    }
  }
  return middleware
}
