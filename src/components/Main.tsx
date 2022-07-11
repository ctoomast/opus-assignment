import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DateInput from './DateInput';
import './Main.scss';

const Main = () => {
  const [monthsDifferenece, setMonthsDifference] = useState<number>(0);
  const [daysDifferenece, setDaysDifference] = useState<number>(0);
  const [hoursDifferenece, setHoursDifference] = useState<number>(0);
  const [monthsBetween, setMonthsBetween] = useState<number>(0);
  const [daysBetween, setDaysBetween] = useState<number>(0);
  const [hoursBetween, setHoursBetween] = useState<number>(0);
  const { t } = useTranslation();

  const calculateDateHandler = (startDateStr: string, endDateStr: string) => {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    // Time difference in hours
    const hoursBetween = (endDate.getTime() - startDate.getTime()) / (1000 * 3600);
    let daysDiff = Math.floor(hoursBetween/24);
    setDaysBetween(daysDiff);
    const hoursDiff = hoursBetween % 24;
    const monthsDiff = Math.floor(daysDiff/30);
    if (monthsDiff > 0) {
      daysDiff = daysDiff - (monthsDiff*30);
    }
    
    setMonthsDifference(monthsDiff);
    setDaysDifference(daysDiff);
    setHoursDifference(hoursDiff);

    setMonthsBetween(monthsDiff);
    setHoursBetween(hoursBetween);
  }

  return (
    <div className="main">
      <h2>{t('mainHeader')}</h2>
      <DateInput onCalculateDate={calculateDateHandler} />
      <h3>{t('timeResult')}: {monthsDifferenece} {t('months')} {daysDifferenece} {t('days')} {hoursDifferenece} {t('hours')}</h3>
      <p>{monthsBetween} {t('months')}</p>
      <p>{daysBetween} {t('days')}</p>
      <p>{hoursBetween} {t('hours')}</p>
    </div>
  );
}

export default Main;