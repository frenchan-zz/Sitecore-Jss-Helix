import * as React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const HeroBanner = ({ fields }) => (
<div>
    <p>HeroBanner Component</p>
    <Text field={fields.heading} />
</div>
);
export default HeroBanner;
    