
import {useState} from "react";

import "./prescription.css";
function Prescription(){
const [prescription,setPrescription]=useState("");

const [result,setResult]=useState("");


const handleExplain = () => {

  if (prescription.trim() === "") {
    alert("Please enter your prescription first.");
    return;
  }

  const text = prescription.toLowerCase();

  if (text.includes("1-0-1")) {
    setResult("1-0-1 means morning and night.");
  }

  else if (text.includes("1-1-1")) {
    setResult("1-1-1 means morning, afternoon and night.");
  }

  else if (text.includes("1-0-0")) {
    setResult("1-0-0 means morning.");
  }

  else if (text.includes("0-1-0")) {
    setResult("0-1-0 means afternoon.");
  }

  else if (text.includes("0-0-1")) {
    setResult("0-0-1 means night.");
  }

  else if (text.includes("od")) {
    setResult("OD means once a day.");
  }

  else if (text.includes("bd")) {
    setResult("BD means twice a day.");
  }

  else if (text.includes("tds")) {
    setResult("TDS means three times a day.");
  }

  else if (text.includes("qid")) {
    setResult("QID means four times a day.");
  }

  else if (text.includes("hs")) {
    setResult("HS means at bedtime.");
  }

  else if (text.includes("stat")) {
    setResult("STAT means immediately or at once.");
  }

  else if (text.includes("sos")) {
    setResult("SOS means when needed.");
  }

  else if (text.includes("prn")) {
    setResult("PRN means as needed.");
  }

  else if (text.includes("before food")) {
    setResult("Before food means before eating.");
  }

  else if (text.includes("after food")) {
    setResult("After food means after eating.");
  }

  else if (text.includes("with food")) {
    setResult("With food means take it with food.");
  }

  else if (text.includes("empty stomach")) {
    setResult("Empty stomach means take it when the stomach is empty, as instructed by your doctor or pharmacist.");
  }
else if (text.includes("before food")) {
  setResult("Before food means before eating.");
}

else if (text.includes("after food")) {
  setResult("After food means after eating.");
}

else if (text.includes("with food")) {
  setResult("With food means take it with food.");
}

else if (text.includes("empty stomach")) {
  setResult("Empty stomach means take it when the stomach is empty.");
}

else if (text.includes("od")) {
  setResult("OD means once a day.");
}
  else {
    setResult(
      "Prescription instruction not recognized. Please confirm it with your doctor or pharmacist."
    );
  }
};


return(
  <div className="prescription-page">

    <div className="prescription-card">


      <h1>Prescription Simplifier</h1>
      <p>Enter your prescription instruction below</p>
      <textarea value={prescription}
                onChange={(e)=>setPrescription(e.target.value)}
                placeholder="Example:1-0-1 after food"
                rows="5"/>


     <button onClick={handleExplain}>
      explain prescription
      </button>      

      {result &&(
        <div className="result-box">
          <h2>Explanation</h2>
          <p>{result}</p>
          
          </div>
      )}

    </div>
  </div>
)

}
export default Prescription;

