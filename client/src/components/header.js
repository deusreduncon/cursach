import { Link } from "react-router-dom";


function Header() {
  let token = localStorage.getItem('token')

  let user = JSON.parse(localStorage.getItem('user'))

  const clickExit = () => {
    window.location.replace('/auth')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  return (
    <div>
        {token && 
            <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" style={{ color: '#fff' }}>
              <div className="col-md-3 mb-2 mb-md-0">
                <Link to="/home" className="d-inline-flex  text-decoration-none" style={{ color: '#fff' }}>
                  Promotion
                </Link>
              </div>
              <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><Link to='/zapros' className="nav-link px-2 " style={{ color: '#fff' }}>Запрос</Link></li>
              </ul>
              <div className="col-md-3 text-end">
                {user.role === 2 && <>Admin</>}
                <button type="button" className="btn btn-outline-primary me-2" style={{ backgroundColor: '#6c757d', borderColor: '#6c757d', color: '#fff' }} onClick={() => clickExit()}>Выход</button>
              </div>
            </header>
          </div>
        }
      
    </div>
  );
}

export default Header;
