import React, { FC } from 'react';

export interface dayInfo {
	date: string,
	isDisplay: boolean,
	plans?: string[]
}

const DayItem: FC<dayInfo> = ({ day }) => {
	const displayClass = (day.isDisplay) ? 'thisMonth' : 'otherMonth';
	return (
		<div className="day">
			<div className="day__inner">
				<p className="day__date">{ day.date }</p>
				{day.plans.map((plan: string, i: number) => (
					<span key={i}>{ plan }</span>
				))}
			</div>
		</div>
	);
};

export default DayItem;