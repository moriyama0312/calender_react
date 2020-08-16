import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import DayItem, { dayInfo } from './dayItem';

export interface CalendarProps {
	nowTime: Date,
	dayList: dayInfo[]
}

const Calendar: FC<CalendarProps> = ({ nowTime, dayList}) => (
	<>
		<h1 id="title">{ nowTime.getFullYear() }年{ nowTime.getMonth() }月</h1>
		<div id="btn-add">
			<Link to="/add" />
		</div>
		<div id="list-days">
			{dayList.map((day: dayInfo, i: number) => (
				<DayItem key={i} day={day} />
			))}
		</div>
	</>
);

export default Calendar;