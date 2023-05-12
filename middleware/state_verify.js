const data = {
    states: require('../model/states.json'),
    setStates: function (data) { this.states = data}
}

const verifyState = (req, res, next) => {
        const state = data.states.find(state => state.code === (req.params.code.toUpperCase()));
        if (!state) {
            return res.status(404).json({ "message": `Invalid state abbreviation parameter` });
        }
        
        res.state = state;
        next();
}

module.exports = verifyState