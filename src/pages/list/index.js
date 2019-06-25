import Link from 'umi/link';

export default () => {
  // to加上query会导致栈溢出
  return <Link to={{ pathname: '/user', query: { a: 1 } }}>跳转到user</Link>;
};
