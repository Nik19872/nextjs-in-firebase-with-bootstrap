import App from "../components/app"

export default () => (
    <App>
        <div className="container">
            <div className="row card" id="references">
                <h1>About Weby-tech</h1>
            </div>


            <style jsx>{`
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 600px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9B9B9B;
        }
        .card:hover {
          border-color: #067df7;
        }
        li {
          padding: 1em;
        }
        .container {
          margin-top: 10em;
        }
      `}</style>
        </div>
    </App>
)
