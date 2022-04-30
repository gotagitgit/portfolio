import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <section id="header">
      <header>
        <span className="image avatar">
          <img src="images/avatar.jpg" alt="" />
        </span>
        <h1 id="logo">Cyrus Penuliar</h1>
        <p>
          Software Engineer
          <br />
          Fullstack Developer
        </p>
      </header>
      <Navbar />
      <footer>
        <ul className="icons">
          <li>
            <a href="/" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="/" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="/" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="/" className="icon brands fa-github">
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="/" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </footer>
    </section>
  )
}
