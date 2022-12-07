import HistoryTable from "./MedHistoryTable/MedHistoryTable";
import HistoryTitle from "./HistoryTitle";

function MedHistory() {
  return (
    <div className="MedHistory">
        <HistoryTitle/>
      <HistoryTable/>
    </div>
  );
}

export default MedHistory;
