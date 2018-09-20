import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import CreateRepoQuery from '../Queries/CreateRepoQuery';
import '../App.css'
import RepoList from '../Components/Repositories/RepoList';

class DwmContainer extends Component {


    state = {
        repoName: '',
        owner: 'xohotech',
        project: 'DWM',
        accessControl: 'Private',
        language: 'php',
        versionControl: 'Git',
        repos: [{}]
    };

    mutationHandler = (propFunction, data) => {
        console.log(data);
        // propFun
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <form>
                            <p className="h4 text-center mb-3">Create New Repository</p>
                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Repository Name</label>
                            <input type="text" id="defaultFormRegisterNameEx"
                                   onChange={event => this.setState({repoName: event.target.value})}
                                   className="form-control"/>
                            <br/>
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Owner</label>
                            <select className="form-control"
                                    onChange={event => this.setState({owner: event.target.value})}>
                                <option value="xohotech" selected>xohotech</option>
                            </select>
                            <br/>
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Project</label>
                            <select className="form-control"
                                    onChange={event => this.setState({project: event.target.value})}>
                                <option value="DWMT" selected>DWM Test</option>
                            </select>
                            <br/>
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Language</label>
                            <select className="form-control"
                                    onChange={event => this.setState({language: event.target.value})}>
                                <option value="php" selected>PHP</option>
                                <option value="java" selected>Java</option>
                                <option value="javascript" selected>JavaScript</option>
                                <option value="python" selected>Python</option>
                            </select>
                            <br/>
                            <div className="text-center mt-4">
                                <Mutation mutation={CreateRepoQuery}
                                          variables={{
                                              repoName: this.state.repoName,
                                              owner: this.state.owner,
                                              language: this.state.language
                                          }}
                                           // onCompleted={data => console.log(data)}
                                     >
                                    {postMutation => <button className="btn btn-unique" onClick={postMutation}>Create</button>}
                                </Mutation>
                            </div>
                        </form>
                    </div>
                    <div className="col-7">
                        <RepoList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default DwmContainer;