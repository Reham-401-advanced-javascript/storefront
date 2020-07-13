import React from 'react';
import { connect } from 'react-redux';
import { increment, reset } from '../store/votes';

const VotesCounter = (props) => {
  return (
    <section>
      <ul>
        {props.votes.candidates.map((person) => {
          return (
            <li key={person.name} onClick={() => props.increment(person.name)}>
              {person.name} : {person.votes}
            </li>
          );
        })}
      </ul>
      <button onClick={props.reset}>Reset</button>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { votes: state.votes };
};
// props.votes.totalVotes
// props.votes.candidates
const mapDispatchToProps = { increment, reset };
// props.increment
// props.reset()

/*
function mapDispatchToProps(dispatch){
  return(
    {
      increment:()=>{dispatch(increment())},
       reset:()=>{dispatch(reset())}
    }
  )
}
*/
export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);
