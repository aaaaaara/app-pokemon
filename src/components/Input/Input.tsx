import styles from './Input.module.scss';

interface Props {
  onClick: () => void;
}

export default function Input({ onClick }: Props) {
  return (
    <div className={styles.search}>
      <input type="search" placeholder="너로 정했다 !" />
      <button onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#657789"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
  );
}
