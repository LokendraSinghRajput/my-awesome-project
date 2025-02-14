import { useState } from 'react'

const BlackSection = () => {
    const [activeSection, setActiveSection] = useState('Complete Body');
    const navItems = ['Complete Body', 'Front', 'Cabin', 'Trunk', 'Exterior'];
  return (
    <>
       <section className="bg-black text-white py-5 min-vh-100 passenger-vehiclew-section-main">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-light mb-2">
              Evolving the drive with <span className="fw-normal">360-degree</span>
            </h2>
            <p className="h4 fw-light">comprehensive solutions</p>
          </div>

          <div className="row mb-5">
            <div className="col-md-6">
              <div className="border-start border-white ps-4 mb-4">
                <h3 className="h4">Passenger Vehicles</h3>
                <p className="text-white-50">
                  Revving up Nonwoven innovation from interior to exterior.
                </p>
              </div>

              <div className="border-start border-secondary ps-4">
                <h3 className="h4 text-secondary">Commercial vehicles</h3>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-4 tabs-itme-main">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`btn btn-link ${activeSection === item ? 'text-white' : 'text-secondary'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlackSection
