function Header(){
  return(
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top" style={{backgroundColor:"#2c3e50"}}>
          <div className="container-fluid">
            <a className="navbar-brand logo" href="javascript:void(0)">YOYO</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)" style={{color:"#1abc9c", fontWeight:"bold", borderBottom:"2px solid #1abc9c"}}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)" style={{color:"#ecf0f1", fontWeight:"bold"}}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)" style={{color:"#ecf0f1", fontWeight:"bold"}}>yoyo</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
export default Header