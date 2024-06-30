export interface RowData {
  id: string;
  employee: EmployeeI;
  device: DeviceI;
  request_info: ReqInfoI;
  amount: AmountI;
  action_url?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

export interface GridColModel {
  col_modal: Record<string, ColModel>;
}

export interface ColModel {
  name: string;
  label: string;
  summary_type: SummaryType;
}

export type SummaryType =
  | 'emp_summary'
  | 'device_summary'
  | 'reqInfo_summary'
  | 'amount_summary';

export interface EmployeeI {
  name: string;
  designation: string;
  photo?: string;
}

export interface ReqInfoI {
  duration: string;
  date: string;
}

export interface DeviceI {
  name: string;
  label: string;
  photo?: string;
  add_ons: { count: number };
}

export interface AmountI {
  status: 'pending' | 'approved';
  payable: string;
  tenure: string;
  plan: 'monthly' | 'yearly';
}
