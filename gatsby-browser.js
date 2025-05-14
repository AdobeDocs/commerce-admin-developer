/*
 *  ADOBE CONFIDENTIAL
 *  Copyright 2025 Adobe All Rights Reserved.
 *  NOTICE:  All information contained herein is, and remains the property of Adobe and its suppliers, if any.
 *  The intellectual and technical concepts contained herein are proprietary to Adobe and its suppliers and are protected by all applicable intellectual property laws, including trade secret and copyright laws.
 *  Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained from Adobe.
 */

import { MDXProvider } from '@mdx-js/react';
import { Edition } from './src/@adobe/gatsby-theme-aio/components/Edition';

// Define the components that will be available in MDX files
const components = {
  // Register the Edition component for inline use
  Edition
};

// Define a constant to check if the code is running in a browser environment
const isBrowser = typeof window !== "undefined";

// Wrap the root element with the MDXProvider
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};

export const onClientEntry = () => {
  // set adobe analytics window object
  if (isBrowser) {
    window._satellite = window._satellite || {};
    window.alloy_all = window.alloy_all || {};
    window.alloy_all.data = window.alloy_all.data || {};
    window.alloy_all.data._adobe_corpnew = window.alloy_all.data._adobe_corpnew || {};
    window.alloy_all.data._adobe_corpnew.web = window.alloy_all.data._adobe_corpnew.web || {};
    window.alloy_all.data._adobe_corpnew.web.webPageDetails = window.alloy_all.data._adobe_corpnew.web.webPageDetails || {};
  }
};

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (isBrowser) {
    function watchAndFireAnalytics() {
      if (typeof window._satellite !== 'undefined') {
        _satellite.track('state',
          {
            xdm: {},
            data: {
              _adobe_corpnew: {
                web: {
                  webPageDetails: {
                    customPageName: location.href
                  }
                }
              }
            }
          }
        );

        clearInterval(intervalId);
      }
    }

    // watch if analytics is online then track page
    const intervalId = setInterval(watchAndFireAnalytics, 1000);
  }
}
