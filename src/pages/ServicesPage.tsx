export function ServicesPage() {
  return (
    <div className="services-page">
      <style>
        {`
   

        /* Header */
        .header {
          background: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          top: 0;
          z-index: 100;
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e40af;
        }

        .nav {
          display: flex;
          gap: 32px;
        }

        .nav a {
          color: #334155;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .nav a:hover {
    background-color: var(--color-green-600);        }

        .header-cta {
    background-color: var(--color-green-600);          color: white;
          padding: 10px 24px;
          border-radius: 6px;
          border: none;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }

     
        .hero h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 12px;
          letter-spacing: -1px;
        }

        .hero .subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          margin-bottom: 16px;
          opacity: 0.95;
        }

        .hero .description {
          font-size: 1.05rem;
          max-width: 700px;
          margin: 0 auto 24px;
          opacity: 0.9;
        }

        .hero .badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .container-sm {
          padding: 50px 20px;
        }

        .section-title {
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 32px;
          color: #1e293b;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 24px;
        }

        .card {
          background: white;
          padding: 28px;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .card-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          font-size: 26px;
        }

        .icon-blue { background: #dbeafe; color: #1e40af; }
        .icon-green { background: #d1fae5; color: #059669; }
        .icon-purple { background: #e9d5ff; color: #7c3aed; }

        .card h3 {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #1e293b;
        }

        .card p {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .bg-gray {
          background: #f8fafc;
        }

        .risk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 14px;
          margin-bottom: 28px;
        }

        .risk-item {
          display: flex;
          align-items: flex-start;
          background: white;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .risk-icon {
          width: 18px;
          height: 18px;
          margin-right: 12px;
          flex-shrink: 0;
          color: #ef4444;
          margin-top: 2px;
        }

        .callout {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
          padding: 28px;
          border-radius: 12px;
          text-align: center;
          font-size: 1.15rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .feature-list {
          list-style: none;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
          font-size: 1rem;
        }

        .check-icon {
          width: 22px;
          height: 22px;
          color: #10b981;
          margin-right: 12px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .highlight-box {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: white;
          padding: 40px;
          border-radius: 12px;
          text-align: center;
        }

        .highlight-box .main {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .highlight-box .accent {
          font-size: 1.5rem;
          font-weight: 700;
          color: #60a5fa;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 14px;
        }

        .service-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #2563eb;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          transition: all 0.2s ease;
        }

        .service-card:hover {
          border-left-width: 6px;
          transform: translateX(4px);
        }

        .service-card p {
          font-weight: 500;
          color: #334155;
          font-size: 0.95rem;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 28px;
          margin-bottom: 48px;
        }

        .benefit-item {
          text-align: center;
        }

        .benefit-icon {
          font-size: 2.75rem;
          margin-bottom: 10px;
        }

        .benefit-text {
          font-weight: 600;
          color: #334155;
          font-size: 0.9rem;
        }

        .cta-section {
          background: #10b981;
          color: white;
          padding: 48px 32px;
          border-radius: 16px;
          text-align: center;
        }

        .cta-section .cta-main {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .cta-section .cta-sub {
          font-size: 1.75rem;
          font-weight: 700;
        }

        .footer {
          background: #1e293b;
          color: white;
          padding: 52px 20px;
          text-align: center;
        }

        .footer h3 {
          font-size: 1.85rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .footer p {
          font-size: 1.05rem;
          opacity: 0.9;
          margin-bottom: 24px;
        }

        .btn-primary {
          background: #10b981;
          color: white;
          padding: 14px 36px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #059669;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(5, 150, 105, 0.3);
        }

        @media (max-width: 768px) {
          .nav { display: none; }
          .hero h1 { font-size: 2.25rem; }
          .hero .subtitle { font-size: 1.15rem; }
          .section-title { font-size: 1.85rem; }
          .features-grid { grid-template-columns: 1fr; }
          .benefits-grid { 
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .services-grid { grid-template-columns: 1fr; }
          .container { padding: 40px 20px; }
          .container-sm { padding: 35px 20px; }
        }
      `}</style>

 {/* Hero Section */}
      {/* Why Vietnam Section */}
      <div className="container container-sm" id="why-vietnam">
        <h2 className="section-title">Why Vietnam?</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon icon-blue">🗺️</div>
            <h3>Strategic Diversification</h3>
            <p>A strategic supply chain diversification under China +1</p>
          </div>
          
          <div className="card">
            <div className="card-icon icon-green">💰</div>
            <h3>Cost-Competitive</h3>
            <p>Cost-competitive manufacturing with scalable capacity</p>
          </div>
          
          <div className="card">
            <div className="card-icon icon-purple">✓</div>
            <h3>Quality Standards</h3>
            <p>Established export suppliers aligned with international packaging standards</p>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="bg-gray">
        <div className="container container-sm">
          <h2 className="section-title">Why Work With Us?</h2>
          <p style={{fontSize: '1.05rem', color: '#334155', marginBottom: '24px'}}>
            Overseas sourcing often creates operational risk — not just pricing risk.
          </p>
          
          <div className="risk-grid">
            <div className="risk-item">
              <svg className="risk-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>Inconsistent production quality</span>
            </div>
            <div className="risk-item">
              <svg className="risk-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>Resin or thickness deviation</span>
            </div>
            <div className="risk-item">
              <svg className="risk-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>Print alignment and tolerance issues</span>
            </div>
            <div className="risk-item">
              <svg className="risk-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>Limited production visibility</span>
            </div>
            <div className="risk-item">
              <svg className="risk-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>Cost adjustments after approval</span>
            </div>
            <div className="risk-item">
              <svg className="risk-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>Over-dependence on a single supplier</span>
            </div>
          </div>
          
          <div className="callout">
            We reduce these risks before they impact your margin or customer commitments.
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="container container-sm">
        <h2 className="section-title">What Makes Us Different</h2>
        <div className="features-grid">
          <ul className="feature-list">
            <li className="feature-item">
              <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>We are independent from any single factory.</span>
            </li>
            <li className="feature-item">
              <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>We benchmark cost across multiple suppliers.</span>
            </li>
            <li className="feature-item">
              <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>We align production specifications with approved standards.</span>
            </li>
            <li className="feature-item">
              <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>We monitor timeline and flag risks early.</span>
            </li>
            <li className="feature-item">
              <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>We maintain sourcing leverage for you.</span>
            </li>
          </ul>
          
          <div className="highlight-box">
            <p className="main">Factories protect production capacity.</p>
            <p className="accent">We protect your sourcing position.</p>
          </div>
        </div>
      </div>

      {/* How We Support */}
      <div className="bg-gray" id="services">
        <div className="container container-sm">
          <h2 className="section-title">How We Support Your Operations</h2>
          <div className="services-grid">
            <div className="service-card"><p>Supplier screening & capability assessment</p></div>
            <div className="service-card"><p>Technical specification alignment</p></div>
            <div className="service-card"><p>Independent cost benchmarking</p></div>
            <div className="service-card"><p>Sample coordination & approval matching</p></div>
            <div className="service-card"><p>Production follow-up & reporting</p></div>
            <div className="service-card"><p>Issue resolution before shipment</p></div>
            <div className="service-card"><p>Export coordination to shipment</p></div>
          </div>
        </div>
      </div>

      {/* What This Means For You */}
      <div className="container container-sm" id="benefits">
        <h2 className="section-title">What This Means For You</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">💰</div>
            <p className="benefit-text">Stable cost structure</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <p className="benefit-text">Controlled product consistency</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🔧</div>
            <p className="benefit-text">Reduced operational disruption</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🔄</div>
            <p className="benefit-text">Backup sourcing options</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🇻🇳</div>
            <p className="benefit-text">Local representation in Vietnam</p>
          </div>
        </div>
        
        <div className="cta-section">
          <p className="cta-main">You stay focused on market growth.</p>
          <p className="cta-sub">We manage sourcing control in Vietnam.</p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="footer">
        <h3>Ready to Secure Your Vietnam Supply Chain?</h3>
        <p>Let's discuss how we can support your sourcing needs.</p>
        <button className="btn-primary">Contact Us</button>
      </div>
    </div>
  );
}