
import React from 'react'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-inner text-center">
					<p>© {new Date().getFullYear()} Your Store. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
