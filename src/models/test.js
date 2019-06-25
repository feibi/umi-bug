export default {
  namespace: 'test',
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
      return history.listen(location => {
        //这里写会栈溢出
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
