import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default props => {
  const {
    isOpen,
    toggle,
    headerToggle,
    handleDelete,
    handleCancel,
    className,
    paragraphBody,
    paragraphHeaderDelete,
    paragraphHeaderAddDevice,
    handleSave,
    bodyForm
  } = props;

  return (
    <div>
      <Modal {...props} isOpen={isOpen} toggle={toggle} className={className}>
        <ModalHeader toggle={headerToggle}>
          {paragraphHeaderDelete} {paragraphHeaderAddDevice}
        </ModalHeader>
        <ModalBody>
          {bodyForm}
          {paragraphBody}{" "}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          {!bodyForm ? (
            <Button color="danger" onClick={handleDelete}>
              Delete Forever
            </Button>
          ) : (
            <Button color="info" onClick={handleSave}>
              Save
            </Button>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};
