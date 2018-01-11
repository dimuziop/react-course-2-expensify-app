import moment from 'moment';

const expenses = [
    {
        id: '1',
        description: 'Test1',
        note: '',
        amount: 195,
        createdAt: 0
    },
    {
        id: '2',
        description: 'Test2',
        note: '',
        amount: 5000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Test3',
        note: '',
        amount: 300,
        createdAt: moment(0).add(4, 'days').valueOf()
    },
    {
        id: '4',
        description: 'Test4',
        note: '',
        amount: 700,
        createdAt: moment(0).add(8, 'days').valueOf()
    },
    {
        id: '5',
        description: 'Test5',
        note: '',
        amount: 1950,
        createdAt: moment(0).add(20, 'days').valueOf()
    }
];

export default expenses;