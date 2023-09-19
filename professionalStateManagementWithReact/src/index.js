import React from 'react';
import { createRoot } from 'react-dom/client';

import App from '@components/App';

import "./styles/basic.scss";

const container = document.querySelector('#app');
const root = createRoot(container);

root.render(<App />);
