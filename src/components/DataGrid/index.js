const ReactDataGrid = require('react-data-grid');
// const exampleWrapper = require('../components/exampleWrapper');
// import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
const React = require('react');

const Example = React.createClass({
getInitialState() {
    this.createRows();
    this._columns = [
      {
        key: 'id',
        name: 'ID',
        resizable: true,
        width: 40
      },
      {
        key: 'task',
        name: 'Title',
        resizable: true
      },
      {
        key: 'priority',
        name: 'Priority',
        resizable: true
      },
      {
        key: 'issueType',
        name: 'Issue Type',
        resizable: true
      },
      {
        key: 'complete',
        name: '% Complete',
        resizable: true
      },
      {
        key: 'startDate',
        name: 'Start Date',
        resizable: true
      },
      {
        key: 'completeDate',
        name: 'Expected Complete',
        resizable: true
      }
    ];

    return null;
  },

  getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  },

  createRows() {
    let rows = [];
    for (let i = 1; i < 1000; i++) {
      rows.push({
        id: i,
        task: 'Task ' + i,
        complete: Math.min(100, Math.round(Math.random() * 110)),
        priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
        issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
        startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
        completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
      });
    }

    this._rows = rows;
  },

  rowGetter(i) {
    return this._rows[i];
  },

  render() {
    return  (
        <div className="DataGrid-Wrapper">
            <ReactDataGrid
                columns={this._columns}
                rowGetter={this.rowGetter}
                rowsCount={this._rows.length}
                minHeight={500} />
        </div>
    );
  }
});

export default Example;