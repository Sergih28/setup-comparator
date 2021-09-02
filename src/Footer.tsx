const Footer = () => {
  const copyrightYears = () => {
    const firstYear = new Date(new Date().setFullYear(2019, 3, 6)).getFullYear()
    const todayYear = new Date().getFullYear()
    if (firstYear !== todayYear) return ` ${firstYear} - ${todayYear}`
    return ` ${firstYear}`
  }

  return (
    <>
      <footer className="page-footer">
        <div className="footer-copyright">
          <div
            className="container"
            style={{ textAlign: 'center' }}
            id="footer-text"
          >
            Copyright © {copyrightYears()}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
