import React from 'react';
import {connect} from 'react-redux';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../actions/filters";
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        if (e.target.value === 'amount') {
            this.props.sortByAmount()
        } else {
            this.props.sortByDate()
        }
    };

    render() {
        return (
            <div className={'content-container'}>
                <div className={"input-group"}>
                    <div className={"input-group__item"}>
                        <input placeholder={"Search expenses"} className={"text-input"} type="text" defaultValue={this.props.filters.text} onChange={this.onTextChange}/>
                    </div>
                    <div className={"input-group__item"}>
                        <select className={"select"} value={this.props.filters.sortBy} onChange={this.onSortChange}>
                            <option value={'date'}>Date</option>
                            <option value={'amount'}>Amount</option>
                        </select>
                    </div>
                    <div className={"input-group__item"}>
                        <DateRangePicker
                            startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                            endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);