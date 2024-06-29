

     <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">NavBar React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mx-auto">
          {navlinks.map((link) => {
            return (
              <div className="nav-link" key={link.id}>
                <NavLink to={link.path}  className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "active" : ""
                  }end>{link.text}</NavLink>
              </div>

            );
          })}
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>