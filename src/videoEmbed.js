import React from "react";
import PropTypes from "prop-types";

const VideoEmbed = ({ vidURL }) => (
    <div className="video-responsive" style={{ paddingBottom: '56.25%', position: 'relative', display: 'block', width: '100%' }}>
        <iframe
            width="100%"
            height="100%"
            src={`${vidURL}`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded Video"
            frameborder="0"
            allowfullscreen=""
            style={{ position: 'absolute', top: 0, left: 0 }}
        />
    </div>
);

VideoEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default VideoEmbed;