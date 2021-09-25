import React, { Component } from "react";
import axios from "axios";

document.body.style.backgroundColor = "#CEE5D0";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      emailId: "",
      phoneNumber: "",
      description: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e);
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("/home", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="container">
        {/*************************** carousel ****************************/}

        <br/>

        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://gamesncomps.com/wp-content/uploads/2020/10/high-gaming-pc.jpg"
                class="d-block w-100"
                alt="gaming-comp-img"
              />
              <div class="carousel-caption d-none d-md-block">
                <h4>Click next for more such exciting setups!</h4>
                <p>
                  We deal in gaming setups as well as working environment
                  setups.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.mos.cms.futurecdn.net/w3Sw4xyieWmd5XBBbhUHED-1200-80.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h4>Loving what you see yet!?</h4>
                <p>You can have the displayed setups at your home!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://www.reviewgeek.com/p/uploads/2020/12/19a62eff.jpg?width=1200"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>
                  Browse around and choose your components and we'll assemble a
                  PC just like these for you!
                </h5>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <form onSubmit={this.submitHandler}>
          {/*************************  form for submitting the contact information ***********************/}

          <div>
            <h2>Enter your contact information and we'll contact you</h2>
            <h4>Happy Shopping!</h4>
            <div>
              <label for="inputName" class="col-sm-2 form-label">
                Name
              </label>
              <div class="col-sm-10" />
              <input
                type="text"
                class="form-control"
                id="inputName"
                name="username"
                onChange={this.changeHandler}
              />
            </div>
            <div>
              <label for="inputEmail" class="col-sm-2 form-label">
                Email
              </label>
              <div class="col-sm-10" />
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                name="emailId"
                placeholder="Email ID"
                onChange={this.changeHandler}
              />
            </div>
            <div>
              <label for="inputNumber" class="col-sm-2  form-label">
                Phone Number
              </label>
              <div class="col-sm-10" />
              <input
                type="number"
                class="form-control"
                id="inputNumber"
                name="phoneNumber"
                placeholder="Number"
                onChange={this.changeHandler}
              />
            </div>
            <div>
              <label for="text" class="col-sm-2  form-label">
                Your preferred components
              </label>
              <div class="col-sm-10" />
              <input
                type="text"
                class="form-control textarea"
                id="inputDescription"
                name="description"
                placeholder="Product description"
                onChange={this.changeHandler}
              />
            </div>
            <div>
              <button type="submit" value="Submit" className="btn btn-dark" style={{margin: "8px 0 8px 0"}}>
                Submit
              </button>
            </div>
          </div>
        </form>

        
      </div>
    
    );
  }
}
