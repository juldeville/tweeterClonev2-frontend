export interface ModalProps {
  modalIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface UserState {
  value: {
    username: string;
    token: string;
    firstname: string;
  };
}

export interface SignUpFormData {
  firstname: string;
  username: string;
  password: string;
}

export interface SignInFormData {
  username: string;
  password: string;
}

export interface CreateTweetData {
  token: string;
  content: string;
  tag?: string;
}

export interface TweetData {
  user: { firstname: string; username: string };
  content: string;
  date: string;
  likes: Array<string>;
  tag?: string;
  _id: string;
}

export interface UpdateTweetData {
  token: string;
  tweetId: string;
}
