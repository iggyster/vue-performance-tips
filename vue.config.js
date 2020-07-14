module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-performance-tips/' : '/',
    configureWebpack: {
        output: {
            publicPath: process.env.NODE_ENV === 'production' ? '/vue-performance-tips/' : '/',
        }
    },
};