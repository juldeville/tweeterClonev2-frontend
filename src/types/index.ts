export interface ModalProps {
  modalIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface UserState {
  value: {
    username: null | string;
    token: null | string;
    firstname: null | string;
  };
}

export interface SignUpFormData {
  firstname: string;
  username: string;
  password: string;
}
