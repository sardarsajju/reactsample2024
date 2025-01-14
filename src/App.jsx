const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Sample Routing App</h1>
          </div>
        </div>
        <nav className="row navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" >Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" >Home</a>
                </li>
                <li className="nav-item"> <a className="nav-link" >Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >User</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  )
}

export default App;

