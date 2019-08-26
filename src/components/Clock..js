import React, { Component } from 'react';

import {action,createAtom, autorun} from "mobx";
import { observer, inject } from 'mobx-react';
import ThreeDstore from '../stores/ThreeDstore'

inject('ThreeDstore')
// @observer

class Clock  {

    atom;
    intervalHandler = null;
    currentDateTime;

    constructor() {
        // creates an atom to interact with the MobX core algorithm
        this.atom =    createAtom(
            // first param: a name for this atom, for debugging purposes
            "Clock",
            // second (optional) parameter: callback for when this atom transitions from unobserved to observed.
            () => this.startTicking(),
            // third (optional) parameter: callback for when this atom transitions from observed to unobserved
            // note that the same atom transitions multiple times between these two states
            () => this.stopTicking()
        );
    }

    @action getTime() {
        // let MobX know this observable data source has been used
        // reportObserved will return true if the atom is currently being observed
        // by some reaction.
        // reportObserved will also trigger the onBecomeObserved event handler (startTicking) if needed
        if (this.atom.reportObserved()) {
            return this.currentDateTime;
        } else {
            // apparently getTime was called but not while a reaction is running.
            // So, nobody depends on this value, hence the onBecomeObserved handler (startTicking) won't be fired
            // Depending on the nature of your atom
            // it might behave differently in such circumstances
            // (like throwing an error, returning a default value etc)
            return new Date();
        }
    }

   @action tick() {
        this.currentDateTime = new Date();
        // let MobX know that this data source has changed
        this.atom.reportChanged();
    }

   @action startTicking() {
        this.tick(); // initial tick
        this.intervalHandler = setInterval(
            () => this.tick(),
            1000
        );
    }

    @action stopTicking() {
        clearInterval(this.intervalHandler);
        this.intervalHandler = null;
    }

}

// const clock = new Clock();

// const disposer = autorun(() => console.log(clock.getTime()));


// disposer();


export default new Clock;