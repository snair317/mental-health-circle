import React from "react";
export default function Resources() {
  return (
    <div className="page simple">
      <h2>Resources & Immediate Help</h2>
      <ul>
        <li>Suicide Helpline India: 9152987821</li>
        <li>
          <a href="https://icallhelpline.org/" target="_blank" rel="noreferrer">
            iCALL
          </a>{" "}
          (Mental Health Support)
        </li>
        <li>Crisis Text Line: Text HOME to 741741</li>
        <li>
          <a
            href="https://www.samhsa.gov/find-help/national-helpline"
            target="_blank"
            rel="noreferrer"
          >
            SAMHSA Helpline
          </a>{" "}
          (USA)
        </li>
      </ul>
      <p>
        <b>
          If you are in immediate crisis, please contact a professional or reach
          out to these helplines.
        </b>
      </p>
    </div>
  );
}
