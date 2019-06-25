export default {
  namespace: 'list',
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(() => {
        //这里写不会栈溢出
        dispatch({
          type: 'updateState',
          payload: {
            a: 1,
          },
        });
      });
    },
  },
};
