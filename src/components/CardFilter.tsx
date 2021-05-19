import React, { ChangeEvent, Component } from 'react';
import styles from './CardFilter.module.scss';

import { Radio, RadioButtonGroup } from '@salesforce/design-system-react';

interface Props {
  filter: string;
  onFilterChange: ({ filter }: { filter: string }) => unknown;
}

class CardFilter extends Component<Props> {
  render() {
    const filter = ['Date', 'Jurisdiction'];

    return (
      <article className='slds-card'>
        <div className='slds-grid slds-gutters_direct'>
          <div
            className='slds-col'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              fontSize: '20px',
              fontFamily: 'Merriweather',
              textAlign: 'center',
            }}
          >
            Group meetings by
          </div>
          <div className={styles.filterSelect}>
            <RadioButtonGroup
              className='slds-col'
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                this.props.onFilterChange({ filter: event.target.value })
              }
            >
              {filter.map((filter) => (
                <Radio
                  key={filter}
                  id={filter}
                  labels={{ label: filter }}
                  value={filter}
                  checked={this.props.filter === filter}
                  variant='button-group'
                />
              ))}
            </RadioButtonGroup>
          </div>
          <div className='slds-col' style={{ margin: '15px' }}>
            <p style={{ fontStyle: 'italic', textAlign: 'left' }}>
              See any inaccuracies in our information?
            </p>
            <p style={{ textAlign: 'left' }}>Let us know</p>
          </div>
        </div>
      </article>
    );
  }
}

export default CardFilter;
