import "./Toast.css";

const Toast = ({ selectedBet }) => {
  return (
    <div className="container-play">
      <span>{selectedBet.firstTeam}</span>
      <span>{selectedBet.secondTeam}</span>
      <span>{selectedBet.outcome}</span>
      <span>{selectedBet.coefficient}</span>
    </div>
  );
};

export default Toast;
