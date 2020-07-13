import React from 'react';
import { connect } from 'react-redux';

const Status = (props) => {
  return <section>{props.totalVotes}</section>;
};

const mapStateToProps = (state) => {
  return { totalVotes: state.votes.totalVotes };
};

export default connect(mapStateToProps)(Status);
