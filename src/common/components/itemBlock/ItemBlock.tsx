import { Devices } from '@phosphor-icons/react';
import React from 'react';

interface ItemBlockProps {
  itemData: ItemDataI[];
}

export interface ItemDataI {
  name: string;
  label: string;
  model: string;
  price: number;
  price_symbol: '$' | 'Rs';
}

const ItemBlock: React.FC<ItemBlockProps> = (props) => {
  const { itemData } = props;

  return itemData.map((data) => {
    const { name, model, label, price, price_symbol: symbol = 'Rs' } = data;

    return (
      <div key={name} className="item-wrapper">
        <div className="item-section">
          <div className="item-section__icon">
            <Devices height="inherit" width="inherit" weight="fill" />
          </div>
          <div className="item-section__detail">
            <p className="item-name">{label}</p>
            <p className="item-modal">{model}</p>
          </div>
        </div>
        <div className="price-section">
          <p className="price-section__price">
            {symbol} {price}
          </p>
        </div>
      </div>
    );
  });
};

export default ItemBlock;
