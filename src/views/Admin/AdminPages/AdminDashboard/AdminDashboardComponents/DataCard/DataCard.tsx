import { Link } from "react-router-dom";
import { DataCardContainer } from "./DataCard.Styled";

interface Props {
  cardTitle: string;
  displayedValue: number;
  reportLink: string;
}

const DataCard = ({ cardTitle, displayedValue, reportLink }: Props) => {
  return (
    <DataCardContainer>
      <div className="upper-card-wrapper">
        <p className="data-card-title">{cardTitle}</p>
        <h1 className="data-card-value">{displayedValue}</h1>
      </div>

      <div className="data-card-report-link-container">
        {" "}
        <Link to={reportLink} className="data-card-report-link">
          View report
        </Link>{" "}
      </div>
    </DataCardContainer>
  );
};

export default DataCard;
