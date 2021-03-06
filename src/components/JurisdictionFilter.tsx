import React, { ChangeEvent, Component } from 'react';

import { RadioButtonGroup } from '@salesforce/design-system-react';
import { Radio } from '@salesforce/design-system-react';
import { Dropdown } from '@salesforce/design-system-react';

class JurisdictionFilter extends Component {
  state = {
    stateChecked: 'Missouri',
    jurisdictionChecked: 'All',
  };
  render() {
    const stateFilter = ['Missouri', 'Kansas'];

    const jurisdictions = [
      { label: 'All', value: 'A0' },
      { label: 'County', value: 'A1' },
      { label: 'Local', value: 'A2' },
    ];
    const meetingType = [
      { label: 'All', value: 'A0' },
      { label: 'Health', value: 'A1' },
      { label: 'Transportation', value: 'A2' },
    ];

    return (
      <div className='slds-grid slds-gutters_direct'>
        <div
          className='slds-col'
          style={{
            fontSize: '20px',
            fontFamily: 'Merriweather',
            float: 'left',
            margin: '0px 15px 15px 0px',
          }}
        >
          State
        </div>
        <RadioButtonGroup
          className='slds-col'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            this.setState({ stateChecked: event.target.value })
          }
        >
          {stateFilter.map((stateFilter) => (
            <Radio
              key={stateFilter}
              id={stateFilter}
              labels={{ label: stateFilter }}
              value={stateFilter}
              checked={this.state.stateChecked === stateFilter}
              variant='button-group'
            />
          ))}
        </RadioButtonGroup>

        <div className='slds-col'></div>
        <Dropdown
          className='slds-col'
          align='right'
          iconCategory='utility'
          iconName='down'
          iconPosition='right'
          label='Jurisdiction'
          options={jurisdictions}
        />
        <Dropdown
          className='slds-col'
          align='right'
          iconCategory='utility'
          iconName='down'
          iconPosition='right'
          label='Meeting Type'
          options={meetingType}
          style={{ marginLeft: '15px' }}
        />
        <div className='slds-col'></div>
      </div>
    );
  }
}

export default JurisdictionFilter;
