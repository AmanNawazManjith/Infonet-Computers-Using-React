import React, { Component } from "react";
import { ItemCards } from "./itemcard.component";

export default class Laptop extends Component {
  render() {
    return (
      <div class="container">
        <div class="row align-items-center">
          <h2 class="brandBox">HP Brands</h2>


          <div class="col-lg-4 col-md-6">
            <ItemCards
              title="HP Omen 15 Gaming Laptop"
              description={["Ryzen 5-4600H",
              "8GB Ram/512GB SSD",
              "Nvidia GTX 1650ti 4GB",
              "15.6'' Full HD IPS Anti-Glare Display"]}
              img="https://m.media-amazon.com/images/I/71dG2zTOI6L._SL1500_.jpg"
              alt="hp-omen"
              price="MRP: Rs. 88,885"
            />
          </div>
          <div class="col-lg-4 col-md-6">
              <ItemCards
                title="HP chromebook 14a"
                description={["Intel Celeron Dual Core","4GB Ram","64 GM SSD + 100GB Cloud + 256 GB Expandable","Intel HD Graphics","14'' HD Touch Display"]}
                img="https://m.media-amazon.com/images/I/613WULNEr1L._SL1080_.jpg"
                alt="hp-chromebook"
                price="MPR: Rs. 29,741/-"
              />
          </div>
          <div class="col-lg-4 col-md-6">
              <ItemCards
                title="HP 15s-fq2072tu"
                description={["Intel 11th Gen i3-1115G4","GB Ram/512 SSD","Intel HD Graphics","15.6'' HD Display"]}
                img="https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c06591177.png"
                alt="hp-15s"
                price="MRP: Rs. 48,544/-"
              />
            </div>
          <div class="col-lg-4 col-md-6">
              <ItemCards
                title="HP 15s-fq2071TU"
                description={["Intel 11th Gen i5-1135G7","8 GB Ram/512 SSD+32 GB 3D Xpoint","Intel Iris Xe Graphics","15.6'' Full HD Display"]}
                img="https://m.media-amazon.com/images/I/71fvR6NCIFL._SL1500_.jpg"
                alt="hp-15s"
                price="MRP: Rs. 59,452/-"
              />
          </div>
          <div class="col-lg-4 col-md-6">
              <ItemCards
                title="Pavillion Gaming 15"
                description={["Intel 11th Gen i7-11370H","16 GB Ram/512 SSD","Nvidia GTX 1650 Graphics","15.6'' FHD IPS Anti-Glare 144 Hz"]}
                img="https://cdn1.smartprix.com/rx-inheenHZj-w1200-h1200/hp-pavilion-gaming-1.jpg"
                alt="hp-pavillion-15"
                price="MRP: Rs. 55,000"
              />
          </div>
          <div class="col-lg-4 col-md-6">
              <ItemCards
                title="HP 14s-ER0004TU"
                description={["Intel 10th Gen i3-1005G1","8GB Ram/1 TB HDD","Intel HD Graphics","14'' FHD Display"]}
                img="https://m.media-amazon.com/images/I/71lMJxLkIqL._SL1411_.jpg"
                alt="hp-14s"
                price="MRP: Rs. 48,500/-"
              />
          </div>

          <h2 class="brandBox">Dell Brands</h2>

          <div class="col-lg-4 col-md-6">
              <ItemCards
                title="DELL G5 15"
                description={["Intel i5-10200H","8 GB Ram/512 GB SSD","Nvidia GTX 1650 4 GB Graphics","15.6'' FHD IPS 120 Hz Display"]}
                img="https://m.media-amazon.com/images/I/915Mnx4ZurL._SL1500_.jpg"
                alt="dell-g15"
                price=""
              />
          </div>
 

          <h2 class="brandBox">ASUS Brands</h2>

          <h2 class="brandBox">ACER Brands</h2>

          <h2 class="brandBox">MSI Brands</h2>
        </div>
      </div>
    );
  }
}
