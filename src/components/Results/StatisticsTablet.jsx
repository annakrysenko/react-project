import { useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import { getStats } from 'redux/books/booksSelectors';
import StatisticsContainerTablet from './ResultsStyles/StatisticsContainerTablet.styled';
import StatisticsTabletText from './ResultsStyles/StatisticsTabletText.styled';
import StatTableScroll from './ResultsStyles/StatTableScroll.styled';
import StatTable from './ResultsStyles/StatTable.styled';
import StatTableDate from './ResultsStyles/StatTableDate.styled';
import StatTableTime from './ResultsStyles/StatTableTime.styled';
import StatTableTextPage from './ResultsStyles/StatTableTextPage.styled';

const StatisticsTablet = () => {
  const stats = useSelector(getStats);

  const dateAndTime = stats.map(({ time, pagesCount }) => {
    const splitDateAndTime = time.split(' ');

    return {
      date: new Date(splitDateAndTime[0]),
      time: splitDateAndTime[1],
      page: pagesCount,
    };
  });

  return (
    <StatisticsContainerTablet>
      <StatisticsTabletText>Статистика</StatisticsTabletText>

      <StatTableScroll>
        <StatTable>
          <tbody>
            {dateAndTime.map(({ date, time, page }) => (
              <tr key={nanoid()}>
                <StatTableDate>{date.toLocaleDateString()}</StatTableDate>
                <StatTableTime>{time}</StatTableTime>
                <StatTableDate>
                  {page} <StatTableTextPage>стор.</StatTableTextPage>
                </StatTableDate>
              </tr>
            ))}
          </tbody>
        </StatTable>
      </StatTableScroll>
    </StatisticsContainerTablet>
  );
};

export default StatisticsTablet;
