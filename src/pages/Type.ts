import { CardI } from '../common/components/summaryBlock/Card';
import { ContentBreakDownDataI } from '../components/contentBreakdown/Type';
import { DocuBlockDataI } from '../components/docuBlock/DocuBlock';

export interface PaymentsDataI {
  heading: string;
  cardData: CardI[];
  heading_text: string;
  sub_text: string[];
  breakdown_data: ContentBreakDownDataI[];
}

export interface DocumentsDataI {
  heading: string;
  sub_heading?: string;
  doc_data: DocuBlockDataI[];
}
