import useSwr from 'swr';

import React, {Component} from 'react';
import Navbar from '../components/Navbar';

class Index extends Component {
    constructor(props) {
        super(props);
        const {data, error} = useSwr('api/test');
        console.log(data);
    }

    render() {
        return (
            <Navbar />
        )
    }
}

export default Index;