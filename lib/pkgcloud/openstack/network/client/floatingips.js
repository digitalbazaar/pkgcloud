'use strict';

const resourcePath = 'floatingips';
const urlJoin = require('url-join');

exports.getFloatingIps = function(callback) {
  const options = {
    method: 'GET',
    path: resourcePath,
  };
  this._request(options, (err, body) => {
    if(err) {
      return callback(err);
    }
    callback(null, body.floatingips);
  });
};

exports.updateFloatingIp = function({floatingIpId, portId}, callback) {
  const options = {
    method: 'PUT',
    path: urlJoin(resourcePath, floatingIpId),
    body: {
      floatingip: {port_id: portId}
    }
  };
  this._request(options, (err, body) => {
    if(err) {
      return callback(err);
    }
    callback(null, body);
  });
};
