export interface ContentBreakDownDataI {
  heading: string;
  breakdowns: BreakDownI[];
  helper_text: string;
}

export interface BreakDownI {
  name: string;
  label: string;
  value: string;
  icon: string;
  type: 'info' | 'result';
}
