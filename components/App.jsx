import React from 'react';

import Home from './Home.jsx';
import Portfolio from './Portfolio.jsx';
import Background from './Background.jsx';
import Contact from './Contact.jsx';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'home',
            menuShown: false
        };
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                <div style={{flex: '1 0 auto'}}>
                    <div className="s-nav-bar">
                        <div className="s-nav-header">
                            <div className="s-nav-brand">@michaelrk02</div>
                            <div className="s-nav-toggle"><a className="s-bare fa fa-bars" onClick={this.onToggleMenu.bind(this)}></a></div>
                        </div>
                        <div className="s-nav-menu" style={{display: this.state.menuShown ? 'block' : 'none'}}>
                            <div className="s-nav-items">
                                <a className="s-nav-item s-bare" onClick={this.onNavigate('home').bind(this)}>Home</a>
                                <a className="s-nav-item s-bare" onClick={this.onNavigate('portfolio').bind(this)}>Portfolio</a>
                                <a className="s-nav-item s-bare" onClick={this.onNavigate('background').bind(this)}>Background</a>
                                <a className="s-nav-item s-bare" onClick={this.onNavigate('contact').bind(this)}>Contact</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        {(this.state.page === 'home') && <Home />}
                        {(this.state.page === 'portfolio') && <Portfolio />}
                        {(this.state.page === 'background') && <Background />}
                        {(this.state.page === 'contact') && <Contact />}
                    </div>
                </div>
                <div className="s-footer">
                    <div className="s-footer-text">Built with <i className="fa fa-heart" style={{color: '#f56942'}}></i> using ReactJS and Tailwind CSS</div>
                </div>
            </div>
        );
    }

    onNavigate(page) {
        return (() => {
            this.setState({page: page});
        });
    }

    onToggleMenu() {
        this.setState({menuShown: !this.state.menuShown});
    }

}

