import { useState } from 'react';
import './Login.css';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  
  

  const navigate = useNavigate();

  const stick = () => {
    navigate('/Signup')
  };

  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleSignup = () => {
    setIsSignup(!isSignup);
    setEmail('');
    setPassword('');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const isAdmin = email === 'karthiksolaisamy5@gmail.com' && password === 'Karthik#46';
    const isGmail = email.endsWith('@gmail.com');

    if (isAdmin) {
      navigate('/Admindash');
    } else if (isGmail) {
      const users = JSON.parse(localStorage.getItem('employees')) || [];
      const foundUser = users.find(user => user.email === email && user.password === password);

      if (foundUser) {
        navigate('/Jobseeker');
      } else {
        alert('User not found or wrong password. Please sign up first.');
      }
    } else {
      alert('Invalid credentials.');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email.endsWith('@gmail.com')) {
      alert('Only Gmail addresses are allowed.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('employees')) || [];
    const exists = users.some(user => user.email === email);

    if (exists) {
      alert('Account already exists. Please log in.');
      setIsSignup(false);
      return;
    }

    users.push({ email, password });
    localStorage.setItem('employees', JSON.stringify(users));
    alert('Signup successful! You can now log in.');
    setIsSignup(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">{isSignup ? 'Signup' : 'Login'}</h2>

      <form className="login-form" onSubmit={isSignup ? handleSignup : handleLogin}>
        <div>
          <label>Enter your Mail ID</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Enter your password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-button">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>
      </form>

      <button className="Dont" onClick={stick}>
        {isSignup
          ? 'Already have an account? Login here'
          : "Don't have an account? Sign up here"}
      </button>

      <img
        className="image"
        src="https://thumbs.dreamstime.com/b/businessman-african-man-lawyer-mentor-help-male-indian-client-computer-work-consult-customer-explain-online-men-business-270875146.jpg?w=992"
        alt="Login visual"
      />
    </div>
  );
};

export default LoginPage;
