import { Files, Signature } from '@phosphor-icons/react';
import React from 'react';

export interface DocuBlockProps {
  data: DocuBlockDataI;
}

export interface DocuBlockDataI {
  name: string;
  doc_name: string;
  sharing: string;
  sign_date?: string;
  action_label: string;
}

const DocuBlock: React.FC<DocuBlockProps> = (props) => {
  const { data } = props;

  const handleDocAction = () => {
    //
  };

  return (
    <div className="docu-block">
      <div className="d-flex align-items-center gap-2">
        <div className="docu-block__icon">
          <Files size={32} color="#6d6f6d" weight="fill" />
        </div>
        <div className="docu-block__content">
          <p className="doc-name"> {data.doc_name} </p>
          <p className="doc-sharing"> {data.sharing} </p>
        </div>
      </div>
      <hr className="docu-block__separator" />
      <div className="sign-section">
        <div>
          <Signature
            className="sign-section__icon"
            height="inherit"
            width="inherit"
            color="#6d6f6d"
            weight="thin"
          />
          <span className="sign-section__date d-inline-block text-secondary">
            {data.sign_date || 'Pending'}
          </span>
        </div>
        <button
          type="button"
          onClick={handleDocAction}
          className="sign-section__action btn btn-outline-secondary btn-sm"
        >
          {data.action_label}
        </button>
      </div>
    </div>
  );
};

export default DocuBlock;
