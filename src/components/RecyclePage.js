import "../css/RecyclePage.css";
import RecycleBanner from "./recycleBanner";
import recDel from "../images/recycle-delivery.png";
import recStep from "../images/recycle-steps.png";
import recCal from "../images/waste-caluclator.png";

function RecyclePage(props) {
  return (
    <div className="recycle--page">
      <RecycleBanner className="recycle-banner" />
    <div className="container">
      <div className="flex-container-recycle-page">
        <div className="recycle-page-left">
          <h2>Recycle On Delivery:</h2>
          <ul>
            <li>We can only take for recycling a large appliance that's disconnected before we arrive and if it's a built-in model then it's unfixed from your units. So please ensure the appliance is ready for pickup. If you'd like us to disconnect your old large appliance, this comes as part of our installation service for your new appliance. Otherwise, please ensure the large appliance is prepared before we arrive to take it away.</li>
            <li>All personal data to be saved and deleted. The delivery is handled by a 3rd party and we cannot guaranty the safety of your data.</li>
            <li>And don't forget we will also collect any small electrical items for free when we deliver, just hand them to our crew when they arrive– You can recycle any small electricals including small tech such as - kettles, toasters, cables, or vacuum cleaners to name a few.</li>
          </ul>
          <figure>
            <img src={recDel} width={'80%'} alt="Recycle image steps"/>
          </figure>
          <h2>Recycle Steps:</h2>
          <ul>
            <li> You can bring in any item for recycling in our stores located in your city. We also have affiliated collection points where you can recycle the appliance.</li>
            <li> Please fill the recycle form online or on paper and share the Recycle ID with the collection agent. Please share the PIN only after the items have been collected. This will ensure the recycling process can be tracked transparently.</li>
          </ul>
          <img src={recStep} width={'80%'} alt="reuse ewaste"/>
          </div>
          <div className="recycle-page-right">
            <a href="https://weee4future.eitrawmaterials.eu/e-waste-calculator/" ><img src={recCal} alt ="E-waste calculator" className="ewaste-calc"></img></a>
            <div className="r2d2-video-container">
              <div className="iframe-container">
                    <iframe width="600"
                        height="315"
                        src="https://www.youtube.com/embed/MQLadfsvfLo"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                    </div>
                    <div className="iframe-container">
                    <iframe width="600"
                        height="315"
                        src="https://www.youtube.com/embed/-uyIzKIw0xY"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                    </div> <div className="iframe-container">
                    <iframe width="600"
                        height="315"
                        src="https://www.youtube.com/embed/1wS_q3o5iGk"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                    </div>
                </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default RecyclePage;
