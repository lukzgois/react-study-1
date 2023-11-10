import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="#">
          <img src='/images/fb.png' />
        </a>

        <a href="#">
          <img src='/images/tw.png' />
        </a>

        <a href="#">
          <img src='/images/ig.png' />
        </a>
      </div>

      <div>
        <img src='/images/logo.png' />
      </div>

      <div>
        Desenvolvido por Alura.
      </div>
    </footer>
  )
}

export default Footer
