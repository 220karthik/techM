import './frontpage.css'

import { Navigate, useNavigate } from 'react-router-dom';

function Frontpage()
{
    const navigate = useNavigate();

  const open = () => {
    navigate('/Login')
  };

  
    return(
        <div>
   <h1>Job Search Portal</h1>

<div>
    <img className="image" src="https://www.bizportals365.com/wp-content/uploads/2019/12/employee-onboarding.png"/>
    <center><button className='Dont' onClick={open}>Click To Continue</button></center><br></br>
<section> <h3 className='content'> 
    Job portal websites serve as online platforms connecting job seekers with employers, 
streamlining the recruitment process. They offer a variety of features, including job postings, application tracking, and candidate matching, benefiting both job seekers and hiring managers. Employers can centralize their recruitment efforts and reach a wider pool of talent, 
while job seekers can easily search for and apply to open positions. 
</h3>
</section>
</div>




        </div>
    );
}

export default Frontpage