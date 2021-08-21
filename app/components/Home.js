import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  render () {
    return (
      <article>
        <div>
          <section className='text-section'>
            <h1>Welcome to CoreX!</h1>
            <h2>CoreX is an open-source digital platform for small businesses interested in supercharging financial tracking, analysis and transparency.</h2>
            <p>The Concept:</p>
            <ul>
              <li>Financial Tracking through Locally-Stored Data Management</li>
              <li>Financial and SEO Analysis Using 3 On-Device Machine Learning Models</li>
              <li>Company Transparency Through Built-In Finanial Reports and Built In Transparency Documents</li>
            </ul>
            <p>This enables full control of your small business on an external, yet decentralized, platform. During these difficult times, we want to make the process of financial security and company-wide management to be safe, quick and user-friendly. We utilize <a href="#">XDB</a>, our customized locally-stored database to ensure your financial data is YOURS. All data will be stored on your computer, and can be added/deleted at any time. We also provide the CoreX Analaysis Application, which analyzes your financial and SEO data and provides real-time on-device feedback. Finally, your team can produce transparency reports to share with the public and </p>
            <p>Directory:</p>
            <p>Inspiration:</p>
            <p>Resources:</p>
            </section>
        </div>
      </article>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Home)
