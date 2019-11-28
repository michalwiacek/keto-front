import React from 'react';
import RecipesSection from '../containers/Recipes/RecipesSection';
import withApollo from '../lib/apollo';

class RecipesIndex extends React.Component {
    render () {
        return (
            <>
                <RecipesSection />
            </>
        );
    }
};

export default withApollo(RecipesIndex);
