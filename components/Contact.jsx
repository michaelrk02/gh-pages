import React from 'react';

export default class Contact extends React.Component {

    render() {
        return (
            <div className="s-container">
                <div className="s-card" style={{margin: '32px 16px', padding: '24px'}}>
                    <h1 style={{textAlign: 'center'}}>Contact</h1>
                    <div style={{margin: '16px 0px'}}>If you're interested in my service, or if you want to know further about me professionally, or if you have any questions, feel free to reach me through one of these social media links below</div>
                    <div className="s-about-card">
                        <div className="s-about-key">LinkedIn</div>
                        <div className="s-about-value"><a target="_blank" className="s-button-secondary" href="https://linkedin.com/in/michaelrk02"><i className="fab fa-linkedin"></i> Michael R. Krisnadhi</a></div>
                    </div>
                    <div className="s-about-card">
                        <div className="s-about-key">WhatsApp</div>
                        <div className="s-about-value"><a target="_blank" className="s-button-secondary" href="https://wa.me/62895343845423"><i className="fab fa-whatsapp"></i> Michael R. Krisnadhi</a></div>
                    </div>
                    <div className="s-about-card">
                        <div className="s-about-key">Facebook</div>
                        <div className="s-about-value"><a target="_blank" className="s-button-secondary" href="https://facebook.com/michael.raditya.98"><i className="fab fa-facebook"></i> Michael Raditya</a></div>
                    </div>
                    <div className="s-about-card">
                        <div className="s-about-key">Instagram</div>
                        <div className="s-about-value"><a target="_blank" className="s-button-secondary" href="https://instagram.com/michaelrk02"><i className="fab fa-instagram"></i> michaelrk02</a></div>
                    </div>
                </div>
                <div className="s-card" style={{margin: '32px 16px', padding: '24px'}}>
                    <h1 style={{textAlign: 'center'}}>Also, check out other projects too!</h1>
                    <div style={{margin: '16px 0px'}}>I occasionally build houses in Minecraft and making music whenever I have a free time to hone my creativity</div>
                    <div className="s-about-card">
                        <div className="s-about-key">Pinterest</div>
                        <div className="s-about-value"><a target="_blank" className="s-button-secondary" href="https://pinterest.com/michaelkrisnadhi/"><i className="fab fa-pinterest"></i> Michael Krisnadhi</a></div>
                    </div>
                    <div className="s-about-card">
                        <div className="s-about-key">SoundCloud</div>
                        <div className="s-about-value"><a target="_blank" className="s-button-secondary" href="https://soundcloud.com/michael-krisnadhi"><i className="fab fa-soundcloud"></i> Michael R. Krisnadhi</a></div>
                    </div>
                </div>
            </div>
        );
    }

}

