import { useAuthContext  } from "../context/AuthContext"
import FirebaseAuth from "../handlers/auth";
const LogIn = () => {
  const handleLogin = async () => {
    try {
      const user = await FirebaseAuth.signIn();
      console.log('Logged in user:', user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <button type="button" className="btn btn-warning" onClick={handleLogin}>
      Login
    </button>
  );
};

const LogOut = () => {
  const { logout, currentUser } = useAuthContext;
  return(
   !!currentUser && (
    <button type="button" className="btn btn-danger" onClick={logout}>
       Logout
     </button>
     )
  );
 }

function Navigation() {
  return(
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    {/* remove all links except HOME */}
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">
        Home
      </a>
    </li>
  </ul>
  )
}

function SearchForm() {
  return(
    <form className="d-flex">
    <input
      className="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button className="btn btn-outline-success" type="submit">
      Search
    </button>
  </form>
  )
}

function Dropdown() {
  return( 
    
  <ul className="navbar-nav mb-2 mb-lg-0" >
  {" "}
  {/* remove ms-auto */}
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Login
    </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{right:0, left: 'auto'}}>
      <li>
        <a className="dropdown-item text-center" href="#">
          Profile
        </a>
      </li>
      <li><hr className="dropdown divider"/></li> 
      <li>
      <div className="d-flex justify-content-center">
        <LogIn />
        <LogOut />
      </div>
      </li>
    </ul>
  </li>
</ul>

)
}


function Navbar() {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        ⚡ Firestock
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Navigation />
        <SearchForm />
        <Dropdown />
  
      </div>
    </div>
    </nav>
    )
  }
  export default Navbar