import {
  DeviceMobile,
  Money,
  Bank,
  MoneyWavy,
  CalendarDots,
  Placeholder,
} from '@phosphor-icons/react';
import React from 'react';

interface CardProps {
  card: CardI;
}

export interface CardI {
  name:
    | 'tenure'
    | 'deductible_amt'
    | 'claim_value'
    | 'gst_credit'
    | 'sponsored_amt';
  sub_label: string;
  label: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { card } = props;

  const displayIcon = () => {
    switch (card.name) {
      case 'claim_value':
        return (
          <DeviceMobile
            height="inherit"
            width="inherit"
            color="#62e29f"
            weight="fill"
          />
        );
        break;
      case 'deductible_amt':
        return (
          <Money
            height="inherit"
            width="inherit"
            color="#ff91ee"
            weight="fill"
          />
        );
        break;
      case 'gst_credit':
        return (
          <Bank
            height="inherit"
            width="inherit"
            color="#ff91ee"
            weight="fill"
          />
        );
        break;
      case 'sponsored_amt':
        return (
          <MoneyWavy
            height="inherit"
            width="inherit"
            color="#ff91ee"
            weight="fill"
          />
        );
        break;
      case 'tenure':
        return (
          <CalendarDots
            height="inherit"
            width="inherit"
            color="#b59cf7"
            weight="fill"
          />
        );
        break;
      default:
        return (
          <Placeholder
            height="inherit"
            width="inherit"
            color="#b59cf7"
            weight="fill"
          />
        );
        break;
    }
  };

  return (
    <div className="summary-card">
      <div className="summary-card__icon">{displayIcon()}</div>
      <p className="summary-card__sub-label">{card.sub_label}</p>
      <p className="summary-card__label">{card.label}</p>
    </div>
  );
};

export default Card;
