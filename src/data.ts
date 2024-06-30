import { ItemDataI } from './common/components/itemBlock/ItemBlock';
import { DocumentsDataI } from './pages/Type';

export const itemsData: ItemDataI[] = [
  {
    label: 'iPhone 15',
    model: '128 GB Black',
    name: 'iphone-15',
    price: 79999,
    price_symbol: 'Rs',
  },
  {
    label: 'iPhone 11',
    model: '128 GB Black',
    name: 'iphone-11',
    price: 49999,
    price_symbol: 'Rs',
  },
  {
    label: 'iPhone 12',
    model: '128 GB Black',
    name: 'iphone-12',
    price: 79999,
    price_symbol: 'Rs',
  },
  {
    label: 'iPhone 10',
    model: '128 GB Black',
    name: 'iphone-10',
    price: 49999,
    price_symbol: 'Rs',
  },
];

export const approvalSteps = [
  {
    name: 'first',
    label: 'First Approval',
    approver: 'Jules Bianchi (You)',
    isApproved: true,
  },
  {
    name: 'final',
    label: 'Final Approval',
    approver: 'Surya Harsh',
    isApproved: false,
  },
];

export const paymentsData = [
  {
    heading: 'For Employee',
    cardData: [
      {
        name: 'claim_value',
        sub_label: 'Total Claim Value',
        label: 'Rs 80,582',
      },
    ],
    heading_text: 'Payments are split into monthly payment for 6 months',
    sub_text: [
      "It is deducted directly out of the employee's salary as part of tax-free device allowance.",
    ],
    breakdown_data: [
      {
        heading: 'Salary Deductions',
        breakdowns: [
          {
            type: 'info',
            name: 'installment',
            label: 'Monthly Installment Amount',
            value: 'Rs 13,416',
            icon: 'installment',
          },
          {
            type: 'info',
            name: 'deducted',
            label: 'No. of installments to be duducted',
            value: '6',
            icon: 'bill',
          },
          {
            type: 'result',
            name: 'total_amt',
            label: 'Total Amount to be paid',
            value: 'Rs 80,489',
            icon: 'total',
          },
        ],
        helper_text:
          "<p>If you approve this request today, you will have to <b>deduct Rs 13,435</b> from Aditya's salary from the next payroll cycle starting <b>May 2024 till October 2024</b></p>",
      },
      {
        heading: 'Payments by employee',
        breakdowns: [
          {
            name: 'adv_paid',
            label: 'Advance paid',
            value: 'Rs 1,000',
            icon: 'arrow',
          },
        ],
      },
    ],
  },
];

export const docuData: DocumentsDataI[] = [
  {
    heading: 'Signed by Aditya',
    doc_data: [
      {
        action_label: 'View Document',
        name: 'file_signed',
        doc_name: 'Device Usage Policy',
        sharing: 'Between Ninjacard & Aditya',
        sign_date: 'Signed on 12th April',
      },
      {
        action_label: 'View and sign Document',
        name: 'rental_schedule',
        doc_name: 'Rental Schedule',
        sharing: 'Between Ninjacard & Aditya',
      },
    ],
  },
  {
    heading: 'Yet to be signed by you',
    sub_heading:
      'Sign the documents only when you are sure about claim approval',
    doc_data: [
      {
        action_label: 'View Document',
        name: 'file_signed',
        doc_name: 'Device Usage Policy',
        sharing: 'Between Ninjacard & Aditya',
        sign_date: 'Signed on 12th April',
      },
    ],
  },
];
