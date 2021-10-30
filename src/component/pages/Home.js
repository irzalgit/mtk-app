import React from 'react';
import logo from './map11.svg';
import './Home.css';
import { UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";
import {
  ReactSvgPanZoomLoader,
  SvgLoaderSelectElement
} from "react-svg-pan-zoom-loader";

export default function Home() {
  return (
  <div className="App">
      

      <ReactSvgPanZoomLoader
        src={logo}
        proxy={
          <>
            <SvgLoaderSelectElement
              selector="#maturetree"
              onClick={e => alert("Tree")}
            />
          </>
        }
        render={content => (
          <UncontrolledReactSVGPanZoom width={1280} height={500}>
            <svg width={2000} height={3000}>
              {content}
            </svg>
          </UncontrolledReactSVGPanZoom>
        )}
      />
    </div>     
 
  );
}