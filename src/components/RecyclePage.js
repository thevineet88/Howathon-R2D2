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
            <li>Step 1 :</li>
            <li>Step 2 :</li>
            <li>Step 3 :</li>
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
            <li>Step 1 :</li>
            <li>Step 2 :</li>
            <li>Step 3 :</li>
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
