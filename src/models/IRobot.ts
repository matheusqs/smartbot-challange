export default interface IRobot {
  id: number;
  title: string;
  running: number;
  updated_at: string;
  mode: number;
  stock_codes: string;
  strategy: string;
  initial_capital: number;
  number_trades: number;
  daily_balance: number;
  type: string;
  created_at: string;
  simulation: number;
  last_paper: {
    robot_id: number;
    paper: string;
    position: number;
    type: number;
    paper_value: number;
    profit: string;
    id: string;
    created_at: string;
  };
  movimentations: Array<{
    date: string;
    value: number;
  }>;
}
