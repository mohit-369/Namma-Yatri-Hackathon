import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand -md navbar-light pt-5 pb-4">
        <Link class="navbar-brand" to="/" ><h2>Namma Yatri</h2></Link>
        {/* toggle button for mobile nav */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/Booking">Book a ride</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Login">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Signup">
                Sign-up
              </Link>
            </li>
            <li class="nav-item d-md-none">
              <a class="nav-link" href="#pricing">
                Get in Touch
              </a>
            </li>
            <li class="nav-item ms-2 d-none d-md-inline">
              <a class="btn btn-secondary" href="https://play.google.com/store/apps/details?id=in.juspay.nammayatri&hl=en_IN&gl=US">
                Download App
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
{
  /* <nav class="navbar navbar-expand-md navbar-light pt-5 pb-4">
<div class="container-xxl">
  <!-- navbar brand / title -->
  <a class="navbar-brand" href="#intro">
    <span class="text-secondary fw-bold">
      <i class="bi bi-book-half"></i>
      Net Ninja Pro - the Book
    </span>
  </a>
  <!-- toggle button for mobile nav -->
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- navbar links -->
  <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#topics">About The Book</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#reviews">Reviews</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Get in Touch</a>
      </li>
      <li class="nav-item d-md-none">
        <a class="nav-link" href="#pricing">Pricing</a>
      </li>
      <li class="nav-item ms-2 d-none d-md-inline">
        <a class="btn btn-secondary" href="#pricing">buy now</a>
      </li>
      
    </ul>
  </div>
</div>
</nav> */
}
