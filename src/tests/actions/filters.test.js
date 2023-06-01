import moment from "moment";
import { setStartDate, sortByAmount, sortByDate, setTextFilter } from "../../actions/filters";

test('should generate set start date action object', () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    }); 
});


test('should generate sort by date action object',() =>{
    const action = sortByDate(moment(0));
    expect(action).toEqual({
        type:'SORT_BY_DATE'  
    });
});

test('should generate set text filter action value',() => {
    const text = "something new"
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    });
});

test('should generate set text filter action default',() => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''

    });
});

test('should generate action object for sort by date ', () =>{
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'});
});

test('should generate action object for sort by amount',() =>{
    expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'});
});
 
