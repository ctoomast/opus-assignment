import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';

const DateInput: React.FC<{ onCalculateDate: (startDate: string, endDate: string) => void }> = (props) => {
  const { t } = useTranslation();
  const startDateInputRef = useRef<HTMLInputElement>(null);
  const endDateInputRef = useRef<HTMLInputElement>(null);

  const onCalculateDate = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredStartDate = startDateInputRef.current!.value;
    const enteredendDate = endDateInputRef.current!.value;

    props.onCalculateDate(enteredStartDate, enteredendDate);
  }

  return (
    <form onSubmit={onCalculateDate}>
      <label htmlFor="startDate">{t('startDate')}: </label> 
      <input id="startDate" type="datetime-local" ref={startDateInputRef} />
      <br/>
      <label htmlFor="endDate">{t('endDate')}: </label> 
      <input id="endDate" type="datetime-local" ref={endDateInputRef} />
      <br/>
      <button>{t('submit')}</button>
    </form>
  );
}

export default DateInput;