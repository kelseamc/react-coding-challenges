import React, { useState, Component } from 'react';
import RocketCore from './RocketCore';

export function FunctionalRocket({takeoff}) {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore takeoff={takeoff} initialLaunchTime={initialLaunchTime} />;
}

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
