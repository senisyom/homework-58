interface Props {
  showAlertWindow: () => void
}

const AlertBlock: React.FC<Props> = ({ showAlertWindow }) => {
  return (
    <>
      <button
        className="btn btn-primary m-2"
        onClick={showAlertWindow}
          >
              Show Alert
      </button>
    </>
  );
};

export default AlertBlock;
