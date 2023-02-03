import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value);
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>メールアドレス</label>
          <input
            id="email" 
            name="email" 
            type="email" 
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor='password'>パスワード</label>
          <input 
            id="password"
            name="password"
            type="password"
            placeholder="password"
          />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>
          ユーザ登録<Link to={'/signup'}>はこちら</Link>から
        </div>
      </form>
    </div>
  )
}

export default Login