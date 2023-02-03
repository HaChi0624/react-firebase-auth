import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

//現在の設定ではログインしているかどうかにかかわらずユーザ登録(/signup)、ログインページ(/login)にアクセスすることができます。
//ルートに対してはPriveateRouteを設定することでアクセス制限をしていましたがユーザ登録、ログインページについてはPublicRouteを設定することでログインしているユーザにはアクセスできないように設定を行います。
const PublicRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoute;