import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function StatesDropdown() {
  return (
  <Dropdown id="dropdown-basic-button" variant="outline-secondary" title="All state" >
    <Dropdown.Toggle variant="warning" id="dropdown-basic">
      All states
    </Dropdown.Toggle>
   
  <Dropdown.Menu style={{ maxHeight: '300px', overflowY: 'auto' }} >
  <Dropdown.Item href="#/action-alabama">Alabama</Dropdown.Item>
<Dropdown.Item href="#/action-alaska">Alaska</Dropdown.Item>
<Dropdown.Item href="#/action-arizona">Arizona</Dropdown.Item>
<Dropdown.Item href="#/action-arkansas">Arkansas</Dropdown.Item>
<Dropdown.Item href="#/action-california">California</Dropdown.Item>
<Dropdown.Item href="#/action-colorado">Colorado</Dropdown.Item>
<Dropdown.Item href="#/action-connecticut">Connecticut</Dropdown.Item>
<Dropdown.Item href="#/action-delaware">Delaware</Dropdown.Item>
<Dropdown.Item href="#/action-florida">Florida</Dropdown.Item>
<Dropdown.Item href="#/action-georgia">Georgia</Dropdown.Item>
<Dropdown.Item href="#/action-hawaii">Hawaii</Dropdown.Item>
<Dropdown.Item href="#/action-idaho">Idaho</Dropdown.Item>
<Dropdown.Item href="#/action-illinois">Illinois</Dropdown.Item>
<Dropdown.Item href="#/action-indiana">Indiana</Dropdown.Item>
<Dropdown.Item href="#/action-iowa">Iowa</Dropdown.Item>
<Dropdown.Item href="#/action-kansas">Kansas</Dropdown.Item>
<Dropdown.Item href="#/action-kentucky">Kentucky</Dropdown.Item>
<Dropdown.Item href="#/action-louisiana">Louisiana</Dropdown.Item>
<Dropdown.Item href="#/action-maine">Maine</Dropdown.Item>
<Dropdown.Item href="#/action-maryland">Maryland</Dropdown.Item>
<Dropdown.Item href="#/action-massachusetts">Massachusetts</Dropdown.Item>
<Dropdown.Item href="#/action-michigan">Michigan</Dropdown.Item>
<Dropdown.Item href="#/action-minnesota">Minnesota</Dropdown.Item>
<Dropdown.Item href="#/action-mississippi">Mississippi</Dropdown.Item>
<Dropdown.Item href="#/action-missouri">Missouri</Dropdown.Item>
<Dropdown.Item href="#/action-montana">Montana</Dropdown.Item>
<Dropdown.Item href="#/action-nebraska">Nebraska</Dropdown.Item>
<Dropdown.Item href="#/action-nevada">Nevada</Dropdown.Item>
<Dropdown.Item href="#/action-new-hampshire">New Hampshire</Dropdown.Item>
<Dropdown.Item href="#/action-new-jersey">New Jersey</Dropdown.Item>
<Dropdown.Item href="#/action-new-mexico">New Mexico</Dropdown.Item>
<Dropdown.Item href="#/action-new-york">New York</Dropdown.Item>
<Dropdown.Item href="#/action-north-carolina">North Carolina</Dropdown.Item>
<Dropdown.Item href="#/action-north-dakota">North Dakota</Dropdown.Item>
<Dropdown.Item href="#/action-ohio">Ohio</Dropdown.Item>
<Dropdown.Item href="#/action-oklahoma">Oklahoma</Dropdown.Item>
<Dropdown.Item href="#/action-oregon">Oregon</Dropdown.Item>
<Dropdown.Item href="#/action-pennsylvania">Pennsylvania</Dropdown.Item>
<Dropdown.Item href="#/action-rhode-island">Rhode Island</Dropdown.Item>
<Dropdown.Item href="#/action-south-carolina">South Carolina</Dropdown.Item>
<Dropdown.Item href="#/action-south-dakota">South Dakota</Dropdown.Item>
<Dropdown.Item href="#/action-tennessee">Tennessee</Dropdown.Item>
<Dropdown.Item href="#/action-texas">Texas</Dropdown.Item>
<Dropdown.Item href="#/action-utah">Utah</Dropdown.Item>
<Dropdown.Item href="#/action-vermont">Vermont</Dropdown.Item>
<Dropdown.Item href="#/action-virginia">Virginia</Dropdown.Item>
<Dropdown.Item href="#/action-washington">Washington</Dropdown.Item>
<Dropdown.Item href="#/action-west-virginia">West Virginia</Dropdown.Item>
<Dropdown.Item href="#/action-wisconsin">Wisconsin</Dropdown.Item>
<Dropdown.Item href="#/action-wyoming">Wyoming</Dropdown.Item>
</Dropdown.Menu>
    </Dropdown>

  );
}

export default StatesDropdown;