import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <div className='bg-body-tertiary'>
            <div className='container'>
        <nav className="navbar navbar-expand-lg ">
  
    <Link className='navbar-brand' to="/">Student Management System</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li className="nav-item">
          <Link className='nav-link' to="/">Students</Link>
        </li>
        <li className="nav-item">
          <Link to="/class" className='nav-link'>Classes</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to="/school">School</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to="/teachers">Teachers</Link>
        </li>
      </ul>
      </div>
    
  
</nav>
</div>
        </div>
    )
}
export default Navbar;