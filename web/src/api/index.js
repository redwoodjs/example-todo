const requireDir = require('webpack-requiredir')
const api = requireDir(require.context('.', true, /\.js$/))

export default api
