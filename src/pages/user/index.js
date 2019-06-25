import Link from 'umi/link';

export default () => {
  // to 不加query不会导致栈溢出
  return <Link to={{ pathname: '/list' }}>跳转到list</Link>;
};
