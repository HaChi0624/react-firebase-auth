import React from 'react'

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('登録')
  }

  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>メールアドレス</label>
          <input id='email' name='email' type='email' placeholder='email' />
        </div>
        <div>
          <label htmlFor='password'>パスワード</label>
          <input id='password' name='password' type='password' />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
    
  )
}

export default SignUp