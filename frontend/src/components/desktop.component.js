import React, { Component } from "react";
import { ItemCards } from "./itemcard.component"; 

export default class Desktop extends Component {
  render() {
    return (
      <div class="container">
        <div class="row align-items-center">

        <h2 class="brandBox">HP Brands</h2>

          <div class="col-lg-4 col-md-6">
              <ItemCards
                title="HP AIO 22"
                description={["Celeron J4025","4GB Ram/1 TB HDD","Intel HD Graphics","22'' Display Monitor"]}
                img="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06600079.png"
                alt="dell-hp-aio"
                price="MRP: Rs. 32,481/-"
              />
          </div>
          <div class="col-lg-4 col-md-6">
                <ItemCards
            title="HP Slim S01-AF1106 IN"
            description={["Celeron J4025","4 GB Ram/1 TB HDD","Intel HD Graphics","18.5'' Display Monitor"]}
            img="https://store.ramietech.in/447-home_default/hp-slim-desktop-s01-af1106in-pc.jpg"
            alt="hp-slim-s01"
            price="MRP: Rs. 28,135/-"
              /> 
            </div>
          <div class="col-lg-4 col-md-6">
            <ItemCards
              title="HP Slim S01-PF1153 IN"
              description={["Intel 10th Gen i3-10100","4 GB Ram/1 TB HDD","Intel HD Graphics","18.5'' Display Monitor"]}
              img="http://www.hpshowroomchennai.in/images/DESKTOP/hp-slim-s01-pf1153in-desktop.jpg"
              alt="hp-slim-s01"
              price="MRP: Rs. 39,999/-"
            />
            </div>
          </div>
      </div>
    );
  }
}
