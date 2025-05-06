import "./signup.css"; 
import { Navigate, useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();

  const take = () => {
    navigate('/Jobseeker')
  };



  return (
    <div className="login-container">
      <h2 className="login-title">SignUp</h2>
      <form className="login-form">
        <div>
        <label>Enter your FirstName</label>
        <input type="text" id="Firstname" placeholder="Enter your FirstName" required />

        <label>Enter your LastName</label>
        <input type="text" id="Lastname"placeholder="Enter your LastName" required />

          <label>Enter your Mail ID</label>
          <input type="email" id="email" placeholder="Enter your email" required />
          <label>Enter your Mobile 📲📞 number</label>
          <input type="number" id="number" placeholder="Enter your Mobile number" required />
        </div>
        <div>
          
          <label>Upload your cover 📂letter/resume</label>
          <input type="file" id="resume"required />

          <label>Upload your cover 📷 photo</label>
          <input type="file" id="photo"required />
          <label>Enter your password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <label>Re-Enter your password</label>
          <input type="password" id="password" placeholder="Re-Enter your password" required />
        </div>
        
        <button type="submit" className="login-button" onClick={take}>SignUp</button>
     
      </form>

    </div>
    
  );
};

export default SignUp;
