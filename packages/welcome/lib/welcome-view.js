/** @babel */
/** @jsx etch.dom */

import etch from 'etch';
import path from 'path';

export default class WelcomeView {
  constructor(props) {
    this.props = props;
    this.brand = atom.branding.name;
    etch.initialize(this);

    this.element.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (link && link.dataset.event) {
        this.props.reporterProxy.sendEvent(
          `clicked-welcome-${link.dataset.event}-link`
        );
      }
    });
  }

  didChangeShowOnStartup() {
    atom.config.set('welcome.showOnStartup', this.checked);
  }

  update() {}

  serialize() {
    return {
      deserializer: 'WelcomeView',
      uri: this.props.uri
    };
  }

  render() {
    return (
      <div className="welcome">
        <div className="welcome-container">
          <header className="welcome-header">
            <a href={atom.branding.urlWeb} style={{display: 'flex', 'flex-direction': 'column', 'align-items': 'center'}}>
            <svg className='welcome-logo' xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 570.40002 191.69999" width="570.40002" height="100">
            <defs id="defs400"></defs>
            <path
               fill="currentColor"
               id="path42"
               d="m 95.9,72.6 c -12.8,0 -23.2,10.4 -23.2,23.2 0,12.8 10.4,23.2 23.2,23.2 12.8,0 23.2,-10.4 23.2,-23.2 0,-12.8 -10.4,-23.2 -23.2,-23.2 z"
               class="st0" />
               <path fill="currentColor" id="path44" d="m 67.4,127.7 c 0.8,0.3 1.6,0.5 2.4,0.5 1.6,0 3.1,-0.6 4.3,-1.8 2.4,-2.4 2.4,-6.3 0,-8.7 -1.2,-1.2 -2.8,-1.8 -4.4,-1.8 -1.6,0 -3.2,0.6 -4.4,1.8 -1.8,1.8 -2.3,4.5 -1.3,6.7 l -12.4,4.8 -51.6,61.4 1.1,1.1 61.4,-51.6 z" class="st0" />
               <path fill="currentColor" id="path46" d="m 58,152.1 c 5.4,4.6 10.9,8.7 16.7,12.4 2.1,-0.8 6.7,-2.6 8.7,-3.8 -7.1,-4.1 -12.8,-8.3 -19.3,-13.8 z" class="st0" />
               <path fill="currentColor" id="path48" d="M 129.2,51.6 124.4,64 c -0.8,-0.3 -1.6,-0.5 -2.3,-0.5 -1.6,0 -3.1,0.6 -4.3,1.8 -2.4,2.4 -2.4,6.3 0,8.7 1.2,1.2 2.8,1.8 4.4,1.8 1.6,0 3.2,-0.6 4.4,-1.8 1.8,-1.8 2.3,-4.5 1.3,-6.7 L 140.3,62.5 191.9,1.1 190.8,0 Z" class="st0" />
               <path fill="currentColor" id="path50" d="m 121.3,54.8 c -7.4,-4.6 -16.1,-7.3 -25.4,-7.3 -26.6,0 -48.3,21.7 -48.3,48.3 0,9.3 2.7,18 7.3,25.4 l 2.6,-1 c 0.4,-2.6 1.6,-5 3.5,-7 0.4,-0.4 0.8,-0.7 1.3,-1.1 -2.4,-4.9 -3.8,-10.5 -3.8,-16.3 0,-20.6 16.8,-37.4 37.4,-37.4 5.9,0 11.4,1.4 16.3,3.8 0.3,-0.4 0.6,-0.9 1,-1.3 1.9,-1.9 4.3,-3.1 7,-3.5 z" class="st0" />
               <path fill="currentColor" id="path52" d="m 95.9,133.2 c -5.9,0 -11.4,-1.4 -16.3,-3.8 -0.3,0.4 -0.6,0.9 -1,1.3 -1.9,1.9 -4.3,3.1 -7,3.5 l -1,2.6 c 7.4,4.6 16.1,7.3 25.4,7.3 26.6,0 48.3,-21.7 48.3,-48.3 0,-9.3 -2.7,-18 -7.3,-25.4 l -2.6,1 c -0.4,2.6 -1.6,5 -3.5,7 -0.4,0.4 -0.8,0.7 -1.3,1.1 2.4,4.9 3.8,10.5 3.8,16.3 -0.1,20.7 -16.9,37.4 -37.5,37.4 z" class="st0" />
               <path fill="currentColor" id="path54" d="m 16.2,95.9 c -10,24.6 -10.5,48.8 0.1,65.7 l 5.3,-6.3 c -7.2,-13.1 -7.2,-30.8 -0.9,-49.5 5,9.7 11.4,19.2 19,28 l 5.1,-6 C 36.3,117.7 29.5,106.9 24.6,95.9 31,81.5 40.9,67 54,53.9 66.8,41.1 81.2,31.1 95.9,24.5 c 10.8,4.8 21.7,11.5 32,20.2 l 6,-5.1 c -9,-7.7 -18.6,-14 -28.1,-18.9 3.2,-1.1 6.3,-2 9.4,-2.7 15.8,-3.6 29.6,-2.3 40.2,3.5 l 6.3,-5.3 C 149.2,8.2 132.4,6.1 113.5,10.4 107.6,11.7 101.7,13.6 95.8,16.1 67.2,4.4 39.2,5.7 22.5,22.4 9.6,35.3 5.3,55.2 10.5,78.3 c 1.3,5.9 3.3,11.8 5.7,17.6 z m 11.7,-68 C 41.1,14.7 62.8,12.8 86,20.6 72.8,27.4 59.9,36.8 48.4,48.4 36.7,60.1 27.4,73 20.7,86 19.7,82.9 18.7,79.8 18,76.6 13.5,56.1 17,38.8 27.9,27.9 Z" class="st0" />
               <path fill="currentColor" id="path56" d="m 147.1,63.9 c 8.6,10.3 15.4,21.2 20.2,31.9 l -0.1,0.3 c -6.6,14.7 -16.7,29.1 -29.2,41.6 -18.4,18.4 -40.1,31.1 -61.2,35.9 -15.8,3.6 -29.6,2.3 -40.2,-3.5 l -6.3,5.3 c 8.3,5.3 18.4,8 29.7,8 5.9,0 12.1,-0.7 18.5,-2.2 22.5,-5.1 45.6,-18.5 65,-37.9 11.4,-11.4 20.9,-24.3 27.8,-37.6 7.8,23.2 5.9,44.9 -7.3,58.1 -10,10 -25.7,13.7 -43.8,10.8 -3.4,2.1 -6.8,4 -10.3,5.7 7.7,2 15.1,3.1 22,3.1 15.2,0 28.3,-4.8 37.6,-14.1 C 193.7,145.1 185.6,97 152.3,57.9 Z" class="st0" />
               <path fill="currentColor" id="path58" d="m 170.2,36.4 c 4.4,8.1 6.1,18.2 5.1,29.5 2.3,3.6 4.4,7.3 6.2,10.9 3.8,-18.3 1.7,-34.5 -6.1,-46.8 z" class="st0" />
               <path fill="currentColor" id="path60" d="m 263.9,70.6 h -41.6 v 56.7 h 9.7 v -19.7 h 0.7 l 31.1,-0.1 c 3,0 5.5,-1.1 7.6,-3.2 2.1,-2.1 3.2,-4.6 3.2,-7.5 V 81.3 c 0,-2.9 -1.1,-5.5 -3.2,-7.5 -2,-2.1 -4.6,-3.2 -7.5,-3.2 z m 1,26.3 c 0,0.6 -0.4,1 -1,1 h -30.8 c -0.6,0 -1,-0.4 -1,-1 V 81.4 c 0,-0.6 0.4,-1 1,-1 h 30.8 c 0.6,0 1,0.4 1,1 z" class="st0" />
               <path fill="currentColor" id="path62" d="m 324.5,116.7 c 0,0.7 -0.5,1 -0.9,1 h -30.9 c -0.6,0 -1,-0.4 -1,-1 V 70.6 H 282 v 46.1 c 0,3 1,5.5 3.1,7.6 2.1,2.1 4.6,3.1 7.6,3.1 h 30.9 c 2.9,0 5.5,-1.1 7.5,-3.1 2.1,-2.1 3.2,-4.6 3.2,-7.6 V 70.6 h -9.8 z" class="st0" />
               <polygon transform="translate(697.6,5098.3)" fill="currentColor" id="polygon64" points="-353.6,-4970.9 -307.4,-4970.9 -307.4,-4980.7 -343.8,-4980.7 -343.8,-5027.8 -353.6,-5027.8 " class="st0" />
               <path fill="currentColor" id="path66" d="m 436.4,70.5 h -30.9 c -3,0 -5.5,1.1 -7.6,3.1 -2.1,2.1 -3.1,4.6 -3.1,7.6 v 11.9 c 0,3 1,5.5 3.1,7.6 2.1,2.1 4.6,3.1 7.6,3.1 h 30.9 c 0.4,0 0.9,0.3 0.9,1 v 11.9 c 0,0.7 -0.5,1 -0.9,1 h -30.9 c -0.6,0 -1,-0.4 -1,-1 v -4 h -9.7 v 4 c 0,3 1,5.5 3.1,7.6 2.1,2.1 4.6,3.1 7.6,3.1 h 30.9 c 2.9,0 5.5,-1.1 7.5,-3.1 2.1,-2.1 3.2,-4.6 3.2,-7.6 v -11.9 c 0,-3 -1.1,-5.5 -3.2,-7.6 -2.1,-2.1 -4.6,-3.1 -7.5,-3.1 h -30.9 c -0.6,0 -1,-0.4 -1,-1 V 81.2 c 0,-0.6 0.4,-1 1,-1 h 30.9 c 0.4,0 0.9,0.3 0.9,1 v 4 h 9.8 v -4 c 0,-3 -1.1,-5.5 -3.2,-7.6 -2,-2 -4.6,-3.1 -7.5,-3.1 z" class="st0" />
               <path fill="currentColor" id="path68" d="m 498.3,70.5 h -30.8 c -3,0 -5.5,1.1 -7.6,3.1 -2.1,2.1 -3.1,4.6 -3.1,7.6 v 46.1 h 9.7 v -19.4 h 32.8 v 19.4 h 9.8 V 81.2 c 0,-3 -1.1,-5.5 -3.2,-7.6 -2.1,-2 -4.7,-3.1 -7.6,-3.1 z m 1,27.8 h -32.8 v -17 c 0,-0.6 0.4,-1 1,-1 h 30.8 c 0.6,0 1,0.4 1,1 z" class="st0" />
               <path fill="currentColor" id="path70" d="m 567.2,104.4 c 2.1,-2.1 3.2,-4.6 3.2,-7.5 V 81.4 c 0,-2.9 -1.1,-5.5 -3.2,-7.5 -2.1,-2.1 -4.7,-3.2 -7.6,-3.2 h -41.5 v 56.7 h 9.7 v -19.8 h 15 l 0.1,0.2 16.5,19.6 h 10.9 v -2.1 l -14.8,-17.6 h 4 c 3.1,-0.1 5.6,-1.2 7.7,-3.3 z m -38.4,-6.5 c -0.6,0 -1,-0.4 -1,-1 V 81.4 c 0,-0.6 0.4,-1 1,-1 h 30.8 c 0.6,0 1,0.4 1,1 v 15.5 c 0,0.6 -0.4,1 -1,1 z" class="st0" />
            </svg>
              <h1 className="welcome-title">
                A Community-led Hyper-Hackable Text Editor
              </h1>
            </a>
          </header>

          <section className="welcome-panel">
            <p>For help, please visit</p>
            <ul>
              <li>
                The{' '}
                <a
                  href={atom.branding.urlWeb + "docs"}
                  dataset={{ event: 'atom-docs' }}
                >
                  {this.brand} docs
                </a>{' '}
                for Guides and the API reference.
              </li>
              <li>
                The {this.brand} forum at{' '}
                <a
                  href={atom.branding.urlForum}
                  dataset={{ event: 'discussions' }}
                >
                  Github Discussions
                </a>
              </li>
              <li>
                The{' '}
                <a
                  href={atom.branding.urlGH}
                  dataset={{ event: 'atom-org' }}
                >
                  {this.brand} org
                </a>
                . This is where all {this.brand} org packages can be found.
              </li>
            </ul>
          </section>

          <section className="welcome-panel">
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                checked={atom.config.get('welcome.showOnStartup')}
                onchange={this.didChangeShowOnStartup}
              />
              Show Welcome Guide when opening {this.brand}
            </label>
          </section>

          <footer className="welcome-footer">
            <a href={atom.branding.urlWeb} dataset={{ event: 'footer-atom-io' }}>
              pulsar-edit.dev
            </a>{' '}
            <span className="text-subtle">×</span>{' '}
            <a
              className="icon icon-heart"
              href={atom.branding.urlWeb + "community"}
              dataset={{ event: 'footer-octocat' }}
            />
          </footer>
        </div>
      </div>
    );
  }

  getURI() {
    return this.props.uri;
  }

  getTitle() {
    return 'Welcome';
  }

  isEqual(other) {
    return other instanceof WelcomeView;
  }
}
