import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills-table-container">
      <h1>My Skills </h1>

      <div className="skills-text hover-border">
        <table className="skills-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Skills</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Frontend</td>
              <td>
                HTML5 <br />
                CSS3 / Tailwind <br />
                JavaScript (ES6+) <br />
                React JS
              </td>
            </tr>

            <tr>
              <td>Backend</td>
              <td>
                Node.js <br />
                Express.js
              </td>
            </tr>

            <tr>
              <td>Database</td>
              <td>
                MongoDB <br />
                MySQL
              </td>
            </tr>

            <tr>
              <td>Tools</td>
              <td>
                Git & GitHub <br />
                VS Code
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
