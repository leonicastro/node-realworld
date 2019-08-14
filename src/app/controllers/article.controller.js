'use strict';

module.exports = {

    get(req, res) {
        const response = {
            ok: `get ok`
        };
        res.send(response);
    },

    getById(req, res) {
        const response = {
            ok: `getbyid ok`,
            params: req.params
        };
        res.send(response);
    },

    post(req, res) {
        const response = {
            ok: 'post ok',
            params: req.body
        };
        res.send(response);
    },

    delete(req, res) {
        const response = {
            ok: 'delete ok'
        };
        res.send(response);
    }
};