const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const statesController = require('../../controllers/statescontroller');
const verifyState = require('../../middleware/state_verify');
const verifyContig = require('../../middleware/contig_verify');
const funFactsController = require('../../controllers/FFcontroller');

router.route('/')
    .get(verifyContig, statescontroller.getAllStates)

router.route('/:code')
    .get(verifyState, statescontroller.getState)

router.route('/:code/funfact')
    .get(verifyState, funFactsController.getRandomFact)
    .post(verifyState, funFactsController.createNewFact)
    .patch(verifyState, funFactsController.updateFunFact)
    .delete(verifyState, funFactsController.deleteFunFact)

router.route('/:code/capital')
    .get(verifyState, statesController.getCapital)

router.route('/:code/nickname')
    .get(verifyState, statesController.getNickname)

router.route('/:code/population')
    .get(verifyState, statesController.getPopulation)

router.route('/:code/admission')
    .get(verifyState, statesController.getAdmission)

module.exports = router;