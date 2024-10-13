// System
import { useState } from 'react';

// Hooks
import { useGetData } from '@shared/hooks';

// UI
import { Logo } from '@shared/ui';

// Styles
import styles from './EthForm.module.scss';

export const EthForm = () => {
  const { getData, data, isLoading } = useGetData();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError('');
  };

  const handleButtonClick = () => {
    const isValid = /^0x[a-fA-F0-9]{40}$/.test(inputValue);
    if (!isValid) {
      setError('Invalid Ethereum address format');
      return;
    }
    getData(inputValue);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Logo />
        <label htmlFor="inputValue" className={styles.label}>
          Ethereum Wallet Address
        </label>
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          className={styles.input}
          placeholder="0x123...456ee"
          aria-invalid={!!error}
          aria-describedby="inputError"
        />

        {error && (
          <p className={styles.inputErrorMessage} aria-live="assertive">
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={handleButtonClick}
          className={styles.button}
        >
          Search
        </button>

        {isLoading && <p className={styles.loader} />}
        {data && !isLoading && (
          <h2 className={styles.description}>{`Balance: ${data}`}</h2>
        )}
      </div>
    </div>
  );
};
