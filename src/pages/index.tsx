import useSwr from 'swr';
import React from 'react';
import Navbar from '../components/Navbar';
import DocumentMeta from 'react-document-meta';

const Index = () => {
    const {data, error} = useSwr('api/test');
    console.log(data);

    const meta = {
        title: 'FLITE',
        description: '',
        canonical: '',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: ''
            }
        }
    };

    return (
        <DocumentMeta {...meta}>
            <Navbar />
        </DocumentMeta>
    );
}

export default Index;