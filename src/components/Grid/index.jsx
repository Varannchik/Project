// import React , {useState} from 'react';
// import { connect } from 'react-redux';
// import ReactDataGrid from 'react-data-grid';

// export function grid(props){ 

//     state = { item };

//     onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
//         this.setState(state => {
//         const rows = state.rows.slice();
//         for (let i = fromRow; i <= toRow; i++) {
//             rows[i] = { ...rows[i], ...updated };
//         }
//         return { rows };
//         });
//     };  
//     return (<ReactDataGrid
//         columns={props.items}
//         rowGetter={i => props.items[i]}
//         rowsCount={7}
//         minHeight={250} />);
// };

// const mapStateToProps = state =>({
//     item: state.appReducer.user
// })

// export default connect(mapStateToProps)(grid);
import React from 'react';
import ReactDataGrid from 'react-data-grid';
import './styles.module.scss';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'count', name: 'Count' } ];

const rows = [{id: 0, title: 'row1', count: 20}, {id: 1, title: 'row1', count: 40}, {id: 2, title: 'row1', count: 60}];

function HelloWorld() {   
  return (<div>
            <ReactDataGrid 
                columns={columns}
                rowGetter={i => rows[i]}
                rowsCount={3}
                minHeight={150}
            />
        </div>);
}
export default HelloWorld;