import React from 'react'
import { withRouter } from 'react-router-dom'

class Page404 extends React.Component {
    render() {
        return (
            <section className="content">
                <div className="error-page">
                <h2 className="headline text-yellow"> 404</h2>
        
                <div className="error-content">
                    <h3><i className="fa fa-warning text-yellow"></i> Oops! Page not found.</h3>
                    <p>
                        We could not find the page you were looking for.
                        Meanwhile, you may <a href="/pocetna">return to dashboard</a> .
                    </p>
                </div>
                </div>
          </section>
        )
    }
}

export default withRouter(Page404)