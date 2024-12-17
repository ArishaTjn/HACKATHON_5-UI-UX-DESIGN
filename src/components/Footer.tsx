import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-800">
        {/* Newsletter Section */}
        <div className="bg-black text-white py-6">
          <div className="container mx-auto text-center">
            <h2 className="text-xl font-bold">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
            <div className="flex justify-center mt-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button className="px-6 py-2 bg-white text-black font-semibold rounded-r-lg">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
  
        {/* Footer Links Section */}
        <div className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg">SHOP.CO</h3>
            <p className="mt-2 text-sm">
              We have clothes that suit your style and which you&apos;re proud to wear. From women to men.
            </p>
            <div className="flex mt-4 space-x-4">
              {/* Social Icons */}
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
  
          {/* Links */}
          <div>
            <h4 className="font-bold text-lg">COMPANY</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-bold text-lg">HELP</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-bold text-lg">RESOURCES</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to - Blog</a></li>
              <li><a href="#">YouTube Playlist</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="bg-gray-200 py-4">
          <div className="container mx-auto text-center text-sm">
            Shop.co © 1995-2024 | All Rights Reserved.
            
          </div>
        </div>
      </footer>
    );
  }
  