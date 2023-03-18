import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import {
    getStartDate,
    getEndDate,
    getPagesPerDay,
    getStats,
    getCurrentlyReading,
} from '../../redux/books/booksSelectors';
import { useSelector } from 'react-redux';
import {
    ChartWrapper,
    ChartBox,
    ChartTitle,
    ChartTime,
    ChartNumber,
    ChartInfo,
} from './Graph.styled';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,

    plugins: {
        legend: {
            display: false,
            position: 'center',
            backgroundColor: 'white',
        },

    },

    scales: {
        y: {
            grid: { display: false },
            ticks: {
                beginAtZero: true,
            },
            min: 0,
        },
        x: {
            border: {
                display: true
            },
            grid: {
                display: true,
                drawOnChartArea: true,
                drawTicks: true,
            }
        },
    },
};



function Graph() {
    const stats = useSelector(getStats);
    const startDate = useSelector(getStartDate);
    const endDate = useSelector(getEndDate);
    const pagesPerDay = useSelector(getPagesPerDay);
    const currentlyReading = useSelector(getCurrentlyReading);

    const generateDateArr = function (start, end) {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const arr = [];
        const dt = new Date(startDate);

        while (dt <= endDate) {
            const fullDate = `${dt.getFullYear()}-${dt.getMonth() + 1
                }-${dt.getDate()}`;
            arr.push({ time: fullDate });
            dt.setDate(dt.getDate() + 1);
        }
        return arr;
    };

    const datesArr = generateDateArr(startDate, endDate);

    const statsPlan = datesArr.map(stat => {
        const newStat = { ...stat };
        newStat.pagesCount = pagesPerDay;
        return newStat;
    });

    const factPlan = datesArr.map(day => {
        const { time } = day;
        const newStat = { ...day, pagesCount: 0 };

        stats.forEach(el => {
            const factDate = new Date(el.time);
            const factFullDate = `${factDate.getFullYear()}-${factDate.getMonth() + 1
                }-${factDate.getDate()}`;

            if (factFullDate === time) {
                newStat.pagesCount += el.pagesCount;
            }
        });

        return newStat;
    });

    const data = {
        labels: datesArr.map(el => el.time),
        datasets: [
            {
                label: 'PLAN',
                data: statsPlan.map(stat => stat.pagesCount),
                pointBorderWidth: 6,
                borderColor: '#091E3F',
                backgroundColor: '#091E3F',
                lineTension: 0.4,
            },
            {
                label: 'ACT',
                data: factPlan.map(stat => stat.pagesCount),
                borderColor: '#FF6B08',
                backgroundColor: '#FF6B08',
                lineTension: 0.4,
                pointBorderWidth: 6,
            },
        ],
    };


    // console.log(currentlyReading);


    return (
        <>
            {currentlyReading.length === 0 && (

                <ChartInfo>

                </ChartInfo>

            )}
            <ChartBox>
                <ChartTitle>
                    AMONT OF PAGES/DA <ChartNumber>0</ChartNumber>{' '}
                </ChartTitle>
                <ChartWrapper options={options} data={data} />
                <ChartTime>TIME </ChartTime>
            </ChartBox>
        </>
    );
}
export default Graph