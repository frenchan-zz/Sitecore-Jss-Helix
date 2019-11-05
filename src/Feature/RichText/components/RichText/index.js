import * as React from 'react';
import { RichText as RichTextSitecore } from '@sitecore-jss/sitecore-jss-react';

const RichText = ({ fields }) => (
    fields.richText &&
    <div className="richText">
        <RichTextSitecore field={fields.richText} />
    </div>
);
export default RichText;
