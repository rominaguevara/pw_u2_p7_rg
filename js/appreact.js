const element = React.createElement('div', null,
    React.createElement('h1', null, 'Hola Mundo React'),
    React.createElement('p', null, 'React')
);

ReactDOM.render(element, document.getElementById('myApp'));
