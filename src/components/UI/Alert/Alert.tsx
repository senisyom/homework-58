interface Props extends React.PropsWithChildren {
  show: boolean;
  type: "primary" | "success" | "danger" | "warning";
  onDismiss?: () => void;
  children: React.ReactNode;
}

const Alert: React.FC<Props> = ({ type, onDismiss, children, show }) => {
  const alertClass = `alert alert-${type} d-flex justify-content-between align-items-center`;

  return (
    <div className="alert show" style={{ display: show ? "block" : "none" }}>
      <div className="d-flex justify-content-center mt-3">
        <div className={alertClass} role="alert">
          <div>{children}</div>
        </div>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onDismiss}
        ></button>
      </div>
    </div>
  );
};

export default Alert;
