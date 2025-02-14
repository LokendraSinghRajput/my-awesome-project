
import { Linkedin,Globe2 } from 'lucide-react';
const Header = () => {
  return (
    <>

       <header className="py-3 border-bottom">
        <div className="container-fluid justify-content-between d-flex">
          <div className="d-flex justify-content-between align-items-center super-group-header-section">
            {/* Logo */}
            <img src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg" alt="Supreme Group" height="42" />
          </div>
          {/* Right side buttons */}
          <div className="flex items-center gap-4 header-right-section">
            <button className="bg-blue-400 text-blue px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition-colors super-group-btn-top">
              Contact Us
            </button>
            <a
              href="javascript:;"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600"
            >
              <Linkedin size={20} />
            </a>
            <button className="text-gray-600 flex items-center gap-1 language-btn-header" style={{ background: 'transparent' }}>
              <Globe2 size={20} />
              <span className="text-sm">ENG</span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
