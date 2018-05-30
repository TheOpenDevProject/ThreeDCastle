class Promiser{

    /**
     * 
     * @param {Callback} fncOk 
     * @param {Callback} fncFail 
     */
    static generatePromise(fncOk,fncFail = () => {}){
        return new Promise(fnc,fncFail);
    }

    /**
     * @description Provide a list of callbacks to be resolved.
     * @param {Callback} fnc 
     */
    onceComplete(...fnc){
        return new Promise.all()
    }
}