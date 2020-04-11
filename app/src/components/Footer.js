import React from 'react';
import Icon from 'components/commons/Icon';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div id="footer-top-content">
                    <b>© Copyright 2020 Fretz & Freedom</b>
                </div>
                <div id="footer-middle-content">
                    <Icon icon="developer_board" size="small" />
                </div>
                <div id="footer-bottom-content">
                    <span>
                        Desenvolvido por <b>Guilherme, Airan & Vitor</b>
                    </span>
                </div>
            </div> 
        </footer>
    )
};

export default Footer;
