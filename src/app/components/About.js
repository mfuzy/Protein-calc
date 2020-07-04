import React from "react";

export class About extends React.Component {
  render() {
    return (
      <div id="about">
        <h1>About</h1>
        <p>
          Every fitness fan knows that receiving of the sufficient amount of
          protein is extremely important if wants optimal results. The
          calculating of proteins can be very uncomfortable therefore this web
          application will do it instead of you. This application allows fast
          searching and immediate calculation. Here you can find all usual foods
          whereby their protein part is derived form relevant, carefully
          selected data sources.
        </p>
        <p>
          You must only find concrete food in list, enter the amount of it
          ("Amount") and you will see amount of protein in this food
          ("Proteins"). You can choose from various food types (meat, fish &
          seafood, dairy & eggs, legumes, cereals, vegetables, nuts & seeds),
          combine and find out the final amount of protein ("PROTEINS TOTAL").
        </p>
      </div>
    );
  }
}
