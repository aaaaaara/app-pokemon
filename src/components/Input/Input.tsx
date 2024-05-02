import styles from './Input.module.scss';

interface Props {
  onClick: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

/**
 *
 * @(사실 이 컴포넌트는 재사용이 되지 않으므로 별도로 분리 할 필요는 없다. 하지만 재사용이 된다고 가정하에 진행해보기로 함)
 *
 * 이 컴포넌트에서 필요한 props
 */

export default function Input({ onClick, value, setValue }: Props) {
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.search}>
      <input
        type="search"
        placeholder="너로 정했다 !"
        onChange={(e) => onChange(e)}
        value={value}
      />
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
