import React, { ChangeEvent, Component } from 'react';

import JurisdictionFilter from './JurisdictionFilter';

import DateFilter from './DateFilter';

import { Radio, RadioButtonGroup } from '@salesforce/design-system-react';

class CardFilter extends Component<{}, { checked: string }> {
  state = {
    checked: 'Date',
  };

  render() {
    const filter = ['Date', 'Jurisdiction'];

    return (
      <article
        className='slds-card'
        style={{
          margin: '20px',
          float: 'left',
          width: '800px',
          height: '120px',
        }}
      >
        <div className='slds-grid slds-gutters_direct'>
          <div
            className='slds-col'
            style={{
              fontSize: '20px',
              fontFamily: 'Merriweather',
              float: 'left',
              margin: '15px',
              width: '220px',
            }}
          >
            Sort meetings by
          </div>
          <RadioButtonGroup
            className='slds-col'
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              this.setState({ checked: event.target.value })
            }
          >
            {filter.map((filter) => (
              <Radio
                key={filter}
                id={filter}
                labels={{ label: filter }}
                value={filter}
                checked={this.state.checked === filter}
                variant='button-group'
              />
            ))}
          </RadioButtonGroup>
          <div
            className='slds-col'
            style={{ float: 'left', width: '250px', margin: '15px' }}
          >
            <p style={{ fontStyle: 'italic', textAlign: 'left' }}>
              See any inaccuracies in our information?
            </p>
            <p style={{ textAlign: 'left' }}>Let us know</p>
          </div>
        </div>

        {this.state.checked === 'Date' && <DateFilter />}

        {this.state.checked === 'Jurisdiction' && <JurisdictionFilter />}
      </article>
    );
  }
}

export default CardFilter;
