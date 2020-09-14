import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

function getDate() {
  return moment().format('LL');
}

function getTime() {
  return moment().format('LT');
}

function useDateTime(): [string, string] {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    setDate(getDate);
    setTime(getTime);

    const interval = setInterval(() => {
      setTime(t => t !== getTime() ? getTime() : t);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return [date, time];
}

export default useDateTime;
