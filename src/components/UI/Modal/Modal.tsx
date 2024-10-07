import BackDrop from "../BackDrop/BackDrop";

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ show, title, children, closeModal }) => {

    const clickOnBackDrop = () => {
    }

  return (
    <>
      <BackDrop show={show} closeModal={clickOnBackDrop} />
      <div className="modal show" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
            </div>
            <div className="p-2">{children}</div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={closeModal}>
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
