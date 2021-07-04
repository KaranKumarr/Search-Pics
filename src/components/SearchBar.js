import React from 'react';


class SearchBar extends React.Component {


    state = { term: '' };

    handleFormSubmit = (event) => {
        //Page won't automatically refresh after user submits form
        event.preventDefault();

        this.props.onSubmittion(this.state.term)

    };

    render() {
        return <div className="ui segment">

            <form className="form ui" onSubmit={this.handleFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.value} onChange={(e) => this.setState({ term: e.target.value })} />
                </div>
            </form>

        </div>;
    }

}

export default SearchBar;