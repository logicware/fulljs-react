import React from 'react';

class List extends React.Component {
  constructor (props) {
    super(props);
  }

  handleClick(taskId) {
    this.props.onClick(taskId)
  }

  render() {
    return (
      <div>
        <ul className="listStyle">
          {
            this.props.data.map((task) => {
              return (
                <li key={task._id} onClick={() => {this.handleClick(task._id)}} className="itemStyle">
                  <input type="checkbox" id={task._id} checked={task.isDone} />
                  <label for={task._id}>&nbsp;{task.name}</label>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  data: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired
};


export default List;