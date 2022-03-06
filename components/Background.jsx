import React from 'react';
import {marked} from 'marked';

import PASSION from '../content/PASSION.md';
import ENGAGED from '../content/ENGAGED.md';
import SUMMARY from '../content/SUMMARY.md';

export default class Background extends React.Component {

    render() {
        return (
            <div className="s-container">
                <div className="s-card" style={{margin: '32px 16px', padding: '24px'}}>
                    <h1 style={{textAlign: 'center'}}>My Passion and First Steps</h1>
                    <p dangerouslySetInnerHTML={{__html: marked(PASSION)}}></p>
                </div>
                <div className="s-card" style={{margin: '32px 16px', padding: '24px'}}>
                    <h1 style={{textAlign: 'center'}}>Getting Engaged</h1>
                    <p dangerouslySetInnerHTML={{__html: marked(ENGAGED)}}></p>
                </div>
                <div className="s-card" style={{margin: '32px 16px', padding: '24px'}}>
                    <h1 style={{textAlign: 'center'}}>Summary</h1>
                    <p dangerouslySetInnerHTML={{__html: marked(SUMMARY)}}></p>
                </div>
            </div>
        );
    }

}

