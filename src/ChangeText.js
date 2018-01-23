import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import {connect} from 'react-redux'
import {addTask, deleteTask} from './state/changeText'


const styles = {
    margin: 20,
    padding: 20,
    textAlign: 'center'
}


class ChangeText extends React.Component {
    state = {
        currentText: ''
    }

    render() {
        return (
            <div>
                <Paper style={styles}>
                    <h1>{this.state.currentText}</h1>
                </Paper>
                <Paper style={styles}>
                    <TextField
                        value={this.state.currentText}
                        onChange={(e, value) => this.setState({currentText: value})}
                        hintText={"New text to change ..."}
                        fullWidth={true}
                    />
                    <RaisedButton
                        onClick={() => this.props.addTask(this.state.currentText)}
                        label={"CHANGE TEXT"}
                        primary={true}
                        fullWidth={true}
                    />
                </Paper>
            </div>
        )
    }
}

// const mapStateToProps = state => ({  //DISPATCHER all below; ten laczy kawalski stanu
//     tasks: state.todo.tasks
// })
//
// const mapDispatchToProps = dispatch => ({ //ten laczy akcje
//     addTask: name => dispatch(addTask(name)),
//     deleteTask: key => dispatch(deleteTask(key))
// })
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ChangeText)

export default ChangeText