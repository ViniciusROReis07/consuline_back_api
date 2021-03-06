const express = require("express");

const routes = express.Router();

const autorizacaoMid = require("../../middlewares/autorizacaoDoPaciente");

const controller = require("../../controllers/notificacao");

routes.get("/notificacoes", autorizacaoMid, controller.listarPorPaciente);
routes.get("/notificacoes/numero", autorizacaoMid, controller.numeroNotificacao);

module.exports = routes;