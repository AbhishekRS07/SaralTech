const navbar = () => {
  return ` <header>
  <nav>
      <ul class='nav-bar'>
          <li class='logo'><a href='./index.html'><img src='./images/logo.png'/></a></li>
          <input type='checkbox' id='check' />
          <span class="menu">
              <li><a href="./index.html">Home</a></li>
              <li><a href="./about.html">About</a></li>
              <li><a href="./contact.html">Contact</a></li>
              <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
          </span>
          <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
      </ul>
  </nav>
  </header>`;
};

export default navbar;
