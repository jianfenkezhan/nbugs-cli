export default {
  path: 'demo',
  component: require('../layouts/DemoLayout'),
  indexRoute: { onEnter: (nextState, replace) => replace('/demo/one') },
  childRoutes: [{
    path: 'one',
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        cb(null, require('../components/demo-one/index'))
      })
    },
  }],
}