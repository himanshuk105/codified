import { FaFacebook } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer>
      <div>
        <div className="w-40 h-20">Codified</div>
      </div>
      <div>
        <FaFacebook />
        <FaSquareXTwitter />
        <FaInstagram />
        <FaYoutube />
      </div>
      <div>
        <h2>Quick Links</h2>
        <ul>
          <li>Home</li>
          <li>About</li> <li>Contact</li>
          <li>Services</li>
          <li>Insights</li>
          <li>Industries</li>
        </ul>
      </div>
    </footer>
  )
}
