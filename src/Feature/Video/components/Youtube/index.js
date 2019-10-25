import * as React from 'react';
import { Text, getFieldValue, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const Youtube = ({ fields, sitecoreContext }) => {

    const videoId = getFieldValue(fields, 'videoId'),
          videoHeight = getFieldValue(fields, 'videoHeight') || '315',
          videoWidth = getFieldValue(fields, 'videoWidth') || '100%',
          videoControls = getFieldValue(fields, 'videoControls') || '1',
          src = `https://www.youtube.com/embed/${videoId}?controls=${videoControls}`,
          thumbnail = `https://img.youtube.com/vi/${videoId}/0.jpg`,
          isEditing = sitecoreContext && sitecoreContext.pageEditing;

    return (
        <React.Fragment>
            {
                !isEditing &&
                <iframe width={videoWidth} height={videoHeight} src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            }
            {
                isEditing &&
                <img src={thumbnail} />
            }
        </React.Fragment>
    );
};
export default withSitecoreContext()(Youtube);
    