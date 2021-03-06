import React from 'react';

import {
  KuiButton,
  KuiLinkButton,
  KuiSubmitButton,
} from '../../../../components';

export default () => (
  <div>
    <KuiButton type="basic">
      Button element
    </KuiButton>

    &nbsp;

    <form onSubmit={e => {
      e.preventDefault();
      window.alert('Submit');
    }}>
      <KuiSubmitButton type="basic">
        Submit input element
      </KuiSubmitButton>
    </form>


    <form onSubmit={e => {
      e.preventDefault();
      window.alert('Submit');
    }}>
      <KuiSubmitButton type="basic" disabled>
        Submit input element, disabled
      </KuiSubmitButton>
    </form>

    &nbsp;

    <KuiLinkButton
      type="basic"
      href="http://www.google.com"
      target="_blank"
    >
      Anchor element
    </KuiLinkButton>

    &nbsp;

    <KuiLinkButton
      type="basic"
      href="http://www.google.com"
      target="_blank"
      disabled
    >
      Anchor element, disabled
    </KuiLinkButton>
  </div>
);
