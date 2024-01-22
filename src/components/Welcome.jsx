import { getText } from "../locales"


const Welcome = () => {
  return (
    <div className="welcome">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-4 col-10">
            <div className="img">
                <img className="w-100" src="img/pulatov.jpg" alt="" />
            </div>
        </div>
        <div className="col-md-8">
            <div className="info">
                <p>{getText("welcomeDesc")}</p>
                <h6>{getText("welcomeSubDesc")}</h6>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
