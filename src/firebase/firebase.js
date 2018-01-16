import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};
/*
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').push(
    {
        description: 'Test9',
        note: 'another test',
        amount: 5000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    });*/

/*const printResult = (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
};

database.ref('expenses').on('value', (snapshot) => {
    printResult(snapshot);
});*/
/*database.ref('expenses').once('value').then((snapshot) => {
   const expenses = [];
   snapshot.forEach((childSnapshot) => {
       expenses.push({
           id: childSnapshot.key,
           ...childSnapshot.val()
       });
   });
    console.log(expenses);
});*/

/*
database.ref('expenses').push(
    {
        description: 'Test1',
        note: '',
        amount: 195,
        createdAt: 0
    });
database.ref('expenses').push(
    {
        description: 'Test2',
        note: '',
        amount: 5000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    });
database.ref('expenses').push(
    {
        description: 'Test3',
        note: '',
        amount: 300,
        createdAt: moment(0).add(4, 'days').valueOf()
    });

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
*/


/*database.ref('notes/-L2lCXUhqOdzXx_iik36').update({
    body: 'cosa updateada'
});*/

/*
database.ref('notes').push({
    title: 'Tada!',
    body: 'This is another note'
});
*/

/*const notes = [{
    id:'12',
    title: 'First Note',
    body: 'This is my note'
},{
    id:'12acv',
    title: 'Second Note',
    body: 'This is my second note'
}];

database.ref('notes').set(notes);*/

/*const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('We got an error', e);
});*/


/*database.ref('persons/1').once('value').then((snapshot)=>{
    const val = snapshot.val();
    console.log(val);
}).catch((e) => {
    console.log('This fetch has fails.', e);
});*/

/*
database.ref('persons/1').set({
    name: 'Patricio Di Muzio',
    age: 31,
    stressLevel: 6,
    job: {
        title:'Software Developer',
        company: 'Google'
    },
    location: {
        city: 'Buenos Aires',
        country: 'Argentina'
    }
}).then(() => {
   console.log('data is saved');
}).catch((e) => {
    console.log('This failed.', e);
});

database.ref('persons/1').update({
    stressLevel: 9,
    'job/company': 'Amazon',
    location:{
        city: 'Seattle',
        country: 'United States'
    }
}).then(() => {
    console.log('Update is merged');
}).catch((e) => {
    console.log('This failed.', e);
});
*/

//database.ref().set('this is a string');

/*
database.ref().remove().then(() => {
    console.log('Object removed');
}).catch((e) => {
    console.log('An error happens', e)
});
*/

