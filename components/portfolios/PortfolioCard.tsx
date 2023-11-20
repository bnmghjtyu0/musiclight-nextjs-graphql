interface Props {
  portfolio: {
    title: string;
    jobTitle: string;
    description: string;
    startDate: string;
    endDate: string;
  };
}

const PortfolioCard = ({ portfolio }: Props) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card-title'>{portfolio.title}</div>
      </div>
      <div className='card-footer'>
        <small>
          {portfolio.startDate} - {portfolio.endDate}
        </small>
      </div>
    </div>
  );
};

export default PortfolioCard;
