import React from 'react';
import { docuData } from '../data';
import DocuBlock from '../components/docuBlock/DocuBlock';

export interface DocumentsProps {}

const Documents: React.FC<DocumentsProps> = () => {
  return (
    <div className="container-lg">
      {docuData.map((data) => {
        return (
          <div className="my-4">
            <p className="fw-medium text-dark mb-1">{data.heading}</p>
            {data.sub_heading ? (
              <p className="text-secondary">{data.sub_heading}</p>
            ) : null}
            {data.doc_data.map((doc) => {
              return <DocuBlock key={doc.name} data={doc} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Documents;
