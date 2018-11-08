import React, { Component } from 'react';
import Navbar from '../components/navbar';
import '../styles/index.css';
import { Button } from '../components/button';
import mypic from '../static/images/mypic.png';
import SocialButtons from '../components/socialButtons';
import Hidden from '@material-ui/core/Hidden';
import dynamic from 'next/dynamic';
const ProjectIndex = dynamic(import('../components/projectIndex'), {
  loading: () => <p>Loading...</p>
});
const ContactForm = dynamic(import('../components/contact'), {
  loading: () => <p>Loading...</p>
});
export default class extends Component {
  render() {
    return (
      <div>
        <div className="background-gradient">
          <header>
            <Navbar />
          </header>
          <div id="about" className="containerb">
            <div className="button-action">
              <Button href="#contact" primary>
                lets talk
              </Button>
              <Button href="/kanpdf" target="_blank">
                who am i
              </Button>
              <div className="container-social">
                <SocialButtons />
              </div>
            </div>
            <Hidden smDown>
              <div>
                <img src={mypic} alt="profile" className="mypic" />
              </div>
            </Hidden>
          </div>
          <hr />
        </div>
        <div id="work" className="work">
          <ProjectIndex />
        </div>
        <hr />
        <div id="contact" className="contact">
          <div className="container contact-header">
            <h1>LET'S TALK</h1>
            <h6>EMAIL ME OR SEND ME A REQUEST</h6>
            <div className="contact-container">
              <div>
                kan_lip(at)hotmail.com
              </div>
            </div>
          </div>
          <div className="container">
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}
