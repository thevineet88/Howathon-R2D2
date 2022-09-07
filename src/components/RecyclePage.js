import "../css/RecyclePage.css";
import recDel from "../images/recycle-delivery.png";
import recStep from "../images/recycle-steps.png";

function RecyclePage(props) {
  return (
    // <div className="container" style={{display:'none'}}>
    <div className="container">
      <div className="flex-container-recycle-page">
        <div>
          <p>Recycle On Delivery:</p>
        </div>
        <div>
          <ul>
            Steps:
            <li>Step 1 : We can only take for recycling a large appliance that's disconnected before we arrive and if it's a built-in model then it's unfixed from your units. So please ensure the appliance is ready for pickup. If you'd like us to disconnect your old large appliance, this comes as part of our installation service for your new appliance. Otherwise, please ensure the large appliance is prepared before we arrive to take it away.</li>
            <li>Step 2 : All personal data to be saved and deleted. The delivery is handled by a 3rd party and we cannot guaranty the safety of your data.</li>
            <li>Step 3 : And don't forget we will also collect any small electrical items for free when we deliver, just hand them to our crew when they arrive– You can recycle any small electricals including small tech such as - kettles, toasters, cables, or vacuum cleaners to name a few.

</li>
          </ul>
        </div>
        <div>
          <img src={recDel} height={'300px'}/>
        </div>
      </div>
      <div className="flex-container-recycle-page">
        <div>
          <p>Recycle Steps:</p>
        </div>
        <div>
          <ul>
            Steps:
            <li>Step 1 : You can bring in any item for recycling in our stores located in your city. We also have affiliated collection points where you can recycle the appliance.</li>
            <li>Step 2 : Please fill the recycle form online or on paper and share the Recycle ID with the collection agent. Please share the PIN only after the items have been collected. This will ensure the recycling process can be tracked transparently.</li>
          </ul>
        </div>
        <div>
          <img src={recStep} height={'300px'}/>
        </div>
      </div>
    </div>
  );
}

export default RecyclePage;
