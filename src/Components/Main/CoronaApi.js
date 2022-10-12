
import {Accordion} from 'react-bootstrap';
import React, { Component } from "react";
import Axios from "axios";

class CoronaApi extends Component {
  constructor() {
    super();
    this.state = {
      stateData: {},
    };
  }
  componentDidMount() {
    Axios.get("https://data.covid19india.org/state_district_wise.json").then(
      (response) => {
        this.setState({ stateData: response.data });
      }
    );
  }

  render() {
    let keys = Object.keys(this.state.stateData);

    return (
      <div className="container">
         <Accordion>
        {keys.map((itm, key) => {
          let districts = this.state.stateData[itm].districtData;
          let districKeys = Object.keys(districts);

          let totalActive = 0;
          let totalCofirmed = 0;
          let totalRecovery = 0;
          let totalDeaths = 0;

          let districtList = [];

          for (let x in districts) {
            totalActive += districts[x].active;
            totalCofirmed += districts[x].total_confirmed;
            totalRecovery += districts[x].recovered;
            totalDeaths += districts[x].deceased;
            let ob = districts[x];
            ob["districtName"] = x;
            districtList.push(ob);
          }

          console.log(districtList);

          return (
            <>
              
                 
              <h1>{itm}</h1>
              <table>
                <thead>
                  <tr>
                    <th>District</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                  </tr>
                </thead>
                <tbody>
                  {districtList.map((itm, k) => {
                    return (
                      <tr>
                        <td>{itm.districtName}</td>
                        <td>{itm.confirmed}</td>
                        <td>{itm.active}</td>
                        <td>{itm.recovered}</td>
                        <td>{itm.deceased}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          );
        })}
        </Accordion>
      </div>
    );
    
  }
}
export default CoronaApi;
